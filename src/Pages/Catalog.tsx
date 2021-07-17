import React, { useState } from "react";
import Nav from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Container from "../components/Container/Container";
import HeaderBig from "../components/Header/HeaderBig";
import Products from "../components/Products/Products";
import Product from "../components/Products/Product/Product";
import ColumnLeft from "../components/ColumnLeft/ColumnLeft";
import ProductService from "../Products.service";
import "../App.css";

function Catalog() {
  const [radio, setRadio] = useState("All");

  function onChangeRadio(manufacturer: string): void {
    setRadio(manufacturer);
  }

  const [name, setName] = useState("");

  function onChangeName(event: React.ChangeEvent<HTMLInputElement>): void {
    setName(event.target.value);
    console.log(name);
  }

  function onClear(): void {
    setRadio("All");
    setName("");
  }

  let products = ProductService.getFilteredProducts(name, radio);

  return (
    <>
      <Nav />
      <Container>
        <HeaderBig>Catalog</HeaderBig>
        <div className="catalog">
          <ColumnLeft
            radio={radio}
            changeRadio={onChangeRadio}
            name={name}
            changeName={onChangeName}
            clear={onClear}
          />
          <div className="column-right">
            <Products>
              {products.map((e) => {
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
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Catalog;
