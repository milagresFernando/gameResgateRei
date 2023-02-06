// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment, forwardRef, useRef } from "react";

// Components
import { Container, Row, Col, Button } from "react-bootstrap";

//Imagens

const Btn = forwardRef((props, ref) => {
  return (
    <Button
      className={` ${props.className ? props.className : ""}`}
      {...props}
      ref={ref}
    >
      {props.children}
    </Button>
  );
});

export default Btn;
