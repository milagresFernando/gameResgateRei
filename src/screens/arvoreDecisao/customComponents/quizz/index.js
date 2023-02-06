// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import BlocoArvoreFinalPontuacao from "./blocoArvoreFinalPontuacao";
import BlocoArvoreFinalFixo from "./blocoArvoreFinalFixo";

import Title from "components/texts/title";

//Imagens

function Quizzes(props) {
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
            <Title
              typeH="4"
              className=""
              content={
                <Fragment>
                  Árvore de decisão com final fixo após escolhas
                </Fragment>
              }
            />
          </Col>
        </Row>
        <BlocoArvoreFinalFixo />

        <Row className="">
          <Col xs="12">
            <Title
              typeH="4"
              className=""
              content={
                <Fragment>
                  Árvore de decisão com final decidido por pontuação
                </Fragment>
              }
            />
          </Col>
        </Row>
        <BlocoArvoreFinalPontuacao />

        <hr />
      </Container>
    </section>
  );
}

export default Quizzes;
