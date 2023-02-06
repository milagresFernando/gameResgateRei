// React Elements/Hooks
import { Fragment } from "react";

// Components
import Title from "components/texts/title";
import imgCard1 from "screens/assets/images/card1.jpg";
import imgCard2 from "screens/assets/images/card2.jpg";
import imgCard3 from "screens/assets/images/card3.jpg";
import imgCard4 from "screens/assets/images/card4.jpg";
import CardSimple from "components/cards/cardSimple";
import { Col } from "react-bootstrap";

//Imagens

function BlocoCardsVerticais() {
  const card1Items = {
    title: {
      titleContent: "Card 1",
      tagTitle: "5",
      titleClassName: "",
    },
    images: {
      imgCard: imgCard1,
      imgSide: "top",
    },
    contents: {
      contentClassName: "",
      textBlocks: [
        {
          tagElement: "p",
          className: "",
          content: (
            <Fragment>
              Texto 1 <strong>texto bold</strong> planet from the Sun and the
              second-smallest planet in the Solar System after Mercury. In
              English, Mars carries a name of the Roman god of war and is often
              referred to as the
            </Fragment>
          ),
        },
      ],
    },
  };
  const card2Items = {
    title: {
      titleContent: "Card 2",
      tagTitle: "5",
      titleClassName: "",
    },
    images: {
      imgCard: imgCard2,
      imgSide: "bottom",
    },
    contents: {
      contentClassName: "",
      textBlocks: [
        {
          tagElement: "p",
          className: "",
          content: (
            <Fragment>
              Texto 2 <strong>texto bold</strong> planet from the Sun and the
              second-smallest planet in the Solar System after Mercury. In
              English, Mars carries a name of the Roman god of war and is often
              referred to as the
            </Fragment>
          ),
        },
      ],
    },
  };
  const card3Items = {
    title: {
      titleContent: "Card 3",
      tagTitle: "5",
      titleClassName: "",
    },
    images: {
      imgCard: imgCard3,
      imgSide: "top",
    },
    contents: {
      contentClassName: "",
      textBlocks: [
        {
          tagElement: "p",
          className: "",
          content: (
            <Fragment>
              Texto 3 <strong>texto bold</strong> planet from the Sun and the
              second-smallest planet in the Solar System after Mercury. In
              English, Mars carries a name of the Roman god of war and is often
              referred to as the
            </Fragment>
          ),
        },
      ],
    },
  };
  const card4Items = {
    title: {
      titleContent: "Card 4",
      tagTitle: "5",
      titleClassName: "",
    },
    images: {
      imgCard: imgCard4,
      imgSide: "bottom",
    },
    contents: {
      contentClassName: "",
      textBlocks: [
        {
          tagElement: "p",
          className: "",
          content: (
            <Fragment>
              Texto 1 <strong>texto bold</strong> planet from the Sun and the
              second-smallest planet in the Solar System after Mercury. In
              English, Mars carries a name of the Roman god of war and is often
              referred to as the
            </Fragment>
          ),
        },
      ],
    },
  };

  return (
    <Fragment>
      <Col xs="12">
        <Title
          typeH="4"
          className=""
          content={<Fragment>Verticais</Fragment>}
        />
      </Col>
      <Col xs="12" md="6" lg="3">
        <CardSimple
          className="card-rounded"
          cardItems={card1Items}
          breakContent="md" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
        />
      </Col>
      <Col xs="12" md="6" lg="3">
        <CardSimple
          className=""
          cardItems={card2Items}
          breakContent="md" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
        />
      </Col>
      <Col xs="12" md="6" lg="3">
        <CardSimple
          className="card-rounded"
          cardItems={card3Items}
          breakContent="md" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
        />
      </Col>
      <Col xs="12" md="6" lg="3">
        <CardSimple
          className=""
          cardItems={card4Items}
          breakContent="md" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
        />
      </Col>
      <hr />
    </Fragment>
  );
}

export default BlocoCardsVerticais;
