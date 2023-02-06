// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import BlocoUnicaResposta from "./blocoUnicaResposta";
import BlocoMultiplasResposta from "./blocoMultiplasResposta";
import BlocoVerdadeiroFalso from "./blocoVerdadeiroFalso";
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
                  Quizz múltipla escolha, com apenas uma correta
                </Fragment>
              }
            />
          </Col>
        </Row>
        <BlocoUnicaResposta />

        <Row className="">
          <Col xs="12">
            <Title
              typeH="4"
              className=""
              content={<Fragment>Quizz múltipla verdadeiro ou falso</Fragment>}
            />
          </Col>
        </Row>
        <BlocoVerdadeiroFalso />

        <Row className="">
          <Col xs="12">
            <Title
              typeH="4"
              className=""
              content={
                <Fragment>
                  Quizz múltipla escolha, com uma sequência correta
                </Fragment>
              }
            />
          </Col>
        </Row>
        <BlocoMultiplasResposta />
        <hr />
      </Container>
    </section>
  );
}

export default Quizzes;
