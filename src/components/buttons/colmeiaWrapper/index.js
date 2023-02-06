// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";

//Imagens

function ColmeiaWrapper(props) {
  return (
    <div className={`colmeia ${props.className ? props.className : ""}`}>
      {props.children}
    </div>
  );
}

export default ColmeiaWrapper;
