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
    if (type == "add to cart") {
      let newCart = [
        ...cart,
        {
          ...product,
          quantity: 1,
          deleteId: cart[0]
            ? (cart[cart.length - 1].deleteId as number) + 1
            : 0,
        },
      ];
      setCart(newCart);
    } else if (type == "remove from cart") {
      let newCart = cart.filter((e) => e.deleteId !== product.deleteId);
      setCart(newCart);
    }
  };
  return (
    <CartContext.Provider value={{ cart, handleAdd }}>
      {children}
    </CartContext.Provider>
  );
};

export default AppContext;
