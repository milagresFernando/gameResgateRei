// React Elements/Hooks
import { Fragment, useRef, useState, useEffect } from "react";

// Components
import { Col, Container, Row } from "react-bootstrap";
import Title from "components/texts/title";
import Transitions from "components/transitions";

import BlocoCarrosselDrag from "./blocoCarrosselDrag";

//Imagens

function Fase2(props) {
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
    <>
      <Transitions
        interact={props.faseControlTransition}
        options={options.animation}
        typeInteraction={options.animation.typeInteraction} //'oneClick', 'switch', 'hideElement'
      >
        <section data-secao={props.sectionTitle}>
          <Container className="containerCarrosselDrag">
            <BlocoCarrosselDrag
              setControlTransition={props.setControlTransition}
              setIsFinished={props.setIsFinished}
              setOverflow={props.setOverflow}
              setEscolhidos={props.setEscolhidos}
            />
          </Container>
        </section>
      </Transitions>
    </>
  );
}

export default Fase2;
