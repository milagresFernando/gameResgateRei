// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "components/texts/title";
import BlocoComGrafismosFull from "./blocoComGrafismosFull";
import BlocoComSVGBordas from "./blocoComSVGBordas";
import BlocoTextoComIlustraLeft from "./blocoTextoComIlustraLeft";
import BlocoTextoComIlustraRight from "./blocoTextoComIlustraRight";

//Imagens

function ScrollParallaxSvg(props) {
  return (
    <Fragment>
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
          <BlocoTextoComIlustraLeft />
          <BlocoTextoComIlustraRight />
          <BlocoComSVGBordas />
        </Container>
      </section>

      <BlocoComGrafismosFull />
    </Fragment>
  );
}

export default ScrollParallaxSvg;
