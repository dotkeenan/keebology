import React from 'react';
import PriceFormatter from './price-formatter';

function CartSummaryItem(props) {
  function handleRemoveClick() {
    props.deleteFromCart(props.item.cartItemId);
  }

  return (
    <div className="container">
      <div className="justify-content-center">
        <div className="card mb-3 product-item pb-4" style={{ maxWidth: 1250 + 'px' }}>
          <div className="row no-gutters justify-content-between align-items-center">
            <div className="col-md-4">
              <img src={props.item.image} className="card-img-top img-fit" alt={props.item.name} />
            </div>
            <div className="col-md-5">
              <div className="card-body">
                <h5 className="card-title">{props.item.name}</h5>
                <p className="card-subtitle text-secondary product-price mb-2">{PriceFormatter(props.item.price)}</p>
                <p className="card-text">{props.item.shortDescription}</p>
              </div>
            </div>
            <div className="col-md-2 text-center">
              <button className="btn btn-danger" onClick={handleRemoveClick}>Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSummaryItem;
