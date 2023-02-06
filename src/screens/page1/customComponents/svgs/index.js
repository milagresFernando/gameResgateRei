// React Elements/Hooks
import { Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "components/texts/title";
import BlocoClicaFicaNaTela from "./blocoClicaFicaNaTela";
import BlocoClicaMostraSomenteUmItem from "./blocoClicaMostraSomenteUmItem";
import BlocoClicaMostraSomenteUmItemFeedHtml from "./blocoClicaMostraSomenteUmItemFeedHtml";
import BlocoEstatico from "./blocoEstatico";

// Imagens

function Svgs(props) {
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
          <Col>
            <BlocoClicaFicaNaTela />
          </Col>
          <hr className="mt-4" />
        </Row>
        <Row className="">
          <Col sm="8">
            <BlocoClicaMostraSomenteUmItem />
          </Col>
          <Col sm="4">
            <BlocoEstatico />
          </Col>
          <hr className="mt-4" />
        </Row>
        <Row
          id="blocoFeedSvgExemplo"
          className="align-items-center justify-content-center"
        >
          <BlocoClicaMostraSomenteUmItemFeedHtml />

          <hr className="mt-4" />
        </Row>
      </Container>
    </section>
  );
}

export default Svgs;
