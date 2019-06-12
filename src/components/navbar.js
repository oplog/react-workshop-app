import React from "react";
import {
  Navbar
} from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        E-Commerce Cart App
    </Navbar.Brand>
    </Navbar>
  );
}