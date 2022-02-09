/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// higher order component HOC: A component that renders another component

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The Info is {props.info}</p>
  </div>
);

/* const withAdminWarning = (WrappedComponent) => {
  // eslint-disable-next-line react/display-name
  return (props) => (
    <div>
      <p>This is private info. Please don't share!</p>
      <WrappedComponent {...props} />
    </div>
  );
}; */

const requireAuthentication = (WrappedComponent) => {
  // eslint-disable-next-line react/display-name
  return (props) => (
    <div>
      {props.authenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>This is private info. Please authenticate!</p>
      )}
    </div>
  );
};

const AuthInfo = requireAuthentication(Info);

Info.propTypes = {
  info: PropTypes.string,
};

// ReactDOM.render(<AdminInfo info="Test" />, document.getElementById("app"));
ReactDOM.render(
  <AuthInfo authenticated={false} info="Test" />,
  document.getElementById("app")
);
