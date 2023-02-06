// React Elements/Hooks
import { Fragment } from "react";

// Components
import TextBlock from "components/texts/text_block";
import Title from "components/texts/title";

//Imagens

function BlocoTextos() {
  const textsBlock1 = [
    {
      tagElement: "p",
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
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          from the Sun and the
          <em>second-smallest planet in the Solar System after</em>
          Mercury. In English, Mars carries a name of the Roman god of war and
          is often referred to
        </Fragment>
      ),
    },
  ];
  return (
    <Fragment>
      <Title
        typeH="4"
        className=""
        content={<Fragment>Parágrafo / Strong / Itálico</Fragment>}
      />
      <hr />

      <TextBlock textsBlock={textsBlock1} />
    </Fragment>
  );
}

export default BlocoTextos;
