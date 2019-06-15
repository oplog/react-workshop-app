import React from "react";
import { Card, Row, Col, Image, Button } from "react-bootstrap";

function Cart(props) {
  return (
    <Card>
      <Card.Header>Cart</Card.Header>
      <Card.Body>
        <Card.Title>Products</Card.Title>
        <Row>
          {props.items}
          <Col>
            <Image
              height="50"
              src="https://img-trendyol.mncdn.com/Assets/ProductImages/oa/47/2478813/1/201731010002_1_org.jpg"
            />
          </Col>
          <Col>Title</Col>
          <Col>20 $</Col>
        </Row>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Row>
          <Col xs={8}>
            <Button variant="secondary">Clear</Button>
            <Button variant="primary" onClick={() => console.log("2")}>
              Checkout
            </Button>
          </Col>
          <Col xs={4} className="text-right">
            <span>50 $</span>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default Cart;
