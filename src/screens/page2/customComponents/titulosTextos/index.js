// React Elements/Hooks
import { Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "components/texts/title";
import BlocoTitulos from "./blocoTitulos";
import BlocoTextos from "./blocoTextos";
import BlocoListas from "./blocoListas";

function TituloTextos(props) {
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
          <BlocoTitulos />
        </Row>

        <Row className="">
          <Col xs="12">
            <BlocoTextos />
          </Col>
        </Row>

        <Row className="">
          <BlocoListas />
        </Row>
      </Container>
    </section>
  );
}

export default TituloTextos;
