import React from "react";
import { Producto } from "../../../interface";
import Button from "../../Button/Button";
import styles from "./Product.module.css";

interface Props {
  image: string;
  name: string;
  amount: string;
}

const Product: React.FC<Props> = ({ image, name, amount }) => {
  return (
    <div className={styles.product}>
      <img src={image} alt={name} />
      <p className={styles.price}>{amount}</p>
      <h3>{name}</h3>
    </div>
  );
};

export default Product;
