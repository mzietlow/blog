import React from "react";
import PropTypes from 'prop-types'

const Option = (props) => (
  <div>
    {props.optionText}{" "}
    <button onClick={() => props.handleDeleteOptionSingular(props.optionText)}>
      x
    </button>
  </div>
);

Option.propTypes = {
  optionText: PropTypes.string.isRequired,
  handleDeleteOptionSingular: PropTypes.func.isRequired
}

export default Option;