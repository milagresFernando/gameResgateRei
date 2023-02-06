// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Btn from "components/buttons";

//Imagens

function ButtonQuizz(props) {
  return (
    <Row
      className={`justify-content-center button-wrapper ${
        props.showButton ? "showButton" : ""
      } ${props.type == "tenteNovamente" ? props.type : ""}`}
    >
      <Col className="button-content ">
        <Btn
          className={`btn-padrao btn-rounded ${
            props.className ? props.className : ""
          }`}
          size="md"
          onClick={() => props.btnFunction()}
        >
          {props.content}
        </Btn>
      </Col>
    </Row>
  );
}

export default ButtonQuizz;
