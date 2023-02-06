// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "components/texts/title";

//Functions
import ItemRotate from "./itemRotate";
import ItemUp from "./itemUp";
import ItemDown from "./itemDown";
import ItemScale from "./itemScale";

function ScrollParallax(props) {
  return (
    <section>
      <Container>
        <Row className="">
          <Col xs="12">
            <Title
              typeH="2"
              className="titleDivisor"
              content={<Fragment>{props.sectionTitle}</Fragment>}
            />
            <hr />
          </Col>
        </Row>
        <Row className="parallaxWrapper">
          <Col sm="6" md="3" className="d-flex justify-content-center">
            <ItemRotate className="boxItemExample" />
          </Col>
          <Col sm="6" md="3" className="d-flex justify-content-center">
            <ItemUp className="boxItemExample" />
          </Col>
          <Col sm="6" md="3" className="d-flex justify-content-center">
            <ItemDown className="boxItemExample" />
          </Col>
          <Col sm="6" md="3" className="d-flex justify-content-center">
            <ItemScale className="boxItemExample" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ScrollParallax;
