import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";

const OptionModal = (props) => (
  <Modal isOpen={!!props.selectedOption} contentLabel="Selected Option">
    {props.selectedOption}

    <button onClick={props.handleClearSelectedOption}>Okay</button>
  </Modal>
);

OptionModal.propTypes = {
  selectedOption: PropTypes.string,
  handleClearSelectedOption: PropTypes.func.isRequired
}

export default OptionModal;
