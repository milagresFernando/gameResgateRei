// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "components/texts/title";

import BlocoInterativoBotoes from "./blocoInterativoBotoes";
import BlocoInterativoSvgs from "./blocoInterativoSvgs";

//Imagens

function VideoPlayer(props) {
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
          <BlocoInterativoBotoes />
        </Row>
        <Row className="justify-content-center">
          <BlocoInterativoSvgs />
        </Row>
      </Container>
    </section>
  );
}

export default VideoPlayer;
