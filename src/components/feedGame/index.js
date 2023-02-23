// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";

//Imagens

function FeedGame(props) {
  return (
    <div className={`feedGame ${props.feedEtapa ? "correct" : "wrong"}`}>
      <p>Modelo base de componente</p>
    </div>
  );
}

export default FeedGame;
