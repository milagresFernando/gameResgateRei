// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import ParallaxOndas from "./parallaxOndas";
import Title from "components/texts/title";

//Imagens

function BlocoComGrafismosFull(props) {
  return (
    <Fragment>
      <Container>
        <Row className="">
          <Col xs="12">
            <Title
              typeH="4"
              className=""
              content={<Fragment>Grafismo parallax tela inteira</Fragment>}
            />
            <hr />
          </Col>
        </Row>
      </Container>
      <ParallaxOndas />
    </Fragment>
  );
}

export default BlocoComGrafismosFull;
