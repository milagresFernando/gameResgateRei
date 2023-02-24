// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";

//Imagens

function FeedGame(props) {
  return (
    <div className={`feedGame ${props.feedEtapa ? "correct" : "wrong"}`}>
      {props.children}
    </div>
  );
}

export default FeedGame;
