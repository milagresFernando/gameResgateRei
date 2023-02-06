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
import Title from "components/texts/title";
import Input from "components/forms/input";

function BlocoInputsGroup(props) {
  const inputItems = [
    {
      id: 0,
      type: "inputGroup-left",
      name: "exemplo01",
      label: "Input Agrupado esquerda:",
      placeholder: "Digite o texto aqui",
      value: "",
      validationText: "",
      inputClassName: "",
      labelClassName: "",
    },
    {
      id: 1,
      type: "inputGroup-right",
      name: "exemplo02",
      label: "Input Agrupado direito:",
      placeholder: "Digite o texto aqui",
      value: "",
      validationText: "",
      inputClassName: "",
      labelClassName: "",
    },
    {
      id: 2,
      type: "inputGroup-both",
      name: "exemplo03",
      label: "Input Agrupado esquerda:",
      label02: "Input Agrupado direito:",
      placeholder: "Digite o texto aqui",
      value: "",
      validationText: "",
      inputClassName: "",
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
          content={<Fragment>Input text agrupado</Fragment>}
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
      <Col>
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

export default BlocoInputsGroup;
