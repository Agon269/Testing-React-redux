import React from "react";
import "./styles.scss";
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
export default HeadLine;
