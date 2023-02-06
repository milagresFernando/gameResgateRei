// React Elements/Hooks
import { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "components/texts/title";
import Input from "components/forms/input";

function BlocoInputsText(props) {
  const inputItems = [
    {
      id: 0,
      type: "text",
      name: "exemplo01",
      label: "Input Text",
      placeholder: "Digite o texto aqui",
      value: "",
      validationText: "",
      inputClassName: "",
      labelClassName: "",
    },
    {
      id: 1,
      type: "text",
      name: "exemplo02",
      label: "Placeholder Color",
      placeholder: "Digite o texto aqui",
      value: "",
      validationText: "",
      inputClassName: "placeholder",
      labelClassName: "",
    },
    {
      id: 2,
      type: "text",
      name: "exemplo03",
      label: "Rounded",
      placeholder: "Digite o texto aqui",
      value: "",
      validationText: "",
      inputClassName: "rounded-border",
      labelClassName: "",
    },
  ];
  const initialStateItems = inputItems.map((inputItem, index) => {
    return {
      name: inputItem.name,
      value: "",
    };
  });
  const [fields, setFields] = useState(initialStateItems);

  return (
    <Fragment>
      <Col xs="12">
        <Title
          typeH="4"
          className=""
          content={<Fragment>Input texts</Fragment>}
        />
      </Col>

      <Col lg="4">
        <Input
          className="mb-3"
          inputItems={inputItems[0]}
          fields={fields}
          setFields={setFields}
        />
      </Col>
      <Col lg="4">
        <Input
          className="mb-3"
          inputItems={inputItems[1]}
          fields={fields}
          setFields={setFields}
        />
      </Col>
      <Col lg="4">
        <Input
          className="mb-3"
          inputItems={inputItems[2]}
          fields={fields}
          setFields={setFields}
        />
      </Col>
    </Fragment>
  );
}

export default BlocoInputsText;
