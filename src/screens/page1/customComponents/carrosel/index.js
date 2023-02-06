// React Elements/Hooks
import { Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "components/texts/title";
import BlocoCarrosselPadrao from "./blocoCarrosselPadrao";
import BlocoCarrosselMoldura from "./blocoCarrosselMoldura";
import BlocoCarrosselAnimado from "./blocoCarrosselAnimado";

//Imagens

function Carrossel(props) {
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
            <BlocoCarrosselPadrao />
          </Col>
        </Row>
        <Row className="">
          <Col xs="12">
            <BlocoCarrosselMoldura />
          </Col>
        </Row>
        <Row className="">
          <Col xs="12">
            <BlocoCarrosselAnimado />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Carrossel;
