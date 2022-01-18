import React from "react";
import ReactDOM from "react-dom";
//import "./styles/styles.scss";
//import 'normalize.css/normalize.css'

const alertFunct = () => {
  console.log("Logging works!");
  alert("Hello World");
};

const Test = () => (
  <div>
    <button className="button button--link" onClick={alertFunct}>
      Remove All
    </button>
  </div>
);

ReactDOM.render(<Test />, document.getElementById("app"));
