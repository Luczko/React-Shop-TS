import React from "react";
const styles = require("./Header.module.css");

const HeaderBig: React.FC = ({ children }) => {
  return <h1 className={styles.header_big}>{children}</h1>;
};

export default HeaderBig;
