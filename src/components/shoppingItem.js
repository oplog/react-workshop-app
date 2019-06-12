import React from "react";
import {
  Col,
  Card,
  Button,
  Row
} from "react-bootstrap";

export default function ShoppingItem(props) {
  const { title, text, price, size, image, onClick } = props;
  return (
    <Col sm={3} className={"mb-3"}>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text} ({size})</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col sm={4} className={"d-flex align-items-center"}>{price} $</Col>
            <Col sm={8}><Button variant="primary" className={"float-right"} onClick={onClick}>Add To Cart</Button></Col>
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  );
}