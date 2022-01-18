import React from "react";
import PropTypes from "prop-types";

const Option = (props) => (
  <div className="option">
    <p className="option__text">
      {props.count}. {props.optionText}
    </p>
    <button
      className="button button--link"
      onClick={() => props.handleDeleteOptionSingular(props.optionText)}
    >
      Remove
    </button>
  </div>
);

Option.propTypes = {
  optionText: PropTypes.string.isRequired,
  handleDeleteOptionSingular: PropTypes.func.isRequired,
  count: PropTypes.object.isRequired,
};

export default Option;
