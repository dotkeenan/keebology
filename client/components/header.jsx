import React from 'react';

function Header(props) {
  return (
    <header className="text-light bg-dark mb-4">
      <div className="row header-contents align-items-center ml-5">
        <h1 className="header-h1">
          <i className="header-icon fas fa-dollar-sign"></i>
          Wicked Sales
        </h1>
      </div>
    </header>
  );
}

export default Header;
