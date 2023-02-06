// React Elements/Hooks
import { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "components/texts/title";
import Input from "components/forms/input";

function BlocoTextAreas(props) {
  const inputItems = [
    {
      id: 0,
      type: "textarea",
      rows: 3,
      name: "exemplo01",
      label: "Text area",
      placeholder: "Digite o texto aqui",
      value: "",
      validationText: "",
      inputClassName: "",
      labelClassName: "",
    },
    {
      id: 1,
      type: "textarea",
      rows: 3,
      name: "exemplo02",
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
          content={<Fragment>Text areas</Fragment>}
        />
      </Col>

      <Col lg="6">
        <Input
          className="mb-3"
          inputItems={inputItems[0]}
          fields={fields}
          setFields={setFields}
        />
      </Col>
      <Col lg="6">
        <Input
          className="mb-3"
          inputItems={inputItems[1]}
          fields={fields}
          setFields={setFields}
        />
      </Col>
    </Fragment>
  );
}

export default BlocoTextAreas;
