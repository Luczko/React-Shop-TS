import React from "react";
const styles = require("./Header.module.css");

const HeaderSmall: React.FC = ({ children }) => {
  return <h2 className={styles.header_small}>{children}</h2>;
};

export default HeaderSmall;
