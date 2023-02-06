// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col, Table } from "react-bootstrap";

//Imagens

function TableDefault(props) {
  return (
    <Table className={`table ${props.className ? props.className : ""}`}>
      {props.children}
    </Table>
  );
}

export default TableDefault;
