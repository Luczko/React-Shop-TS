import React from "react";
const styles = require("./Container.module.css");

const Container: React.FC = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
