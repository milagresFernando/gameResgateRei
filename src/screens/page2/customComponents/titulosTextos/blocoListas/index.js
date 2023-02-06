// React Elements/Hooks
import { Fragment } from "react";

// Components
import { Col } from "react-bootstrap";
import Title from "components/texts/title";
import List from "components/texts/lists";

//Imagens

function BlocoListas() {
  const listItens1 = [
    {
      className: "",

      content: (
        <Fragment>
          Texto 1 <strong>texto bold</strong> planet from the Sun and the
          second-smallest planet in the Solar System after Mercury. In English,
          Mars carries a name of the Roman god of war and is often referred to
          as the
        </Fragment>
      ),
    },
    {
      className: "",
      content: (
        <Fragment>
          from the Sun and the second-smallest planet in the Solar System after
          Mercury. In English, Mars carries a name of the Roman god of war and
          is often referred to
        </Fragment>
      ),
      anchor: "http://google.com",
    },
    {
      className: "",
      content: (
        <Fragment>
          Texto 1 <strong>texto bold</strong> planet from the Sun and the
          second-smallest planet in the Solar System after Mercury. In English,
          Mars carries a name of the Roman god of war and is often referred to
          as the
        </Fragment>
      ),
    },
  ];
  return (
    <Fragment>
      <Col xs="12">
        <Title
          typeH="4"
          className=""
          content={<Fragment>Lista Bullets / Lista links</Fragment>}
        />
        <hr />
        <List tagElement="ul" listItens={listItens1} className="" />
      </Col>

      <Col xs="12">
        <Title
          typeH="4"
          className=""
          content={<Fragment>Lista Numerada / Lista links</Fragment>}
        />
        <hr />
        <List tagElement="ol" listItens={listItens1} className="" />
      </Col>
    </Fragment>
  );
}

export default BlocoListas;
