// React Elements/Hooks
import { Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "components/texts/title";
import BlocoImportante from "./blocoImportante";
import BlocoSaibaMais from "./blocoSaibaMais";
import BlocoAtencao from "./blocoAtencao";
//Imagens

function CaixasDestaque(props) {
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
        <BlocoImportante />
        <BlocoSaibaMais />
        <BlocoAtencao />
      </Container>
    </section>
  );
}

export default CaixasDestaque;
