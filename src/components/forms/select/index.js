// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col, Form } from "react-bootstrap";

function Select(props) {
  const selectItems = props.selectItems.map((selectItem, id) => {
    return (
      <option key={id} value={selectItem.value}>
        {selectItem.content}
      </option>
    );
  });

  return (
    <Form.Select
      className={`select-box ${props.className ? props.className : ""}`}
      aria-label={props.ariaLabel}
      onChange={props.handleChange}
    >
      {selectItems}
    </Form.Select>
  );
}

export default Select;
