import React from "react";
import Modal from "react-modal";
import { MdOutlineClose } from "react-icons/md";
import Button from "../Button";
import Input from "../Input";

const CauseModal = ({ modalIsOpen, closeModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Add cause"
      className="modal"
    >
      <div className="row-between">
        <h2>Add cause</h2>
        <Button onClick={closeModal} className="icon-button">
          <MdOutlineClose />
        </Button>
      </div>
      <div className="line" />
      <form>
        <Input label="Name" placeholder="Cause title" />
        <Input label="Zone" placeholder="Affected zone" />
        <Input label="Target" placeholder="Target sum to raise" />
        <Button onClick={closeModal}>
          Add cause
        </Button>
      </form>
    </Modal>
  );
};

export default CauseModal;
