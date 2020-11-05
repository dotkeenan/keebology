import React from 'react';

function Header(props) {
  return (
    <header className="row text-light bg-dark justify-content-center mb-4">
      <div className="row header-contents align-items-center justify-content-between">
        <h1 className="header-h1">
          <i className="header-icon fas fa-dollar-sign"></i>
          Wicked Sales
        </h1>
        <div className="row align-items-center justify-content-end col-6">
          <p className="mb-0">{props.cartItemCount} Items</p>
          <i className="fas fa-shopping-cart"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
