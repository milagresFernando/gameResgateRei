// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "components/texts/title";
import BlocoTabelaFlex from "./blocoTabelaFlex";
import BlocoTabelaGrid from "./blocoTabelaGrid";
import BlocoTabelaPadrao from "./blocoTabelaPadrao";

//Imagens

function Tabelas(props) {
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
        <Row className="">
          <Col xs="12">
            <BlocoTabelaPadrao />
          </Col>
        </Row>
        <Row className="">
          <Col xs="12">
            <BlocoTabelaFlex />
          </Col>
        </Row>
        <Row className="">
          <Col xs="12">
            <BlocoTabelaGrid />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Tabelas;
