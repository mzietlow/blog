import React from "react";
import PropTypes from "prop-types";

const Header = (props) => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      <h2 className="header__subtitle">{props.subtitle}</h2>
    </div>
  </div>
);

Header.defaultProps = {
  title: "someDefault",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Header;
