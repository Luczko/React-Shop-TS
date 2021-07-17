import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";

const styles = require("./Navbar.module.css");

function Nav() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <ul className={styles.nav}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="Catalog">Catalog</Link>
          </li>
          <li>
            <Link to="About">About</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Nav;
