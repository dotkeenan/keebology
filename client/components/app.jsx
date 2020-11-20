import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';
import DisclaimerModal from './disclaimer-modal';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'modal',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems() {
    fetch('/api/cart')
      .then(result => result.json())
      .then(cartItems => this.setState({ cart: cartItems }))
      .catch(err => console.error(err));
  }

  addToCart(product) {
    const reqOptions = {
      method: 'POST',
      body: JSON.stringify(product),
      headers: { 'Content-Type': 'application/json' }
    };
    fetch('/api/cart', reqOptions)
      .then(result => result.json())
      .then(product => {
        const updatedCart = this.state.cart.slice();
        updatedCart.push(product);
        this.setState({ cart: updatedCart });
      })
      .catch(err => console.error(err));
  }

  deleteFromCart(removedCartItemId) {
    fetch(`/api/cart/${removedCartItemId}`, { method: 'DELETE' })
      .then(() => {
        const newCart = this.state.cart.filter(cartItem => cartItem.cartItemId !== removedCartItemId);
        this.setState({
          cart: newCart
        });
        // this works but seems very resource heavy. makes a new fetch
        // call each time.
        // this.getCartItems();
      })
      .catch(err => console.error(err));
  }

  placeOrder(object) {
    const reqOptions = {
      method: 'POST',
      body: JSON.stringify(object),
      headers: { 'Content-Type': 'application/json' }
    };
    fetch('/api/orders', reqOptions)
      .then(() => this.setState({
        cart: [],
        view: { name: 'catalog', params: {} }
      }))
      .catch(err => console.error(err));
  }

  setView(name, params) {
    this.setState({
      view: { name: name, params: params }
    });
  }

  render() {
    let view = null;
    if (this.state.view.name === 'catalog') {
      view = <ProductList setView={this.setView} />;
    } else if (this.state.view.name === 'details') {
      view = <ProductDetails params={this.state.view.params} addToCart={this.addToCart} setView={this.setView}/>;
    } else if (this.state.view.name === 'cart') {
      view = <CartSummary cart={this.state.cart} setView={this.setView} deleteFromCart={this.deleteFromCart}/>;
    } else if (this.state.view.name === 'checkout') {
      view = <CheckoutForm cart={this.state.cart} setView={this.setView} placeOrder={this.placeOrder}/>;
    } else if (this.state.view.name === 'modal') {
      view = <DisclaimerModal setView={this.setView}/>;
    }
    return (
      <>
        <Header cartItemCount={this.state.cart.length} setView={this.setView}/>
        {view}
      < />
    );
  }
}
