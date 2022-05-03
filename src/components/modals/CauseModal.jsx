import React from "react";
import Modal from "react-modal";
import { MdOutlineClose } from "react-icons/md";
import Button from "../Button";
import Input from "../Input";

const CauseModal = ({ isModalOpen, closeModal, modalType}) => { //modal type differs for add/edit cause option
    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel={modalType}
            className="modal"
        >
            <div className="modal-header">
                <h2>{modalType}</h2>
                <Button onClick={closeModal} className="icon-button">
                    <MdOutlineClose/>
                </Button>
            </div>
            <div className="modal-content">
                <form>
                    <Input label="Name" placeholder="Cause title"/>
                    <Input label="Zone" placeholder="Affected zone"/>
                    <Input label="Target" placeholder="Target sum to raise"/>
                    <Button type="button" onClick={closeModal}>
                        Add cause
                    </Button>
                </form>
            </div>

        </Modal>
    );
};

export default CauseModal;