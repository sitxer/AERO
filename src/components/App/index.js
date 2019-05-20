import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CardsWrapper from "../CardsWrapper";
import Filter from "../Filter";

import "./style.scss";
import { ITEMS, BRANDS } from "../../constants/parts";

class App extends Component {
  render() {
    return (
      <main>
        <Container>
          <Row>
            <Col xs={9}>
              <CardsWrapper items={ITEMS} />
            </Col>
            <Col xs={3}>
              <Filter brands={BRANDS} />
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

export default App;
