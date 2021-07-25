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

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Nav />
      <Container>
        <HeaderBig>Welcome to our store</HeaderBig>
        <HeaderSmall>Your Cart</HeaderSmall>
        <Products>
          {cart.map((e) => {
            return (
              <Product
                key={e.id}
                image={e.image}
                amount={e.amount}
                name={e.name}
              />
            );
          })}
        </Products>
      </Container>
      <Footer />
    </>
  );
}

export default Cart;
