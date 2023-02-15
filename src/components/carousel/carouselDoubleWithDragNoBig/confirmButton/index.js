// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Btn from "components/buttons";

//Imagens

function ConfirmButton(props) {
  return (
    <Btn onClick={props.onClick} className={props.className}>
      {props.content}
    </Btn>
  );
}

export default ConfirmButton;
