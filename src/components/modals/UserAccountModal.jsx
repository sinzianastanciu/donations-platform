import React from "react";
import Modal from "react-modal";
import Button from "../Button";
import Input from "../Input";
import { MdOutlineClose } from "react-icons/md";
import { useForm } from "react-hook-form";

const UserAccountModal = ({ isModalOpen, closeModal, submitForm }) => {
  const { register, handleSubmit, getValues } = useForm();

  const handleClick = async () => {
    const data = getValues();
    submitForm({ ...data});
    closeModal();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Edit account"
      className="user-modal"
      ariaHideApp={false}
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
              <Input label="Phone" placeholder="Phone number" {...register("phoneNumber")}></Input>
              <Input label="FirstName" placeholder="First Name" {...register("firstName")}></Input>
              <Input label="LastName" placeholder="Last Name" {...register("lastName")}></Input>
            </div>
            <div className="row-inputs">
              <Input label="City" placeholder="City" {...register("city")}></Input>
              <Input label="Country" placeholder="Country" {...register("country")}></Input>
              <Input label="Address" placeholder="Address" {...register("address")}></Input>
            </div>
          </div>
          <Button type="button" onClick={handleSubmit(handleClick)}>
            Save
          </Button>
        </form>
    </Modal>
  );
};

export default UserAccountModal;
