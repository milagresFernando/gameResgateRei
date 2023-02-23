// React Elements/Hooks
import { useState, Fragment, useEffect, useContext, useRef } from "react";
import React from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";

import Transitions from "components/transitions";

//Services
import Caminhos from "services/caminhos";

//Functions
import FeedGame from "components/feedGame";

function Fase6(props) {
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
      <Container className="containerFeedGame">
        <div className="wrapperFeedGame">
          <Row>
            <Col>
              <FeedGame feedEtapa={props.feedEtapa} />
            </Col>
          </Row>
        </div>
      </Container>
    </Transitions>
  );
}

export default Fase6;
