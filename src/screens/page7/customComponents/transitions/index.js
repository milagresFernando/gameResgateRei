// React Elements/Hooks
import { Fragment, useRef, useState } from "react";

// Components
import { Col, Container, Row } from "react-bootstrap";
import Title from "components/texts/title";
import TransitionsSlide from "./transitionsSlide";
import TransitionsCollapse from "./transitionsCollapse";
import TransitionsGrow from "./transitionsGrow";
import TransitionsSlideRelativeContainer from "./transitionsSlideRelativeContainer";
import TransitionsZoom from "./transitionsZoom";
import TransitionsFade from "./transitionsFade";

//Imagens

//TESTE DO TRANSITIONS
function Transitions(props) {
  return (
    <section data-secao={props.sectionTitle}>
      <Container>
        <Row className="">
          <Col xs="12">
            <Title
              typeH="2"
              className="titleDivisor"
              content={<Fragment>{props.sectionTitle}</Fragment>}
            />
            {/* <hr /> */}
          </Col>
        </Row>

        <Row className="">
          <Col xs="12">
            <TransitionsFade />
          </Col>
        </Row>
        <Row className="">
          <Col xs="12">
            <TransitionsCollapse />
          </Col>
        </Row>

        <Row className="">
          <Col xs="12">
            <TransitionsGrow />
          </Col>
        </Row>

        <Row className="">
          <Col xs="12">
            <TransitionsSlide />
          </Col>
        </Row>

        <Row className="">
          <Col xs="12">
            <TransitionsSlideRelativeContainer />
          </Col>
        </Row>

        <Row className="">
          <Col xs="12">
            <TransitionsZoom />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Transitions;
