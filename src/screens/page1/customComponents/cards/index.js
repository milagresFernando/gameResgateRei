// React Elements/Hooks
import { Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "components/texts/title";

import BlocoCardsVerticais from "./blocoCardsVerticais";
import BlocoCardsVerticaisHover from "./blocoCardsVerticaisHover";
import BlocoCardsHorizontais from "./blocoCardsHorizontais";
import BlocoCardsHorizontaisHover from "./blocoCardsHorizontaisHover";

//Imagens

function Cards(props) {
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
          <BlocoCardsVerticais />
        </Row>
        <Row className="">
          <BlocoCardsVerticaisHover />
        </Row>
        <Row className="">
          <BlocoCardsHorizontais />
        </Row>
        <Row className="">
          <BlocoCardsHorizontaisHover />
        </Row>
      </Container>
    </section>
  );
}

export default Cards;
