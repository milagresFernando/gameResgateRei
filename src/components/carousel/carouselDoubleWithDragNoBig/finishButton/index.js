// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Btn from "components/buttons";

//Imagens

function FinishButton(props) {
  return (
    <Btn onClick={props.onClick} className={props.className}>
      {props.content}
    </Btn>
  );
}

export default FinishButton;
