import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";
const HeadLine = ({ header, desc }) => {
  if (!header) {
    return null;
  }
  return (
    <div data-test="headLine">
      <h1 data-test="header">{header}</h1>
      <p data-test="desc">{desc}</p>
    </div>
  );
};

HeadLine.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  tempArr: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string,
      lName: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      onlineStatus: PropTypes.bool,
    })
  ),
};
export default HeadLine;
