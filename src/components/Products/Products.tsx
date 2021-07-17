import React from "react";
const styles = require("./Products.module.css");

const Products: React.FC = ({ children }) => {
  return <div className={styles.products}>{children}</div>;
};

export default Products;
