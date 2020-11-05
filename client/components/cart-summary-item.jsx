import React from 'react';
import PriceFormatter from './price-formatter';

function CartSummaryItem(props) {
  return (
    <div className="row justify-content-center">
      <div className="card mb-3 product-item" style={{ maxWidth: 1250 + 'px' }}>
        <div className="row no-gutters justify-content-between">
          <div className="col-sm-3">
            <img src={props.item.image} className="card-img img-fit ml-4" alt={props.item.name} />
          </div>
          <div className="col-sm-8">
            <div className="card-body">
              <h5 className="card-title">{props.item.name}</h5>
              <p className="card-subtitle text-secondary product-price mb-2">{PriceFormatter(props.item.price)}</p>
              <p className="card-text">{props.item.shortDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSummaryItem;
