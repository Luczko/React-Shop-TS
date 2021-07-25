import React, { useState, createContext } from "react";
import { Producto } from "./interface";

interface MyContext {
  cart: Producto[];
  handleAdd: (type: string, product: Producto) => void;
}

export const CartContext = createContext<MyContext>({
  cart: [],
  handleAdd: (type: string, product: Producto) => {},
});

const AppContext: React.FC = ({ children }) => {
  const [cart, setCart]: [Producto[], (cart: Producto[]) => void] = useState<
    Producto[]
  >([]);

  const handleAdd = (type: string, product: Producto): void => {
    if (type == "add") {
      let newCart = [...cart, product];
      setCart(newCart);
      console.log(cart);
    } else {
      console.log("kupa");
    }
  };
  return (
    <CartContext.Provider value={{ cart, handleAdd }}>
      {children}
    </CartContext.Provider>
  );
};

export default AppContext;
