import React, { useContext } from "react";
import Nav from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Container from "../components/Container/Container";
import HeaderBig from "../components/Header/HeaderBig";
import HeaderSmall from "../components/Header/HeaderSmall";
import Products from "../components/Products/Products";
import Product from "../components/Products/Product/Product";

import useGetProducts from "../UseGetProducts";
import { CartContext } from "../AppContext";
import Button from "../components/Button/Button";

import "../App.css";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Nav />
      <Container>
        <HeaderBig>Your Cart</HeaderBig>
        <Products>
          {cart.map((e) => {
            return (
              <div className="product">
                <Product
                  key={e.id}
                  image={e.image}
                  amount={e.amount}
                  name={e.name}
                />
                <div>quantity: {e.quantity}</div>
                <Button product={e} action="remove from cart" />
              </div>
            );
          })}
        </Products>
      </Container>
      <Footer />
    </>
  );
}

export default Cart;
