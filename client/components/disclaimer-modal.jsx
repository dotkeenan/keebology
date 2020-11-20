import React from 'react';

function DisclaimerModal(props) {
  function handleAgreeClick() {
    props.setView('catalog', {});
  }
  return (
    <div className="modal-container modal-backdrop">
      <div className=" container modal-elements">
        <div className="row justify-content-center text-center p-3">
          <h1 className="h1-disclaimer">Disclaimer!</h1>
          <p>{`This is a demo site and does not sell real products.  If you
          understand that, please feel free to use the site and look around!
          Again, you will not receive any products you attempt to buy, and I
          will use your credit card to buy and send you flowers.`}
          </p>
          <button className="btn btn-success rounded-pill" onClick={handleAgreeClick}>I Understand!</button>
        </div>
      </div>
    </div>
  );
}

export default DisclaimerModal;
