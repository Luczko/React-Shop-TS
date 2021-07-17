import React from "react";
import Container from "../Container/Container";

const styles = require("./Footer.module.css");

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <p>
          Shop © 2020 <br /> Designed by Luczko{" "}
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
