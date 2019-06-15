import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

function ShoppingItem(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
      </Card.Body>

      <Card.Footer className="text-muted">
        <Row>
          <Col xs={4}>
            <Card.Text>{props.price} $</Card.Text>
          </Col>
          <Col xs={8}>
            <Button variant="primary" onClick={props.onSubmit}>
              Add to Card
            </Button>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default ShoppingItem;
