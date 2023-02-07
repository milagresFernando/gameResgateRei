// React Elements/Hooks
import { Fragment, useRef, useState, useEffect } from "react";

// Components
import { Col, Container, Row } from "react-bootstrap";
import Title from "components/texts/title";
import Transitions from "components/transitions";

import BlocoCarrosselDrag from "./blocoCarrosselDrag";

//Imagens

function Fase2(props) {
  // useEffect(() => {
  //   props.setFase2ControlTransition((prev) => !prev);
  // }, []);
  console.log("fase2");

  const options = {
    animation: {
      type: "fade",
      timeout: { appear: 1, enter: 600, exit: 300 },
      typeInteraction: "switch",
      scroll: true,
    },
  };

  return (
    <Transitions
      interact={props.fase2ControlTransition}
      options={options.animation}
      typeInteraction={options.animation.typeInteraction} //'oneClick', 'switch', 'hideElement'
    >
      <section data-secao={props.sectionTitle}>
        <Container>
          <BlocoCarrosselDrag
            setControlTransition={props.setFase2ControlTransition}
          />
        </Container>
      </section>
    </Transitions>
  );
}

export default Fase2;
