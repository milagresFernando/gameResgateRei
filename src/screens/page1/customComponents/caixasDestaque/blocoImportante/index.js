// React Elements/Hooks
import { Fragment } from "react";

// Components

import Destaques from "components/destaques";

//Imagens
import imgDestaque from "globalAssets/images/importante.png";

function BlocoImportante() {
  const textsBlock = [
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          Phasellus eleifend, lectus sed ultrices suscipit, tortor justo egestas
          diam, a eleifend mi massa ut ipsum.
        </Fragment>
      ),
    },
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          Suspendisse potenti. Aliquam pulvinar tellus eget vulputate sagittis.
          Suspendisse faucibus pellentesque elementum. Mauris vel lectus nec
          ante aliquet mattis viverra et lorem. Quisque tristique nibh lectus,
          et hendrerit sapien maximus sed. P
        </Fragment>
      ),
    },
  ];
  return (
    <Destaques
      title="Importante"
      className="importante"
      textsBlock={textsBlock}
      imgUrl={imgDestaque}
      imgSide="right"
      type="fullLeft"
      colMd="4"
      colLg="2"
      breakContent="md" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
    />
  );
}

export default BlocoImportante;
