// React Elements/Hooks
import { Fragment } from "react";

// Components
import { Col } from "react-bootstrap";
import FlipCard from "components/cards/flipCard";

//Imagens

function BlocoFlipCardHorizontal() {
  const card1Items = {
    front: [
      {
        title: "Título do flip horizontal 1",
        tagTitle: "5",
        titleClassName: "",
      },
    ],

    back: [
      {
        tagElement: "p",
        className: "",
        content: (
          <Fragment>
            Flip1 <strong>texto bold</strong> planet from the Sun and the
            second-smallest planet in the Solar System after Mercury. In
            English, Mars carries a name of the Roman god of war and is often
            referred to as theFlip1 <strong>texto bold</strong> planet from the
            Sun and the second-smallest planet in the Solar System after
            Mercury. In English, Mars carries a name of the Roman god of war and
            is often referred to as the
          </Fragment>
        ),
      },
      {
        tagElement: "p",
        className: "",
        content: (
          <Fragment>
            Flip1 <strong>texto bold</strong> planet from the Sun and the
            second-smallest planet in the Solar System after Mercury. In
            English, Mars carries a name of the Roman god of war and is often
            referred to as the
          </Fragment>
        ),
      },
    ],
  };
  const card2Items = {
    front: [
      {
        title: "Título do flip horizontal 2",
        tagTitle: "5",
        titleClassName: "",
      },
    ],

    back: [
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
  };

  return (
    <Fragment>
      <Col xs="12" md="6">
        <FlipCard className="" direction="horizontal" cardItems={card1Items} />
      </Col>
      <Col xs="12" md="6">
        <FlipCard className="" direction="horizontal" cardItems={card2Items} />
      </Col>
    </Fragment>
  );
}

export default BlocoFlipCardHorizontal;
