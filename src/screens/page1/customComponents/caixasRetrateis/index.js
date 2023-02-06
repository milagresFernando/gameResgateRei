// React Elements/Hooks
import { Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "components/texts/title";
import BlocoAccordionUmPorVez from "./blocoAccordionUmPorVez";
import BlocoAccordionExtendidoLeft from "./blocoAccordionExtendidoLeft";
import BlocoAccordionExtendidoRight from "./blocoAccordionExtendidoRight";
import BlocoAccordionUmPorVezFull from "./blocoAccordionUmPorVezFull";
//Imagens

function CaixasRetrateis(props) {
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
            <BlocoAccordionUmPorVez />
            <BlocoAccordionUmPorVezFull />
            <BlocoAccordionExtendidoLeft />
            <BlocoAccordionExtendidoRight />
            <hr />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CaixasRetrateis;
