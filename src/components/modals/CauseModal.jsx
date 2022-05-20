import React from "react";
import Modal from "react-modal";
import { MdOutlineClose } from "react-icons/md";
import Button from "../Button";
import Input from "../Input";
import Textarea from "../Textarea";
import { useForm } from "react-hook-form";

const CauseModal = ({ modalIsOpen, closeModal, submitForm }) => {

  const { register, handleSubmit, getValues } = useForm();

  const handleClick = async () => {
    const data = getValues();
    submitForm({ ...data});
    closeModal();
  };

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
        <Input label="Name" placeholder="Cause title" {...register("title")} />
        <Input label="Zone" placeholder="Affected zone" {...register("zone")} />
        <Input label="Target" placeholder="Target sum to raise" {...register("target")}/>
        <Textarea label="Details" placeholder="Cause details" {...register("summary")}/>
        <Input label="Image" placeholder="Image link" {...register("image")}/>
        <Button onClick={handleSubmit(handleClick)}>
          Add cause
        </Button>
      </form>
    </Modal>
  );
};

export default CauseModal;
