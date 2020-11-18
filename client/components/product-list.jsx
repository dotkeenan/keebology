import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: true
    };
    this.getProducts = this.getProducts.bind(this);
    this.createProducts = this.createProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products')
      .then(response => response.json())
      .then(products => {
        this.setState({
          products: products,
          isLoading: false
        });
      })
      .catch(err => console.error(err));
  }

  createProducts() {
    const productList = this.state.products.map(product => {
      return (
        <ProductListItem
          key = {product.productId}
          productId = {product.productId}
          product = {product}
          setView = {this.props.setView}
        />
      );
    });
    return (
      <div className="container product-list-container">
        <div className="row justify-content-center">
          {productList}
        </div>
      </div >
    );
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="container bg-light text-warning border rounded text-center">
          <h1>Loading Products!</h1>
          <div>
            <img src="/svgs/loading.svg" alt="loading" />
          </div>
        </div>
      );
    } else if (!this.state.products.length) {
      return (
        <div className="container bg-light text-dark border rounded text-center">
          <h1>There are no products in the database!</h1>;
        </div>
      );
    }

    const renderedProducts = this.createProducts();
    return (
      <div className="card-deck justify-content-between mt-2">
        {renderedProducts}
      </div>
    );
  }
}

export default ProductList;
