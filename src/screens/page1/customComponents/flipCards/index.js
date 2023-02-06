// React Elements/Hooks
import { Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "components/texts/title";
import BlocoFlipCardHorizontal from "./blocoFlipCardHorizontal";
import BlocoFlipCardVertical from "./blocoFlipCardVertical";

//Imagens

function FlipCards(props) {
  return (
    <section menuoption={props.menuoption && "true"}>
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
          <BlocoFlipCardHorizontal />
        </Row>
        <Row className="">
          <BlocoFlipCardVertical />
        </Row>
        <Row className=""></Row>
      </Container>
    </section>
  );
}

export default FlipCards;
