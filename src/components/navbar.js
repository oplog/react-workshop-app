import React from "react";
import { Navbar } from "react-bootstrap";

function Header(props) {
  return (
    <Navbar bg={props.color} variant="dark">
      <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
    </Navbar>
  );
}

export default Header;
