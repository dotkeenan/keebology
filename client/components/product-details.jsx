import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch(`/api/products/${this.props.params.productId}`)
      .then(response => response.json())
      .then(productDetails => {
        this.setState({
          product: productDetails
        });
      })
      .catch(err => console.error(err));
  }

  handleClick() {
    this.props.setView('catalog', {});
  }

  render() {
    return (
      <div className="card mb-3" style={{ maxWidth: 540 + 'px' }}>
        <button
          className="btn btn-light back-button ml-4 mt-3"
          // possibly change next line to use the props.setView instead?
          onClick={this.handleClick}>
            &lt; Back to catalog
        </button>
        {/* <a href="#" className="links ml-4 mt-3 text-muted">&lt; Back to catalog</a> */}
        <div className="row no-gutters">
          <div className="col-sm-7">
            <img src={this.state.product.image} className="card-img img-fit" alt="ostrich pillow"/>
          </div>
          <div className="col-sm-5">
            <div className="card-body">
              <h5 className="card-title">{this.state.product.name}</h5>
              <p className="card-subtitle text-secondary product-price mb-2">{this.props.product.price}</p>
              <p className="card-text">{this.state.product.shortDescription}</p>
            </div>
          </div>

          <div className="card-body col-sm-12 p-4">
            <p>{this.state.product.longDescription}</p>
          </div>

        </div>
      </div>
    );

  }
}

export default ProductDetails;

/* if (this.state.product) {
      return (
        <div className="card product-item mb-4">
          <img
            src="/images/ostrich-pillow.jpg"
            alt="Ostrich Pillow"
            className="card-img-top img-fit" />
          <div className="card-body">
            <h5 className="card-title mb-3">Ostrich Pillow</h5>
            <p className="card-subtitle text-secondary product-price mb-2">
              $1000.00
            </p>
            <p className="card-text product-desc">A weird ass ostrich pillow that looks kinda comfy actually, but I'd rather be dead than caught wearing this</p>
          </div>
        </div>
      );
    }

    <div className="card product-item mb-4">
        <img
          src="/images/ostrich-pillow.jpg"
          alt="Ostrich Pillow"
          className="card-img-top img-fit" />
        <div className="card-body">
          <h5 className="card-title mb-3">Ostrich Pillow</h5>
          <p className="card-subtitle text-secondary product-price mb-2">
          $1000.00
          </p>
          <p className="card-text product-desc">A weird ass ostrich pillow that looks kinda comfy actually, but I'd rather be dead than caught wearing this</p>
        </div>
      </div>

    */
