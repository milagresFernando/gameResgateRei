// React Elements/Hooks
import { Fragment } from "react";

// Components
import { Col } from "react-bootstrap";
import Title from "components/texts/title";

//Imagens

function BlocoTitulos() {
  return (
    <Fragment>
      <Col xs="12" lg="4">
        <Title
          typeH="1"
          className=""
          content={<Fragment>título h1</Fragment>}
        />
      </Col>
      <Col xs="12" lg="4">
        <Title
          typeH="2"
          className=""
          content={<Fragment>título h2</Fragment>}
        />
      </Col>
      <Col xs="12" lg="4">
        <Title
          typeH="3"
          className=""
          content={<Fragment>título h3</Fragment>}
        />
      </Col>
      <Col xs="12" lg="4">
        <Title
          typeH="4"
          className=""
          content={<Fragment>título h4</Fragment>}
        />
      </Col>
      <Col xs="12" lg="4">
        <Title
          typeH="5"
          className=""
          content={<Fragment>título h5</Fragment>}
        />
      </Col>
      <Col xs="12" lg="4">
        <Title
          typeH="6"
          className=""
          content={<Fragment>título h6</Fragment>}
        />
      </Col>
    </Fragment>
  );
}

export default BlocoTitulos;
