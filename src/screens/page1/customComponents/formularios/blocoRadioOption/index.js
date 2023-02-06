// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col, Form } from "react-bootstrap";
import Title from "components/texts/title";
import Check from "components/forms/check";

//Imagens

function BlocoRadioOption(props) {
  const checkItems = [
    {
      label: "Radio 1 exemplo",
      value: 0,
    },
    {
      label: "Radio 2 exemplo",
      value: 1,
    },
    {
      label: "Radio 3 exemplo",
      value: 2,
    },
  ];

  let initialState = checkItems.map(() => false);
  const [checked, setChecked] = useState(initialState);

  // console.log(checked, "bloco1");
  return (
    <Col lg="4">
      <Title
        typeH="4"
        className=""
        content={<Fragment>Radio Option</Fragment>}
      />
      <Form.Group className="mb-3">
        <Check
          className="radio-option"
          type="radio"
          checkItems={checkItems}
          setChecked={setChecked}
          checked={checked}
          checkedInitial={initialState}
        />
      </Form.Group>
    </Col>
  );
}

export default BlocoRadioOption;
