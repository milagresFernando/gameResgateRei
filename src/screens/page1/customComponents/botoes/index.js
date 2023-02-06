// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "components/texts/title";
import BlocoBotoes from "./blocoBotoes";
import BlocoBotoesModal01 from "./blocoBotoesModal01";
import BlocoBotoesModal02 from "./blocoBotoesModal02";
import BlocoBotoesColmeiaCom06 from "./blocoBotoesModalColmeia/blocoBotoesColmeiaCom06";
import BlocoBotoesColmeiaCom07 from "./blocoBotoesModalColmeia/blocoBotoesColmeiaCom07";
import BlocoBotoesColmeiaCom08 from "./blocoBotoesModalColmeia/blocoBotoesColmeiaCom08";
import BlocoBotoesColmeiaCom09 from "./blocoBotoesModalColmeia/blocoBotoesColmeiaCom09";

//Imagens

function Botoes(props) {
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

        <BlocoBotoes />
        <Row className="">
          <Col xs="12">
            <Title
              typeH="4"
              className=""
              content={<Fragment>Botões modal</Fragment>}
            />
          </Col>
        </Row>
        <Row className="">
          <BlocoBotoesModal01 />
          <BlocoBotoesModal02 />
        </Row>

        <Row className="">
          <Col xs="12">
            <Title
              typeH="4"
              className=""
              content={<Fragment>Grupo de Botões - Popup (Colméia)</Fragment>}
            />
          </Col>
        </Row>
        <Row className="">
          <BlocoBotoesColmeiaCom09 />
          <BlocoBotoesColmeiaCom07 />
        </Row>
        <Row className="">
          <BlocoBotoesColmeiaCom08 />
          <BlocoBotoesColmeiaCom06 />
        </Row>
      </Container>
    </section>
  );
}

export default Botoes;
