// React Elements/Hooks
import { useState, Fragment, useEffect, useContext, useRef } from "react";
import React from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import TextBlock from "components/texts/text_block";
import FinishButton from "components/feedGame/finishButton";

import Transitions from "components/transitions";

//Services
import Caminhos from "services/caminhos";

//Functions
import FeedGame from "components/feedGame";

function Fase9(props) {
  const containerFinishRef = useRef(null);
  const [textBlock, setTextBlock] = useState([]);
  const [showFinishButton, setShowFinishButton] = useState(false);

  useEffect(() => {
    props.setOverflow(false);

    if (props.faseControlTransition) {
      setTimeout(() => {
        setShowFinishButton(true);
      }, options.animation.timeout.enter);
    } else {
      setShowFinishButton(false);
    }
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

  const optionsFinishButton = {
    className: "",
    content: "Prosseguir",
    animation: {
      type: "grow",
      style: { transformOrigin: "0 0 0", height: 0 },
      timeout: { appear: 1, enter: 600, exit: 300 },
      typeInteraction: "switchGrow",
      scroll: true,
    },
  };

  function handleFinish() {
    props.setControlTransition((prev) => !prev);
    props.setIsFinished(true);
  }
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
          <Row>
            <Col
              className="d-flex justify-content-center "
              ref={containerFinishRef}
            >
              <Transitions
                interact={showFinishButton}
                options={optionsFinishButton.animation}
                typeInteraction={optionsFinishButton.animation.typeInteraction} //'oneClick', 'switch', 'hideElement'
              >
                <FinishButton
                  onClick={() => handleFinish()}
                  className={
                    optionsFinishButton.className
                      ? optionsFinishButton.className
                      : ""
                  }
                  content={optionsFinishButton.content}
                />
              </Transitions>
            </Col>
          </Row>
        </div>
      </Container>
    </Transitions>
  );
}

export default Fase9;
