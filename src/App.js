import React from "react";
import "./App.css";
import {
  Navbar,
  ButtonToolbar,
  Button,
  Card,
  Row,
  Col,
  ListGroup,
  Container,
  Image
} from "react-bootstrap";

function App() {
  return (
    <>
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

      <Container fluid>
        <Row>
          <Col>
            <h4>Sizes:</h4>
            <ButtonToolbar>
              <Button variant="outline-dark" className="">
                XS
              </Button>
              <Button variant="outline-dark">S</Button>
              <Button variant="outline-dark">M</Button>
              <Button variant="outline-dark">L</Button>
              <Button variant="outline-dark">XL</Button>
            </ButtonToolbar>
          </Col>
          <Col md="auto">
            <Row>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            
          </Col>

          <Col>
            <Card>
              <Card.Header>Cart</Card.Header>
              <Card.Body>
                <Card.Title>Products</Card.Title>

                <Row>
                  <Col>
                    <Image src="https://via.placeholder.com/50" />
                  </Col>
                  <Col xs={7}>
                    With supporting text below as a natural lead-in
                  </Col>
                  <Col className="text-right">10 $</Col>
                </Row>
              </Card.Body>
              <Card.Footer className="text-muted">
                <Row>
                  <Col>
                    <Button variant="primary">Checkout</Button>
                  </Col>
                  <Col xs={7}>
                    <h3 className="float-right"> 25 $</h3>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
