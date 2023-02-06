// React Elements/Hooks
import { Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "components/texts/title";
import BlocoLinhaScrollAlternate from "./blocoLinhaScrollAlternate";
import BlocoLinhaScrollEsquerda from "./blocoLinhaScrollEsquerda";
import BlocoLinhaScrollDireita from "./blocoLinhaScrollDireita";
import BlocoLinhaHorizontalClique from "./blocoLinhaHorizontalClique";
import BlocoLinhaVerticalClique from "./blocoLinhaVerticalClique";

//Imagens

function LinhaTempo(props) {
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
          <Col xs="12">
            <BlocoLinhaScrollAlternate />
          </Col>
        </Row>
        <Row className="">
          <Col xs="12">
            <BlocoLinhaScrollDireita />
          </Col>
        </Row>
        <Row className="">
          <Col xs="12">
            <BlocoLinhaScrollEsquerda />
          </Col>
        </Row>
        <Row className="">
          <Col xs="12">
            <BlocoLinhaHorizontalClique />
          </Col>
        </Row>
        <Row className="">
          <Col xs="12">
            <BlocoLinhaVerticalClique />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default LinhaTempo;
