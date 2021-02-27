import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function AddItemModal(props) {
  function modalAdd() {
    props.addtocart(props.product);
    props.onHide();
  }
  // console.log(props.product);
  // console.log(props.addToCart);
  return (
    <Modal
      // { ...props }
      show={props.show}
      onHide={props.onHide}
      size = "md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.product.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Add item to cart?</h4>
        <p>

        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={modalAdd}>Add</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal >
  );
}

export default AddItemModal;
// Old modal template
// import React from 'react';

// // Stretch goal is to try and learn the boostrap modal and conditionally render it
// // based on the app.jsx view, and also if a user has accepted terms or not
// // for now, I am used a modal I created myself.

// class Modal extends React.component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modalAccepted: false,
//       currentView: ''
//     };
//   }

//   render() {
//     return (
//       <div className="modal" tabIndex="-1" role="dialog">
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Modal title</h5>
//               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               <p>Modal body text goes here.</p>
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-primary">Save changes</button>
//               <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Modal;
