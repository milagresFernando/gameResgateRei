// React Elements/Hooks
import { Fragment } from "react";

// Components
import Title from "components/texts/title";
import FlexImgWithText from "components/images/flexImgWithText";
import { Row, Col } from "react-bootstrap";

// Imagens
import imgUrl from "screens/assets/images/img-Float.jpg";
import imgUrlBreak from "screens/assets/images/img-Full.jpg";

function BlocoTextoComImgFlex() {
  const textsBlock = [
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
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          quis arcu vel quam viverra suscipit sed a nulla. Morbi ac pharetra
          diam. Curabitur ut lectus elit. Sed nec velit magna. Nulla facilisis
          lectus ac eleifend cursus. Donec est ligula, ultricies quis viverra
          eget, interdum blandit eros. Quisque vestibulum dictum orci eu dictum.
          Ut et metus efficitur, vulputate lectus eget, scelerisque est.
        </Fragment>
      ),
    },
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          quis arcu vel quam viverra suscipit sed a nulla. Morbi ac pharetra
          diam. Curabitur ut lectus elit. Sed nec velit magna. Nulla facilisis
          lectus ac eleifend cursus. Donec est ligula, ultricies quis viverra
          eget, interdum blandit eros. Quisque vestibulum dictum orci eu dictum.
          Ut et metus efficitur, vulputate lectus eget, scelerisque est.
        </Fragment>
      ),
    },
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          quis arcu vel quam viverra suscipit sed a nulla. Morbi ac pharetra
          diam. Curabitur ut lectus elit. Sed nec velit magna. Nulla facilisis
          lectus ac eleifend cursus. Donec est ligula, ultricies quis viverra
          eget, interdum blandit eros. Quisque vestibulum dictum orci eu dictum.
          Ut et metus efficitur, vulputate lectus eget, scelerisque est.
        </Fragment>
      ),
    },
  ];
  return (
    <Fragment>
      <Row>
        <Col>
          <Title
            typeH="4"
            className=""
            content={<Fragment>Texto e imagens flex</Fragment>}
          />
        </Col>
      </Row>
      <FlexImgWithText
        rowClasses="align-items-center"
        imgSide="fullRight"
        imgUrl={imgUrl}
        imgUrlBreak={imgUrlBreak}
        colMd="5"
        colLg="6"
        textsBlock={textsBlock}
        breakContent="md" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
      />
      <hr />
    </Fragment>
  );
}

export default BlocoTextoComImgFlex;
