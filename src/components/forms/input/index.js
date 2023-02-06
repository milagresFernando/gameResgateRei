// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment, useEffect } from "react";

// Components
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";

//Functions
import generateId from "globalFunctions/generateId";

function Input(props) {
  const [randomId, setRandomId] = useState("");

  function handleFieldsChange(e) {
    let cloneFields = [...props.fields];

    const newFields = cloneFields.map((cloneField, index) => {
      if (cloneField.name == e.currentTarget.name) {
        cloneField.value = e.currentTarget.value;
        return cloneFields;
      }
    });

    props.setFields([...props.fields], ...newFields);
  }

  useEffect(() => {
    setRandomId(generateId());
  }, []);

  let inputToRender;

  let inputGroupLabel = (
    <InputGroup.Text
      htmlFor={randomId}
      as="label"
      className={`${
        props.inputItems.labelClassName ? props.inputItems.labelClassName : ""
      }`}
    >
      {props.inputItems.label}
    </InputGroup.Text>
  );
  let inputGroupLabel02 = (
    <InputGroup.Text
      htmlFor={randomId}
      as="label"
      className={`${
        props.inputItems.labelClassName ? props.inputItems.labelClassName : ""
      }`}
    >
      {props.inputItems.label02}
    </InputGroup.Text>
  );

  let inputGroupControl = (
    <FormControl
      className={`text-box group ${
        props.inputItems.inputClassName ? props.inputItems.inputClassName : ""
      }`}
      id={randomId}
      value={props.fields[props.inputItems.id].value}
      name={props.inputItems.name}
      onChange={handleFieldsChange}
      placeholder={props.inputItems.placeholder}
      aria-label={props.inputItems.placeholder}
      disabled={props.disabled}
    />
  );

  let validationText = props.inputItems.validationText ? (
    <Form.Text className="text-muted">
      {props.inputItems.validationText}
    </Form.Text>
  ) : (
    ""
  );

  if (props.inputItems.type == "inputGroup-left") {
    inputToRender = (
      <div className={`${props.className ? props.className : ""}`}>
        <InputGroup className="">
          {inputGroupLabel}
          {inputGroupControl}
        </InputGroup>
        {validationText}
      </div>
    );
  }
  if (props.inputItems.type == "inputGroup-right") {
    inputToRender = (
      <div className={`${props.className ? props.className : ""}`}>
        <InputGroup className="">
          {inputGroupControl}
          {inputGroupLabel}
        </InputGroup>
        {validationText}
      </div>
    );
  }
  if (props.inputItems.type == "inputGroup-both") {
    inputToRender = (
      <div className={`${props.className ? props.className : ""}`}>
        <InputGroup className="">
          {inputGroupLabel}
          {inputGroupControl}
          {inputGroupLabel02}
        </InputGroup>
        {validationText}
      </div>
    );
  }

  if (props.inputItems.type == "text") {
    inputToRender = (
      <Form.Group
        className={`${props.className ? props.className : ""}`}
        controlId={randomId}
      >
        <Form.Label
          className={`${
            props.inputItems.labelClassName
              ? props.inputItems.labelClassName
              : ""
          }`}
        >
          {props.inputItems.label}
        </Form.Label>
        <Form.Control
          className={`text-box ${
            props.inputItems.inputClassName
              ? props.inputItems.inputClassName
              : ""
          }`}
          type={props.inputItems.type}
          name={props.inputItems.name}
          value={props.fields[props.inputItems.id].value}
          placeholder={props.inputItems.placeholder}
          onChange={handleFieldsChange}
          disabled={props.disabled}
        />

        {validationText}
      </Form.Group>
    );
  }
  if (props.inputItems.type == "textarea") {
    inputToRender = (
      <Form.Group
        className={`${props.className ? props.className : ""}`}
        controlId={randomId}
      >
        <Form.Label
          className={`${
            props.inputItems.labelClassName
              ? props.inputItems.labelClassName
              : ""
          }`}
        >
          {props.inputItems.label}
        </Form.Label>
        <Form.Control
          rows={props.inputItems.rows}
          as={props.inputItems.type}
          className={`text-box ${
            props.inputItems.inputClassName
              ? props.inputItems.inputClassName
              : ""
          }`}
          type={props.inputItems.type}
          name={props.inputItems.name}
          value={props.fields[props.inputItems.id].value}
          placeholder={props.inputItems.placeholder}
          onChange={handleFieldsChange}
          disabled={props.disabled}
        />
        {validationText}
      </Form.Group>
    );
  }

  return inputToRender;
}

export default Input;
