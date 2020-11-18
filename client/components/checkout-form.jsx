import React from 'react';
import CalculateTotal from './calculate-total';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePlaceOrder = this.handlePlaceOrder.bind(this);
  }

  handleClick() {
    this.props.setView('catalog', {});
  }

  handleChange(event) {
    const inputName = event.target.name;
    const value = event.target.value;
    const newState = {};
    newState[inputName] = value;
    this.setState(newState);
  }

  handlePlaceOrder(event) {
    event.preventDefault();
    this.props.placeOrder(this.state);
    this.setState({ name: '', creditCard: '', shippingAddress: '' });
    this.handleClick();
  }

  render() {
    return (
      <div className="container checkout-container pb-3 pt-3">
        <div className="row">
          <h2 className="col-12 font-weight-bold">My Cart</h2>
          <h4 className="col-12 text-muted">
            Order Total: {CalculateTotal(this.props.cart)}</h4>
        </div>
        <div>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="John Doe"
                value={this.state.name}
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="creditCard">Credit Card</label>
              <input
                name="creditCard"
                type="number"
                className="form-control"
                placeholder="1111222333444"
                value={this.state.creditCard}
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="shippingAddress">Shipping Address</label>
              <textarea
                name="shippingAddress"
                className="form-control"
                rows="3"
                placeholder="123 Wicked Street, &#10;Apt#23 &#10;Irvine, CA 92620"
                value={this.state.shippingAddress}
                onChange={this.handleChange}>
              </textarea>
            </div>
            <div className="container">
              <div className="form-footer row justify-content-between">
                <button
                  className="btn btn-light back-button text-muted"
                  onClick={this.handleClick}>
                  &lt; Keep Shopping
                </button>
                <button
                  className="btn btn-primary" onClick={this.handlePlaceOrder}>
                    Place Order
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CheckoutForm;
