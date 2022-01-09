import React from "react";
import Option from "./Option.js";
import PropTypes from "prop-types";

const Options = (props) => (
  <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    {props.options.length === 0 && <p>Please add an option to get started!</p>}
    {props.options.map((option) => (
      <Option
        key={option}
        optionText={option}
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
