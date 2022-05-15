import React from "react";
import Modal from "react-modal";
import Button from "../Button";
import Input from "../Input";
import { MdOutlineClose } from "react-icons/md";

const UserAccountModal = ({ isModalOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Edit account"
      className="user-modal"
    >
      <div className="row-between">
        <h2>Edit account details</h2>
        <Button onClick={closeModal} className="icon-button">
          <MdOutlineClose />
        </Button>
      </div>
      <div className="line"/>
        <form>
          <div className="modal-fields">
            <div className="row-inputs">
              <Input label="Email" placeholder="Email address"></Input>
              <Input label="Phone" placeholder="Phone number"></Input>
              <Input label="FirstName" placeholder="First Name"></Input>
              <Input label="LastName" placeholder="Last Name"></Input>
            </div>
            <div className="row-inputs">
              <Input label="City" placeholder="City"></Input>
              <Input label="Country" placeholder="Country"></Input>
              <Input label="Address" placeholder="Address"></Input>
              <Input label="Password" placeholder="Password"></Input>
            </div>
          </div>
          <Button type="button" onClick={closeModal}>
            Save
          </Button>
        </form>
    </Modal>
  );
};

export default UserAccountModal;
