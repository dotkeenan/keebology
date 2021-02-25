import React from 'react';
import PriceFormatter from './price-formatter';
// import { Button, ButtonToolbar } from 'react-bootstrap';
import AddItemModal from './modal';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      isLoading: true,
      modalVisible: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleAddCart = this.handleAddCart.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
  }

  componentDidMount() {
    fetch(`/api/products/${this.props.params.productId}`)
      .then(response => response.json())
      .then(productDetails => {
        this.setState({
          product: productDetails,
          isLoading: false
        });
      })
      .catch(err => console.error(err));
  }

  handleClick() {
    this.props.setView('catalog', {});
  }

  handleAddCart() {
    // temporarily modifying this functionality so that adding to cart opens the modal
    // user must confirm to add to cart.
    this.modalOpen();
    // this.props.addToCart(this.state.product);
  }

  modalOpen() {
    this.setState({ modalVisible: true });
  }

  modalClose() {
    this.setState({ modalVisible: false });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="container bg-light text-warning border rounded text-center">
          <h1>Loading Product</h1>
          <div>
            <img src="/svgs/loading.svg" alt="loading" />
          </div>
        </div>
      );
    }

    const image = this.state.product.image;
    const name = this.state.product.name;
    const price = PriceFormatter(this.state.product.price);
    const shortDescription = this.state.product.shortDescription;
    const longDescription = this.state.product.longDescription;

    return (
      <>
        <div className="container">
          <div className="row justify-content-center">
            <div className="card mb-3 product-item pl-3 pr-3" style={{ maxWidth: 800 + 'px' }}>
              <button
                className="btn btn-light back-button mt-3 mb-3"
                onClick={this.handleClick}>
              &lt; Back to catalog
              </button>
              <div className="row no-gutters justify-content-between">
                <div className="col-sm-6">
                  <img src={image} className="card-img img-fit" alt={name} />
                </div>
                <div className="col-sm-5">
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-subtitle text-secondary product-price mb-2">{price}</p>
                    <p className="card-text">{shortDescription}</p>
                    <button className="btn btn-primary" onClick={this.handleAddCart}>Add to Cart</button>
                  </div>
                </div>

                <div className="card-body col-sm-12 p-4">
                  <p>{longDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ButtonToolbar seems unnecessary */}
        {/* <ButtonToolbar> */}
        <AddItemModal
          show={this.state.modalVisible}
          onHide={this.modalClose}
        />
        {/* </ButtonToolbar> */}
      </>
    );
  }
}

export default ProductDetails;
