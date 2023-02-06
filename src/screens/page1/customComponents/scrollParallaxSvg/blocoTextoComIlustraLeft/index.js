// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
// Components
import Title from "components/texts/title";
import FlexImgWithText from "components/images/flexImgWithText";

// Imagens
import ParallaxIlustraExemplo from "./parallaxIlustraExemplo";

function BlocoTextoComIlustraLeft(props) {
  const textsBlock1 = [
    {
      tagElement: "h5",
      className: "title mb-0",
      content: <Fragment>Lorem ipsum dolor</Fragment>,
    },
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          Interdum et malesuada <strong>fames ac ante ipsum primis</strong> in
          faucibus. Fusce ultrices aliquam pulvinar. Praesent cursus nulla in
          molestie dapibus. Curabitur sed venenatis justo. Cras mattis elementum
          turpis eget tincidunt. Sed lacinia tempus lorem, quis rutrum eros
          venenatis id. Phasellus sodales elementum tellus, non dapibus tortor
          blandit nec. Pellentesque pharetra et arcu sit amet pretium. Sed
          malesuada porta vulputate. Nulla iaculis nulla et imperdiet tristique.
        </Fragment>
      ),
    },
  ];

  return (
    <Fragment>
      <Row className="justify-content-center relative">
        <Col xs="12">
          <Title
            typeH="4"
            className=""
            content={<Fragment>Bloco de texto e ilustra com parallax</Fragment>}
          />
          <hr />
        </Col>
        <Col className="">
          <FlexImgWithText
            rowClasses="align-items-center svgParallaxBg"
            imgSide="left"
            type="customElement"
            customElement={<ParallaxIlustraExemplo />}
            colMd="5"
            textsBlock={textsBlock1}
            breakContent="md" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
          />
        </Col>
      </Row>
    </Fragment>
  );
}

export default BlocoTextoComIlustraLeft;
