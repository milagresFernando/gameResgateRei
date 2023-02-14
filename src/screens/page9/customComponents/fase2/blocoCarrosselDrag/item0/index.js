// React Elements/Hooks
import { Fragment } from "react";

// Components
import { Container, Row, Col, Image } from "react-bootstrap";
import FlexImgWithText from "components/images/flexImgWithText";
import Title from "components/texts/title";
import thumb from "screens/assets/images/slotEmpty.svg";

//Imagens

const carrosselItem = {
  component: (
    <Title
      key={0}
      typeH={4}
      className={"d-flex justify-content-center"}
      content={<Fragment>Escolha dois personagens</Fragment>}
    />
  ),
  thumb: thumb,
};

export default carrosselItem;
