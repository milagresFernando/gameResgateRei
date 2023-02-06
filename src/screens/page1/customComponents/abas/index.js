// React Elements/Hooks
import { Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import BlocoAbasHorizontal from "./blocoAbasHorizontal";
import BlocoAbasHorizontalFull from "./blocoAbasHorizontalFull";
import BlocoAbasVertical from "./blocoAbasVertical";
import BlocoAbasVerticalFull from "./blocoAbasVerticalFull";
import Title from "components/texts/title";

//Imagens

function Abas(props) {
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
          <BlocoAbasHorizontal />
        </Row>
        <Row className="">
          <BlocoAbasHorizontalFull />
        </Row>
        <Row className="">
          <BlocoAbasVertical />
        </Row>
        <Row className="">
          <BlocoAbasVerticalFull />
        </Row>
      </Container>
    </section>
  );
}

export default Abas;
