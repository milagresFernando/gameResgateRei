// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "components/texts/title";
import BlocoNarradaTempo from "./blocoNarradaTempo";
import BlocoNarradaVideo from "./blocoNarradaVideo";
import BlocoVideoSimples from "./blocoVideoSimples";

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
          <BlocoVideoSimples />
        </Row>

        <Row className="justify-content-center">
          <BlocoNarradaVideo />
        </Row>
        <Row className="justify-content-center">
          <BlocoNarradaTempo />
        </Row>
      </Container>
    </section>
  );
}

export default VideoPlayer;
