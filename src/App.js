import React from "react";
import "./App.css";
import { Row, Col, Button, Card, Image } from "react-bootstrap";
import Header from "./components/navbar";
import ShoppingItem from "./components/shoppingItem";
import Cart from "./components/cart";

function App() {
  return (
    <div>
      <Header title="Cart App" color="dark" />
      <Row className="show-grid">
        <Col xs={3}>
          <h4> Sizes: </h4>
          <Button variant="outline-dark">XS</Button>
          <Button variant="outline-dark">S</Button>
          <Button variant="outline-dark">M</Button>
          <Button variant="outline-dark">L</Button>
          <Button variant="outline-dark">XL</Button>
        </Col>

        <Col xs={6}>
          <Row>
            <Col xs={3}>
              <ShoppingItem
                image="https://img-trendyol.mncdn.com/Assets/ProductImages/oa/47/2478813/1/201731010002_1_org.jpg"
                title="deneme123"
                desc="deneme321"
                price="100"
                onSubmit={() => console.log("log")}
              />
            </Col>
            <Col xs={3}>
              <ShoppingItem
                image="https://img-trendyol.mncdn.com/Assets/ProductImages/oa/47/2478813/1/201731010002_1_org.jpg"
                title="deneme123"
                desc="deneme321"
                price="100"
                onSubmit={() => console.log("log")}
              />
            </Col>
            <Col xs={3} />
            <Col xs={3} />
            <Col xs={3} />
          </Row>
        </Col>

        <Col xs={3}>
          <Cart />
        </Col>
      </Row>
    </div>
  );
}

export default App;
