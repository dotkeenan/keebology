import React from 'react';

function Header(props) {
  function handleClick() {
    props.setView('cart', {});
  }
  return (
    <header className="container-fluid text-light bg-dark justify-content-center mb-4">
      <div className="row header-contents align-items-center justify-content-between">
        <div className="row logo-heading align-items-middle">
          <img className="keyboard-icon" src="/svgs/keyboard.svg" alt="keyboard" />
          <h1 className="header-h1 mb-0"><span className="keeb">Keeb</span>ology</h1>
        </div>

        <div className="d-flex header-cart">
          <p className="mb-0 hover" onClick={handleClick}>{props.cartItemCount} Items</p>
          <i className="fas fa-shopping-cart hover" onClick={handleClick}></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
