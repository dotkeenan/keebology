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
    // this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePlaceOrder = this.handlePlaceOrder.bind(this);
  }

  // handleClick() {
  //   this.props.setView('catalog', {});
  // }

  handleChange(event) {
    const inputName = event.target.name;
    const value = event.target.value;
    const newState = {};
    newState[inputName] = value;
    this.setState(newState);
  }

  handlePlaceOrder(event) {
    event.preventDefault();
    const creditCard = parseInt(this.state.creditCard, 10);
    if (!creditCard || !Number.isInteger(creditCard) || this.state.creditCard.length !== 16) {
      alert('Credit card number must be a 16 digit number with no spaces');
      return false;
    } else {
      this.props.placeOrder(this.state);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="container checkout-container pb-3 pt-3 col-12 col-sm-11 col-md-9 col-lg-8">
          <div className="row">
            <h2 className="col-12 font-weight-bold">My Cart</h2>
            <div className="col-12 row m-0 p-0 justify-content-between">
              <h4 className="col-6 text-muted pr-0">
                Order Total: {CalculateTotal(this.props.cart)}</h4>
              <h6 className="col-6 text-danger text-right pl-0">Please do not enter any sensitive/real information</h6>
            </div>
          </div>
          <div>
            <form onSubmit={this.handlePlaceOrder}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="John Doe"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required/>
              </div>
              <div className="form-group">
                <label htmlFor="creditCard">Credit Card</label>
                <input
                  name="creditCard"
                  type="number"
                  className="form-control"
                  placeholder="1111222333444"
                  value={this.state.creditCard}
                  onChange={this.handleChange}
                  required />
              </div>
              <div className="form-group">
                <label htmlFor="shippingAddress">Shipping Address</label>
                <textarea
                  name="shippingAddress"
                  className="form-control"
                  rows="3"
                  placeholder="123 Wicked Street, &#10;Apt#23 &#10;Irvine, CA 92620"
                  value={this.state.shippingAddress}
                  onChange={this.handleChange}
                  required>
                </textarea>
              </div>
              <div className="container">
                <div className="form-footer row justify-content-between">
                  <button
                    className="btn btn-light back-button text-muted"
                    onClick={this.handleClick}>
                  &lt; Keep Shopping
                  </button>
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Place Order"/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutForm;
