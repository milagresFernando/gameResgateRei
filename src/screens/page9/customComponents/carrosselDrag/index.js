// React Elements/Hooks
import { Fragment, useRef, useState } from "react";

// Components
import { Col, Container, Row } from "react-bootstrap";
import Title from "components/texts/title";

import BlocoCarrosselDrag from "./blocoCarrosselDrag";

//Imagens

function CarrosselDrag(props) {
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

        <BlocoCarrosselDrag />
      </Container>
    </section>
  );
}

export default CarrosselDrag;
