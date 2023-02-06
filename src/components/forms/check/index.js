// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col, Form } from "react-bootstrap";
import TextBlock from "components/texts/text_block";

//Functions
import { createRandomIds } from "globalFunctions/generateId";

function Check(props) {
  const [checkedState, setCheckedState] = useState(props.checkedInitial);

  useEffect(() => {
    if (
      props.type == "checkboxCustom" ||
      props.type == "radioCustom" ||
      props.type == "radioCustomTF"
    ) {
      props.setChecked(props.checkedInitial);
    }
  }, [props.questionCounter]);

  useEffect(() => {
    setCheckedState(props.checked);
  }, [props.checked]);

  let cloneCheckedTF = [...checkedState];

  function handleChange(e) {
    const newChecks = checkedState.map((checkedItem, index) => {
      if (
        props.type == "checkbox" ||
        props.type == "switch" ||
        props.type == "checkboxCustom"
      ) {
        if (e.currentTarget.value == index) {
          return (checkedItem = !checkedItem);
        } else {
          return (checkedItem = checkedItem);
        }
      } else if (props.type == "radio" || props.type == "radioCustom") {
        if (e.currentTarget.value == index) {
          return (checkedItem = true);
        } else {
          return (checkedItem = false);
        }
      }
    });

    if (props.type == "radioCustomTF") {
      checkedState.forEach((checkedItem, index) => {
        if (e.currentTarget.value == 0) {
          cloneCheckedTF[props.id][0] = true;
          cloneCheckedTF[props.id][1] = false;
        } else if (e.currentTarget.value == 1) {
          cloneCheckedTF[props.id][0] = false;
          cloneCheckedTF[props.id][1] = true;
        }
      });
      setCheckedState(cloneCheckedTF);
      props.setChecked(cloneCheckedTF);
    } else {
      setCheckedState(newChecks);
      props.setChecked(newChecks);
    }
  }

  const [randomIds, setRandomIds] = useState([]);

  useEffect(() => {
    setRandomIds(createRandomIds(checkItems));
  }, [props.checkItems]);

  const checkItems = props.checkItems.map((checkItem, id) => {
    if (props.type == "radioCustom") {
      return (
        <Form.Check
          key={id}
          className={`${props.className ? props.className : ""}`}
        >
          {props.iconFeed && (
            <Form.Control.Feedback
              className={`iconFeed ${checkItem.feedIco}`}
            />
          )}
          <Form.Check.Input
            className={`${
              checkItem.inputClassName ? checkItem.inputClassName : ""
            }`}
            disabled={props.disable}
            id={randomIds[id]}
            type="radio"
            name={randomIds[id]}
            value={checkItem.value}
            onChange={handleChange}
            checked={checkedState[id] == undefined ? false : checkedState[id]}
          />
          <Form.Check.Label
            htmlFor={randomIds[id]}
            className={`${
              checkItem.labelClassName ? checkItem.labelClassName : ""
            }`}
          >
            <TextBlock textsBlock={checkItem.label} />
          </Form.Check.Label>
        </Form.Check>
      );
    } else if (props.type == "radioCustomTF") {
      return (
        <Form.Check
          key={id}
          className={`${props.className ? props.className : ""}`}
        >
          {props.iconFeed && (
            <Form.Control.Feedback
              className={`iconFeed ${checkItem.feedIco}`}
            />
          )}

          <Form.Check.Input
            className={`verdadeiro ${
              checkItem.inputClassName ? checkItem.inputClassName : ""
            }`}
            disabled={props.disable}
            id={randomIds[id]}
            type="radio"
            name={randomIds[id]}
            value={0}
            onChange={handleChange}
            checked={
              checkedState[props.id] == undefined
                ? false
                : checkedState[props.id][0]
            }
          />
          <Form.Check.Input
            className={`falso ${
              checkItem.inputClassName ? checkItem.inputClassName : ""
            }`}
            disabled={props.disable}
            id={randomIds[id]}
            type="radio"
            name={randomIds[id]}
            value={1}
            onChange={handleChange}
            checked={
              checkedState[props.id] == undefined
                ? false
                : checkedState[props.id][1]
            }
          />
          <Form.Check.Label
            className={`${
              checkItem.labelClassName ? checkItem.labelClassName : ""
            }`}
          >
            <TextBlock textsBlock={checkItem.label} />
          </Form.Check.Label>
        </Form.Check>
      );
    } else if (props.type == "checkboxCustom") {
      return (
        <Form.Check
          key={id}
          className={`${props.className ? props.className : ""}`}
        >
          {props.iconFeed && (
            <Form.Control.Feedback
              className={`iconFeed ${checkItem.feedIco}`}
            />
          )}
          <Form.Check.Input
            className={`${
              checkItem.inputClassName ? checkItem.inputClassName : ""
            }`}
            disabled={props.disable}
            id={randomIds[id]}
            type="checkbox"
            name={randomIds[id]}
            value={checkItem.value}
            onChange={handleChange}
            checked={checkedState[id] == undefined ? false : checkedState[id]}
          />
          <Form.Check.Label
            htmlFor={randomIds[id]}
            className={`${
              checkItem.labelClassName ? checkItem.labelClassName : ""
            }`}
          >
            <TextBlock textsBlock={checkItem.label} />
          </Form.Check.Label>
        </Form.Check>
      );
    } else {
      return (
        <Form.Check
          className={`${props.className ? props.className : ""}`}
          key={id}
          type={props.type}
          name={randomIds[id]}
          id={randomIds[id]}
          label={checkItem.label}
          value={checkItem.value}
          checked={checkedState[id]}
          onChange={handleChange}
        ></Form.Check>
      );
    }
  });

  return checkItems;
}

export default Check;
