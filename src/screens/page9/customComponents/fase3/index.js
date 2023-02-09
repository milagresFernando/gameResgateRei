// React Elements/Hooks
import { Fragment, useRef, useState, useEffect } from "react";

// Components
import { Col, Container, Row } from "react-bootstrap";
import Title from "components/texts/title";
import Transitions from "components/transitions";

import BlocoCarrosselDrag from "./blocoCarrosselDrag";

//Imagens

function Fase3(props) {
  // useEffect(() => {
  //   props.setFase2ControlTransition((prev) => !prev);
  // }, []);

  const options = {
    animation: {
      type: "fade",
      timeout: { appear: 1, enter: 600, exit: 300 },
      style: { transformOrigin: "0 0 0", height: 0 },
      typeInteraction: "switch",
      scroll: true,
    },
  };

  return (
    <Transitions
      interact={props.fase3ControlTransition}
      options={options.animation}
      typeInteraction={options.animation.typeInteraction} //'oneClick', 'switch', 'hideElement'
    >
      <section data-secao={props.sectionTitle}>
        <Container>
          <BlocoCarrosselDrag
            setControlTransition={props.setFase3ControlTransition}
            setIsFinished={props.setFimFase3}
          />
        </Container>
      </section>
    </Transitions>
  );
}

export default Fase3;
