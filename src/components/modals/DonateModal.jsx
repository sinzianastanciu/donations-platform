import React from "react";
import Modal from "react-modal";
import { MdOutlineClose } from "react-icons/md";
import Button from "../Button";
import Input from "../Input";
import { useForm } from "react-hook-form";

const DonateModal = ({ modalIsOpen, closeModal, submitForm }) => {

  const { register, handleSubmit, getValues } = useForm();

  const handleClick = async () => {
    const data = getValues();
    submitForm({ ...data});
    closeModal();
    window.location.reload(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Donate"
      className="modal"
    >
      <div className="row-between">
        <h2>Donate</h2>
        <Button onClick={closeModal} className="icon-button">
          <MdOutlineClose />
        </Button>
      </div>
      <div className="line" />
      <form>
         <Input label="amount" placeholder="Amount to donate" {...register("amountRaised")}/>
         <Input label="firstName" placeholder="1234 1234 1234 1234" />
         <Input label="expirationDate" placeholder="LL/AA" />
         <Input label="cvc" placeholder="CVC" />
        <Button onClick={handleSubmit(handleClick)}>Validate</Button>
      </form>
    </Modal>
  );
};

export default DonateModal;
