import React, { useContext } from "react";

import { CartContext } from "../../AppContext";
import { Producto } from "../../interface";

const styles = require("./Button.module.css");

interface ButtonProps {
  product: Producto;
}

const Button: React.FC<ButtonProps> = ({ product }) => {
  const { handleAdd } = useContext(CartContext);

  return (
    <button
      onClick={() => {
        handleAdd("add", product);
        console.log(product);
      }}
    >
      Add to cart
    </button>
  );
};

export default Button;
