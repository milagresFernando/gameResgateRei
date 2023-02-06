// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "components/texts/title";
import BlocoAudioSimples from "./blocoAudioSimples";

//Imagens

function AudioPlayer(props) {
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

        <Row className="justify-content-center">
          <Col xs="12">
            <BlocoAudioSimples />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AudioPlayer;
