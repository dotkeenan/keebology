import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

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
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  setView(name, params) {
    this.setState({
      view: { name: name, params: params }
    });
  }

  render() {
    let view = null;
    if (this.state.view.name === 'catalog') {
      view = (<div className="container">
        <div className="row">
          <ProductList setView={this.setView} />
        </div>
      </div>);
    } else if (this.state.view.name === 'details') {
      view = (<div className="row justify-content-center">
        <ProductDetails params={this.state.view.params} setView={this.setView}/>
      </div>);
    }
    return (
      <>
        <Header />
        {view}
      < />
    );
  }
}
