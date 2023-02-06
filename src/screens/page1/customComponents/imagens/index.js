// React Elements/Hooks
import { Fragment } from "react";

// Components
import { Container, Row, Col, Image } from "react-bootstrap";
import Title from "components/texts/title";
import BlocoTextoComImgFloat from "./blocoTextoComImgFloat";
import BlocoSliderComparativoComTexto from "./blocoSliderComparativoComTexto";
import BlocoParallaxComTexto from "./blocoParallaxComTexto";
import BlocoTextoComImgFlex from "./blocoTextoComImgFlex";

// Imagens
import imgFull from "screens/assets/images/img-Full.jpg";

function Imagens(props) {
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
            <Image src={imgFull} className="" loading="lazy" alt="" fluid />
            <hr />
          </Col>
        </Row>
        <Row className="">
          <Col xs="12">
            <BlocoTextoComImgFloat />
          </Col>
        </Row>

        <BlocoTextoComImgFlex />

        <Row className="">
          <Col xs="12">
            <BlocoSliderComparativoComTexto />
          </Col>
        </Row>
      </Container>
      <BlocoParallaxComTexto />
    </section>
  );
}

export default Imagens;
