// React Elements/Hooks
import { Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import ImageParallax from "components/images/imageParallax";
import TextBlock from "components/texts/text_block";
import Title from "components/texts/title";

// Imagens

import imgParallax1 from "screens/assets/images/BG_Parallax.jpg";

function BlocoParallaxComTexto() {
  const textsBlock2 = [
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          Fusce blandit tortor suscipit ligula pellentesque facilisis. Donec
          euismod consequat dignissim. Aenean nec lobortis nisl. Aenean neque
          leo, accumsan a ullamcorper maximus, faucibus vitae dolor. Phasellus
          posuere congue odio, ac blandit mi semper non. Duis massa nisl, ornare
          commodo massa a, mattis tincidunt neque. Aenean accumsan massa id
          eleifend fermentum. Maecenas eget tortor sed libero euismod dignissim.
        </Fragment>
      ),
    },
  ];
  return (
    <Fragment>
      <Container>
        <Row className="">
          <Col xs="12">
            <Title
              typeH="4"
              className=""
              content={<Fragment>Parallax</Fragment>}
            />
          </Col>
        </Row>
      </Container>
      <ImageParallax imgUrl={imgParallax1} className="" />
      <Container>
        <Row className="">
          <Col xs="12">
            <TextBlock textsBlock={textsBlock2} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default BlocoParallaxComTexto;
