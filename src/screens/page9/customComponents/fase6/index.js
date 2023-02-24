// React Elements/Hooks
import { useState, Fragment, useEffect, useContext, useRef } from "react";
import React from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import TextBlock from "components/texts/text_block";

import Transitions from "components/transitions";

//Services
import Caminhos from "services/caminhos";

//Functions
import FeedGame from "components/feedGame";

function Fase6(props) {
  const [textBlock, setTextBlock] = useState([]);

  useEffect(() => {
    props.setOverflow(false);
  }, [props.faseControlTransition]);

  useEffect(() => {
    if (props.etapa != 0) {
      if (props.feedEtapa) {
        setTextBlock(props.caminhoData.feeds[props.etapa - 1].correct);
      } else {
        setTextBlock(props.caminhoData.feeds[props.etapa - 1].wrong);
      }
    }
  }, [props.etapa, props.feedEtapa]);

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
              <FeedGame feedEtapa={props.feedEtapa}>
                <TextBlock textsBlock={textBlock} isJson />
              </FeedGame>
            </Col>
          </Row>
        </div>
      </Container>
    </Transitions>
  );
}

export default Fase6;
