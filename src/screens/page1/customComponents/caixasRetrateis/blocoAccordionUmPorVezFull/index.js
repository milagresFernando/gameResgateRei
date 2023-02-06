// React Elements/Hooks
import { Fragment } from "react";

// Components
import Accordions from "components/accordions";
import Title from "components/texts/title";
import imgUrl from "screens/assets/images/img-Float.jpg";
import imgUrlBreak from "screens/assets/images/img-Full.jpg";

//Imagens

function BlocoAccordionUmPorVezFull() {
  const accordionItens = [
    {
      title: {
        titleContent: "Imagem na altura total da caixa, com texto",
        tagTitle: "5",
        titleClassName: "",
      },
      images: {
        rowClasses: "align-items-center",
        imgUrl: imgUrl,
        imgUrlBreak: imgUrlBreak,
        imgSide: "fullRight",
        colMd: "5",
        colLg: "6",
      },
      contents: {
        contentClassName: "",
        textBlocks: [
          {
            tagElement: "p",
            className: "",
            content: (
              <Fragment>
                Paragrafo 1 Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Fusce eu tortor dignissim, feugiat massa ac, eleifend
                odio. Donec placerat dignissim metus quis venenatis.
              </Fragment>
            ),
          },
          {
            tagElement: "p",
            className: "",
            content: (
              <Fragment>
                Paragrafo 2 Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Fusce eu tortor dignissim, feugiat massa ac, eleifend
                odio. Donec placerat dignissim metus quis venenatis.
              </Fragment>
            ),
          },
        ],
      },
    },
    {
      title: {
        titleContent: "Imagem e texto",
        tagTitle: "2",
        titleClassName: "",
      },
      images: {
        rowClasses: "align-items-center",
        imgUrl: imgUrl,
        imgUrlBreak: imgUrlBreak,
        imgSide: "left",
        colMd: "5",
        colLg: "6",
      },
      contents: {
        contentClassName: "",
        textBlocks: [
          {
            tagElement: "p",
            className: "",
            content: (
              <Fragment>
                Paragrafo 3 Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Fusce eu tortor dignissim, feugiat massa ac, eleifend
                odio. Donec placerat dignissim metus quis venenatis.
              </Fragment>
            ),
          },
          {
            tagElement: "p",
            className: "",
            content: (
              <Fragment>
                Paragrafo 4 Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Fusce eu tortor dignissim, feugiat massa ac, eleifend
                odio. Donec placerat dignissim metus quis venenatis.
              </Fragment>
            ),
          },
        ],
      },
    },
    {
      title: {
        titleContent: "Somente texto",
        tagTitle: "2",
        titleClassName: "",
      },

      contents: {
        contentClassName: "",
        textBlocks: [
          {
            tagElement: "p",
            className: "",
            content: (
              <Fragment>
                Paragrafo 4 Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Fusce eu tortor dignissim, feugiat massa ac, eleifend
                odio. Donec placerat dignissim metus quis venenatis.
              </Fragment>
            ),
          },
          {
            tagElement: "p",
            className: "",
            content: (
              <Fragment>
                Paragrafo 5 Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Fusce eu tortor dignissim, feugiat massa ac, eleifend
                odio. Donec placerat dignissim metus quis venenatis.
              </Fragment>
            ),
          },
        ],
      },
    },
  ];
  return (
    <Fragment>
      <Title
        typeH="4"
        className=""
        content={<Fragment>Extendido tela toda ( Apenas 1 por Vez )</Fragment>}
      />
      <Accordions
        className=""
        accordionItens={accordionItens}
        type="full"
        alwaysOpen={false}
        breakContent="md" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
      />
    </Fragment>
  );
}

export default BlocoAccordionUmPorVezFull;
