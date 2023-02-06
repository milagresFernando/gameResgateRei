// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";

//Imagens

function TableGrid(props) {
  return <div className="table-grid">{props.children}</div>;
}

export default TableGrid;
