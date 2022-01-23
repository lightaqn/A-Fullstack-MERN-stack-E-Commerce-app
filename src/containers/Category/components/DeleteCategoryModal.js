// import React from "react";
// import Modal from "../../../components/UI/Modal";

// const DeleteCategoryModal = (props) => {

//   const {
//     show,
//     handleClose,
//     modalTitle,
//     size,
//     expandedArray,
//     checkedArray,
//   } = props;
//     return(
//       <Modal
//       modalTitle={modalTitle}
//       show={show}
//       size={size}
//       handleClose={handleClose}
//       buttons={[
//          {
//            label: 'No',
//            color: 'primary',
//            onClick: () => {
//              alert('Deletion Declined');
//            }
//          },
//          {
//           label: 'Yes',
//           color: 'danger',
//           onClick: deleteCategories
//           }
//       ]}
//       >
//           <h5>Expanded</h5>
//           { expandedArray.map((item, index) => <span key={index}>{item.name}</span>) }
//           <h5>Checked</h5>
//           { checkedArray.map((item, index) => <span key={index}>{item.name}</span>) }
//       </Modal>
//     )
// }

// export default DeleteCategoryModal