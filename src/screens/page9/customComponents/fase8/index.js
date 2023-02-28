// React Elements/Hooks
import { Fragment, useRef, useState, useEffect } from "react";

// Components
import { Col, Container, Row } from "react-bootstrap";
import Title from "components/texts/title";
import Transitions from "components/transitions";

import BlocoCarrosselDrag from "./blocoCarrosselDrag";

//Imagens

function Fase8(props) {
  useEffect(() => {
    props.setOverflow(false);
  }, [props.faseControlTransition]);

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
      interact={props.faseControlTransition}
      options={options.animation}
      typeInteraction={options.animation.typeInteraction} //'oneClick', 'switch', 'hideElement'
    >
      <section>
        <Container className="containerCarrosselDragNoBig">
          <BlocoCarrosselDrag
            setControlTransition={props.setControlTransition}
            setIsFinished={props.setIsFinished}
            setOverflow={props.setOverflow}
            escolhidos={props.escolhidos}
            caminhoData={props.caminhoData}
            setEtapa={props.setEtapa}
            etapa={props.etapa}
            setFeed={props.setFeed}
          />
        </Container>
      </section>
    </Transitions>
  );
}

export default Fase8;
