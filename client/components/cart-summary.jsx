import React from 'react';
import CartSummaryItem from './cart-summary-item';
import CalculateTotal from './calculate-total';

function CartSummary(props) {
  function handleClick() {
    props.setView('catalog', {});
  }

  return (
    <>
      <div className="container cart-summary-container">
        <div className="row cart-heading">
          <button
            className="btn btn-light back-button mt-3 mb-3"
            onClick={handleClick}>
          &lt; Back to catalog
          </button>
          <h2 className="col-12 cart-h2">My Cart</h2>
        </div>
        <div>
          {
            props.cart.length
              ? props.cart.map((item, index) => <CartSummaryItem key={index} item={item}/>)
              : <h3>No items in cart</h3>
          }
        </div>
        <div className="cart-total">
          <h3>Item Total {CalculateTotal(props.cart)}</h3>
        </div>
      </div>
    </>
  );
}

export default CartSummary;

// figure out how to do item total
