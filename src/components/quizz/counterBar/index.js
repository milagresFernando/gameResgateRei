// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import TextBlock from "components/texts/text_block";

//Imagens

//Functions
import addZero from "globalFunctions/generalCalcs/addZero";

function CounterBar(props) {
  function setSeparator(element) {
    if (props.counterBar.separator) {
      if (
        props.counterBar[element].textBlocks[0].className.search("order-0") !=
          -1 ||
        props.counterBar[element].textBlocks[0].className.search("order-1") !=
          -1
      ) {
        return true;
      }
    }
  }
  return (
    <Row className="counter-wrapper">
      <Col className="d-flex justify-content-center">
        <div className="counter-step">
          {props.counterBar.rightAnswers && (
            <TextBlock textsBlock={props.counterBar.rightAnswers.textBlocks}>
              <span className="">
                {addZero(props.correctCounter)}&nbsp;
                {setSeparator("rightAnswers") && props.counterBar.separator}
                &nbsp;
              </span>
            </TextBlock>
          )}
          {props.counterBar.progress && (
            <TextBlock textsBlock={props.counterBar.progress.textBlocks}>
              <span className="">{props.questionNumber}</span>&nbsp;
              {props.counterBar.progress.middleItem}&nbsp;
              {addZero(props.totalQuestions)}&nbsp;
              {setSeparator("progress") && props.counterBar.separator}&nbsp;
            </TextBlock>
          )}

          {props.counterBar.percentageEvolution && (
            <TextBlock
              textsBlock={props.counterBar.percentageEvolution.textBlocks}
            >
              <span className="">
                {props.percentageCounter}%&nbsp;
                {setSeparator("percentageEvolution") &&
                  props.counterBar.separator}
                &nbsp;
              </span>
            </TextBlock>
          )}
        </div>
      </Col>
    </Row>
  );
}

export default CounterBar;
