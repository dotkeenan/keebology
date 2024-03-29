require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/products', (req, res, next) => {
  const sql = `
    select "productId",
           "name",
           "price",
           "image",
           "shortDescription"
      from "products"
  order by "productId" asc
  `;

  db.query(sql)
    .then(result => res.status(200).json(result.rows))
    .catch(err => next(err));
});

app.get('/api/products/:productId', (req, res, next) => {
  const productIdInput = parseInt(req.params.productId, 10);

  if (productIdInput <= 0 || !Number.isInteger(productIdInput)) {
    return next(new ClientError('"productId" must be a positive integer', 400));
  }

  const sql = `
  select *
  from "products"
  where "productId" = $1
  `;

  const params = [req.params.productId];

  db.query(sql, params)
    .then(result => {
      const productQuery = result.rows[0];
      if (!productQuery) {
        return next(new ClientError('That "productId" does not exist', 404));
      }
      res.status(200).json(productQuery);
    })
    .catch(err => {
      console.error(err);
      next(err);
    });

});

app.get('/api/cart', (req, res, next) => {
  if (!req.session.cartId) return res.json([]);
  const select = `
    select "c"."cartItemId",
           "c"."price",
           "p"."productId",
           "p"."image",
           "p"."name",
           "p"."shortDescription"
      from "cartItems" as "c"
      join "products" as "p" using ("productId")
     where "c"."cartId" = $1
  `;
  const params = [req.session.cartId];
  db.query(select, params)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

app.post('/api/cart', (req, res, next) => {
  const productId = parseInt(req.body.productId, 10);
  if (!req.body.productId || !Number.isInteger(productId)) {
    return next(new ClientError('"productId" must be a positive integer', 400));
  }

  const sql = `
    select "price"
      from "products"
     where "productId" = $1
  `;

  const params = [productId];

  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        throw new ClientError('product with that productId does not exist', 404);
      }
      const price = result.rows[0].price;
      const insert = `
        insert into "carts" ("cartId", "createdAt")
             values (default, default)
          returning "cartId"
      `;

      if (req.session.cartId) {
        return { cartId: req.session.cartId, price: price };
      } else {
        return (
          db.query(insert)
            .then(result => {
              const cartId = result.rows[0].cartId;
              const object = {
                cartId: cartId,
                price: price
              };
              return object;
            })
        );
      }
    })
    .then(result => {
      req.session.cartId = result.cartId;
      const insert = `
        insert into "cartItems" ("cartId", "productId", "price")
             values ($1, $2, $3)
          returning "cartItemId"
      `;
      const params = [result.cartId, productId, result.price];
      return (
        db.query(insert, params)
          .then(result => result.rows[0])
      );
    })
    .then(result => {
      const select = `
        select "c"."cartItemId",
               "c"."price",
               "p"."productId",
               "p"."image",
               "p"."name",
               "p"."shortDescription"
          from "cartItems" as "c"
          join "products" as "p" using ("productId")
         where "c"."cartItemId" = $1
      `;

      const params = [result.cartItemId];

      return (
        db.query(select, params)
          .then(result => {
            return res.status(201).json(result.rows[0]);
          })
      );
    }

    )
    .catch(err => next(err));
});

app.post('/api/orders', (req, res, next) => {
  if (!req.session.cartId) {
    throw new ClientError('No session with that "cartId" exists', 400);
  }

  if (!req.body.name ||
   !req.body.creditCard ||
   !req.body.shippingAddress) {
    throw new ClientError('"name", "creditCard", and "shippingAddress" must all be filled out', 400);
  } else if (!Number(req.body.creditCard) || req.body.creditCard.length !== 16) {
    throw new ClientError('creditCard must be a 16 digit number with no spaces', 400);
  }

  const insert = `
    insert into "orders" ("name", "creditCard", "shippingAddress", "cartId")
         values ($1, $2, $3, $4)
    returning "orderId",
              "createdAt",
              "name",
              "creditCard",
              "shippingAddress";
  `;
  const params = [req.body.name, req.body.creditCard, req.body.shippingAddress, req.session.cartId];

  db.query(insert, params)
    .then(order => {
      req.session.destroy();
      res.status(201).json(order.rows[0]);
    })
    .catch(err => console.error(err));
});

app.delete('/api/cart/:cartItemId', (req, res, next) => {
  const cartItemId = parseInt(req.params.cartItemId, 10);

  if (!req.session.cartId) {
    return next(new ClientError('That cartId does not exist in current session', 400));
  } else if (cartItemId <= 0 || !Number.isInteger(cartItemId)) {
    return next(new ClientError('cartItemId must be a positive integer', 400));
  }

  const sql = `
    delete from "cartItems"
           where "cartItemId" = $1
             and "cartId" = $2
       returning *;
  `;

  const params = [cartItemId, req.session.cartId];

  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        return next(new ClientError(`cartItemId of ${cartItemId} does not exist`, 400));
      }
      res.status(204).json(result.rows[0]);
    })
    .catch(err => console.error(err));
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
