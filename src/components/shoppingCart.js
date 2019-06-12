import React from "react";
import {
  Card,
  Row,
  Col,
  Button,
  Image
} from "react-bootstrap";

function calculatePrice(cart) {
  let price = 0;
  cart.forEach(item => {
    price += item.price
  })
  return price;
}

function checkout(cart) {
  let price = calculatePrice(cart);
  let items = cart.length;
  alert(items + " products ," + price + " $")
}
export default function ShoppingCart(props) {
  const { cart } = props;
  return (
    <Card>
      <Card.Header>Cart</Card.Header>
      <Card.Body>
        <Card.Title>Products</Card.Title>
        {cart.map(item => {
          return (
            <Row className="mt-3">
              <Col>
                <Image src={item.image} height="50" />
              </Col>
              <Col xs={7}>
                {item.text} ({item.size})
              </Col>
              <Col className="text-right">{item.price} $</Col>
            </Row>
          );
        })}
      </Card.Body>
      <Card.Footer className="text-muted">
        <Row>
          <Col>
            <Button variant="primary" onClick={() => checkout(cart)}>Checkout</Button>
          </Col>
          <Col xs={7}>
            <h3 className="float-right">{calculatePrice(cart)}$</h3>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  )
}