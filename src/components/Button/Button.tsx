import React, { useContext } from "react";

import { CartContext } from "../../AppContext";
import { Producto } from "../../interface";

const styles = require("./Button.module.css");

interface ButtonProps {
  product: Producto;
  action: string;
}

const Button: React.FC<ButtonProps> = ({ product, action }) => {
  const { handleAdd } = useContext(CartContext);

  return (
    <button
      onClick={() => {
        handleAdd(action, product);
      }}
    >
      {action}
    </button>
  );
};

export default Button;
