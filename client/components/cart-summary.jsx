import React from 'react';
import CartSummaryItem from './cart-summary-item';
import CalculateTotal from './calculate-total';

function CartSummary(props) {

  function handleClick() {
    props.setView('catalog', {});
  }

  function handleCheckout() {
    props.setView('checkout', {});
  }

  function CheckoutBtn() {
    if (props.cart.length) {
      return (
        <button
          className="checkout-btn btn btn-primary"
          onClick={handleCheckout}>
            Checkout
        </button>
      );
    }
  }

  return (
    <div className="container cart-summary-container">
      <div className="row">
        <button
          className="btn btn-light back-button mt-3 mb-3"
          onClick={handleClick}>
          &lt; Back to catalog
        </button>
        <h2 className="col-12 cart-h2">My Cart</h2>
      </div>
      <div className="row">
        {
          props.cart.length
            ? props.cart.map((item, index) => <CartSummaryItem key={index} item={item}/>)
            : <h3>No items in cart</h3>
        }
      </div>
      <div className="container cart-footer">
        <div className="row cart-total justify-content-between align-items-center">
          <h3 className="item-total">Item Total: {CalculateTotal(props.cart)}</h3>
          {CheckoutBtn()}
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
