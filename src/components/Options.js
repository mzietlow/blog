import React from "react";
import Option from "./Option.js";
import PropTypes from "prop-types";

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        Remove All
      </button>
    </div>
    {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
    {props.options.map((option, index) => (
      <Option
        key={option}
        optionText={option}
        count={index+1}
        handleDeleteOptionSingular={props.handleDeleteOptionSingular}
      />
    ))}
  </div>
);

Options.propTypes = {
  options: PropTypes.array.isRequired,
  handleDeleteOptions: PropTypes.func.isRequired,
  handleDeleteOptionSingular: PropTypes.func.isRequired,
};
export default Options;
