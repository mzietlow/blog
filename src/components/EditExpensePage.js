import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const EditExpensePage = () => {
  const params = useParams();
  return (
    <div>This is from my EditExpensePage component. {params.id}</div>
  );
};

EditExpensePage.propTypes = {
  match: PropTypes.object
}

export default EditExpensePage;