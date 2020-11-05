import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
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
      view = <CartSummary cart={this.state.cart} setView={this.setView}/>;
    }
    return (
      <>
        <Header cartItemCount={this.state.cart.length} setView={this.setView}/>
        {view}
      < />
    );
  }
}
