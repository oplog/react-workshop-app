import React from "react";
import "./App.css";
import Header from "./components/navbar";
import ShoppingCart from "./components/shoppingCart";
import Products from "./products";
import {
  ButtonToolbar,
  Button,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import ShoppingItem from "./components/shoppingItem";

const sizes = ["XS", "S", "M", "L", "XL"];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSize: null,
      cart: []
    }
  }
  changeSize(size) {
    let selectedSize = this.state.selectedSize === size ? "" : size;
    this.setState({
      selectedSize
    })
  }
  clearCart() {
    this.setState({ cart: [] });
  }
  addCart(product) {
    let { cart } = this.state;
    const itemIndex = cart.findIndex(item => {
      return item.id === product.id;
    });
    if (itemIndex < 0) {
      product.count = 1;
      cart.push(product);
    } else {
      cart[itemIndex].count += 1;
    }
    this.setState({ cart });
  }
  render() {
    return (
      <>
        <Header />
        <Container fluid>
          <Row>
            <Col sm={2}>
              <h4>Sizes:</h4>
              <ButtonToolbar>
                {sizes.map(size => {
                  return (
                    <Button variant={this.state.selectedSize === size ? "primary" : "outline-dark"} onClick={() => this.changeSize(size)}>{size}</Button>
                  )
                })}
              </ButtonToolbar>
            </Col>
            <Col sm={6}>
              <Row>
                {Products.map(product => {
                  if (!this.state.selectedSize || this.state.selectedSize === product.size) {
                    return (
                      <ShoppingItem {...product} onClick={() => this.addCart(product)} />
                    )
                  };
                  return null;
                })}
              </Row>
            </Col>
            <Col sm={4}>
              <ShoppingCart cart={this.state.cart} clearCart={() => this.clearCart()} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
