import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) =>(
    <Modal
        isOpen={!!props.selectedOption}
        shouldCloseOnEsc={true}
        onRequestClose={props.handleModalBtn}
        closeTimeoutMS={200}
        className="modal"
        contentLabel="Selected Option"
    >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="small-buttons modal-btn" onClick={props.handleModalBtn}>Ok</button>
    
    </Modal>
);

export default OptionModal;
