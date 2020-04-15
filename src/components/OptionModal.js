import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const optionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleCloseModal}
        ariaHideApp={false}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className='modal'
    >
        <h3 className='modal__title'>Selected Option</h3>
        {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
        <button className='button' onClick={props.handleCloseModal}>Okay</button>
    </Modal>
);

export default optionModal;