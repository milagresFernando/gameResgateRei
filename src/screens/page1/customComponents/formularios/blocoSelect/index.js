// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col, Form } from "react-bootstrap";
import Title from "components/texts/title";
import Select from "components/forms/select";

//Imagens

function BlocoSelect(props) {
  const selectItems = [
    {
      value: "0",
      content: "Selecione um item",
    },
    {
      value: "1",
      content: "item 1",
    },
    {
      value: "2",
      content: "item 2",
    },
    {
      value: "3",
      content: "item 3",
    },
  ];
  const [selected, setSelected] = useState(false);

  function handleChange(e) {
    setSelected(e.currentTarget.value);
    //console.log(e.currentTarget.options[e.currentTarget.value].text);
  }
  return (
    <Col lg="12">
      <Title typeH="4" className="" content={<Fragment>Select</Fragment>} />

      <Select
        className="mb-3"
        selectItems={selectItems}
        handleChange={handleChange}
        ariaLabel="Exemplo de elemento Select"
      />
    </Col>
  );
}

export default BlocoSelect;
