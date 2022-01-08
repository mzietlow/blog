import React from "react";

const Option = (props) => (
  <div>
    {props.optionText}{" "}
    <button onClick={(e) => props.handleDeleteOptionSingular(props.optionText)}>
      x
    </button>
  </div>
);

export default Option;