import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { map } from "lodash";

import Card from "../Card";

class CardsWrapper extends Component {
  render() {
    return (
      <Row>
        {map(this.props.parts, (item, id) => {
          return (
            <Col xs={4} key={id}>
              <Card item={item} id={id} />
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default CardsWrapper;
