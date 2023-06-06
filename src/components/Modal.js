import React from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root"); // set root element

const Modal = ({ isOpen, contentLabel, onRequestClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel={contentLabel}
      onRequestClose={onRequestClose}
      className="rounded p-5 bg-gray-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
