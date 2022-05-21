import React from "react";
import Modal from "react-modal";
import { MdOutlineClose } from "react-icons/md";
import Button from "../Button";
import Input from "../Input";
import { useForm } from "react-hook-form";
import axiosInstance from "../../configurations/axiosInstance";
import { routes } from "../../configurations/api";
import { useAuth0 } from "@auth0/auth0-react";

const DonateModal = ({ modalIsOpen, closeModal, submitForm, userId, causeId}) => {

  const { register, handleSubmit, getValues } = useForm();

  const handleClick = async () => {
    const data = getValues();
    console.log(data)
    submitForm({ ...data});
    makeDonation(data);
    closeModal();
    window.location.reload(false);
  };

  const makeDonation = (data) => {
      axiosInstance
        .post(routes.donations.makeDonation, {
            amount: data.amountRaised,
            causeId: causeId,
            userId: userId
        })};

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
