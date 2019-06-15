import React from "react";
import "./App.css";
import { Navbar, Row, Col, Button, Card, Image } from "react-bootstrap";

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Cart App</Navbar.Brand>
      </Navbar>
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
              <Card>
                <Card.Img
                  variant="top"
                  src="https://img-trendyol.mncdn.com/Assets/ProductImages/oa/47/2478813/1/201731010002_1_org.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>

                <Card.Footer className="text-muted">
                  <Row>
                    <Col xs={4}>
                      <Card.Text>80 $</Card.Text>
                    </Col>
                    <Col xs={8}>
                      <Button variant="primary">Add to Card</Button>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Col>
            <Col xs={3} />
            <Col xs={3} />
            <Col xs={3} />
            <Col xs={3} />
          </Row>
        </Col>

        <Col xs={3}>
          <Card>
            <Card.Header>Cart</Card.Header>
            <Card.Body>
              <Card.Title>Products</Card.Title>
              <Row>
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
                  <Button variant="primary">Checkout</Button>
                </Col>
                <Col xs={4} className="text-right">
                  <span>50 $</span>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default App;
