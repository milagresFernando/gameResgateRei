// React Elements/Hooks
import { Fragment } from "react";

// Components
import { Container, Row, Col, Image } from "react-bootstrap";
import FlexImgWithText from "components/images/flexImgWithText";

//Imagens
import imgCarrossel from "screens/assets/images/carrosselArmaBig4.jpg";
import thumb from "screens/assets/images/carrosselArmaThumb4.jpg";

const textsBlock = [
  {
    tagElement: "p",
    className: "",
    content: (
      <Fragment>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis
        arcu vel quam viverra suscipit sed a nulla. Morbi ac pharetra diam.
        Curabitur ut lectus elit. Sed nec velit magna. Nulla facilisis lectus ac
        eleifend cursus. Donec est ligula, ultricies quis viverra eget, interdum
        blandit eros. Quisque vestibulum dictum orci eu dictum. Ut et metus
        efficitur, vulputate lectus eget, scelerisque est.
      </Fragment>
    ),
  },
];

const descriptionBlock = [
  {
    tagElement: "p",
    className: "",
    content: <Fragment>pequena descrição da munição fundo roxo</Fragment>,
  },
  {
    tagElement: "p",
    className: "",
    content: (
      <Fragment>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis
        arcu vel quam viverra suscipit sed a nulla. Morbi ac pharetra diam.
      </Fragment>
    ),
  },
];

const carrosselItem = {
  component: (
    <FlexImgWithText
      key={3}
      rowClasses="align-items-center "
      imgSide="fullRight"
      imgUrl={imgCarrossel}
      imgUrlBreak={imgCarrossel}
      colMd="5"
      colLg="6"
      textsBlock={textsBlock}
      breakContent="md" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
    />
  ),
  thumb: thumb,
  info: {
    title: {
      titleContent: "munição fundo roxo",
      tagTitle: "5",
      titleClassName: "mb-0",
    },

    description: descriptionBlock,
    thumb: thumb,
  },
};

export default carrosselItem;
