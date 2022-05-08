import React from "react";
import Modal from "react-modal";
import { MdOutlineClose } from "react-icons/md";
import Button from "../Button";
import Input from "../Input";

const DonateModal = ({ modalIsOpen, closeModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Donate"
      className="donate-modal"
    >
      <div className="row-between">
        <h2>Donate</h2>
        <Button onClick={closeModal} className="icon-button">
          <MdOutlineClose />
        </Button>
      </div>
      <div className="line" />
      <form>
          <div className="modal-fields">
            <div className="personal-data">
                <div className="text-details">Personal data</div>
                <Input label="firstName" placeholder="First name" />
                <Input label="lastName" placeholder="Last name" />
                <Input label="phoneNumber" placeholder="Phone number" />
                <Input type="date" label="birthDate" placeholder="Birthdate" />
                <Input label="address" placeholder="Address" />
                <Input label="city" placeholder="City" />
                <Input label="country" placeholder="Country" />
            </div>
    
            <div className="payment">
                <div className="text-details">My payment</div>
                <Input label="amount" placeholder="Amount to donate" />
                <Input label="firstName" placeholder="1234 1234 1234 1234" />
                <Input label="expirationDate" placeholder="LL/AA" />
                <Input label="cvc" placeholder="CVC" />
            </div>
          </div>
       
       

        <Button onClick={closeModal}>Validate</Button>
      </form>
    </Modal>
  );
};

export default DonateModal;
