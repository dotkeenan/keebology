import React from 'react';
import PriceFormatter from './price-formatter';

function ProductListItem(props) {
  function handleClick() {
    props.setView('details', { productId: props.productId });
  }
  return (
    <div className="card product-item mb-4">
      <img
        src={props.product.image}
        alt={props.product.name}
        onClick={handleClick}
        className="card-img-top img-fit hover img-hover"/>
      <div className="card-body">
        <h5
          className="card-title mb-3 hover title"
          onClick={handleClick} >
          {props.product.name}
        </h5>
        <p className="card-subtitle text-secondary product-price mb-2">
          {PriceFormatter(props.product.price)}
        </p>
        <p className="card-text product-desc">{props.product.shortDescription}</p>
      </div>
    </div>
  );
}

export default ProductListItem;
