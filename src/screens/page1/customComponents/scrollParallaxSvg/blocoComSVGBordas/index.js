// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
// Components
import Title from "components/texts/title";
import FlexImgWithText from "components/images/flexImgWithText";

// Imagens

import TextBlock from "components/texts/text_block";
import ParallaxTresBolas from "./parallaxTresBolas";
import ParallaxTresBolasDesfoque from "./parallaxTresBolasDesfoque";

function BlocoComSVGBordas(props) {
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
            content={
              <Fragment>
                Bloco de texto com grafismos em parallax nas bordas
              </Fragment>
            }
          />
          <hr />
        </Col>
        <Col className="">
          <div className="bgCor4 p-5 my-5 relative">
            <ParallaxTresBolasDesfoque />
            <ParallaxTresBolas />
            <TextBlock textsBlock={textsBlock1} />
          </div>
        </Col>
      </Row>
    </Fragment>
  );
}

export default BlocoComSVGBordas;
