// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "components/texts/title";
import BlocoVoltarAvancar from "./blocoVoltarAvancar";

//Imagens

function BotoesNavegacao(props) {
  return (
    <section className="mb-3">
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
        <Row className="align-items-center">
          <Col className="d-flex justify-content-center align-items-center">
            <BlocoVoltarAvancar />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default BotoesNavegacao;
