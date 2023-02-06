// React Elements/Hooks
import { Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "components/texts/title";
import BlocoCheckBox from "./blocoCheckBox";
import BlocoInputsGroup from "./blocoInputsGroup";
import BlocoInputsText from "./blocoInputsText";
import BlocoRadioOption from "./blocoRadioOption";
import BlocoSelect from "./blocoSelect";
import BlocoSwtichs from "./blocoSwtichs";
import BlocoTextAreas from "./blocoTextAreas";

//Imagens

function Formularios(props) {
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
          <BlocoCheckBox />
          <BlocoRadioOption />
          <BlocoSwtichs />
        </Row>

        <Row className="">
          <BlocoInputsText />
          <BlocoInputsGroup />
        </Row>

        <Row className="">
          <BlocoTextAreas />
        </Row>
        <Row className="">
          <BlocoSelect />
        </Row>
      </Container>
    </section>
  );
}

export default Formularios;
