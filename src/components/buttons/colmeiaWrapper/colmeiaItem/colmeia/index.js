// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";

//Imagens

function Colmeia(props) {
  return (
    <div className="item" onClick={props.handleShow}>
      <div className="desc-item">
        <p>{props.colmeiaName}</p>
      </div>
    </div>
  );
}

export default Colmeia;
