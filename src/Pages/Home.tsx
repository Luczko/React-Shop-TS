import React, { useState } from "react";
import Nav from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Container from "../components/Container/Container";
import HeaderBig from "../components/Header/HeaderBig";
import HeaderSmall from "../components/Header/HeaderSmall";
import Products from "../components/Products/Products";
import Product from "../components/Products/Product/Product";
import ProductService from "../Products.service";

function Home() {
  let products = ProductService.getProducts();

  function getFeatured(category: string) {
    let featured = products.filter((e) => e.featured);
    return featured.filter((e) => e.category === category);
  }

  return (
    <>
      <Nav />
      <Container>
        <HeaderBig>Welcome to our store</HeaderBig>
        <HeaderSmall>Desktops</HeaderSmall>
        <Products>
          {getFeatured("desktop").map((e) => {
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
        <HeaderSmall>Tablets</HeaderSmall>
        <Products>
          {getFeatured("tablet").map((e) => {
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

export default Home;
