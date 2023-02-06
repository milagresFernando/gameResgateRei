// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import TableFlex from "components/tables/tableFlex";
import Title from "components/texts/title";

//Imagens

function BlocoTabelaFlex() {
  const row01Items = [
    {
      title: {
        titleContent: "Título 1 table",
        tagTitle: "5",
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
                Paragrafo 1 Lorem ipsum dolor sit amet, consectetur adipiscing
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
        titleContent: "Título 2 table",
        tagTitle: "5",
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
                Paragrafo 1 Lorem ipsum dolor sit amet, consectetur adipiscing
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
        titleContent: "Título 3 table",
        tagTitle: "5",
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
                Paragrafo 1 Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Fusce eu tortor dignissim, feugiat massa ac, eleifend
                odio. Donec placerat dignissim metus quis venenatis.
              </Fragment>
            ),
          },
        ],
      },
    },
  ];
  const row02Items = [
    {
      title: {
        titleContent: "Título 4 table",
        tagTitle: "5",
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
                Paragrafo 1 Lorem ipsum dolor sit amet, consectetur adipiscing
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
        titleContent: "Título 5 table",
        tagTitle: "5",
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
                Paragrafo 1 Lorem ipsum dolor sit amet, consectetur adipiscing
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
        titleContent: "Título 6 table",
        tagTitle: "5",
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
                Paragrafo 1 Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Fusce eu tortor dignissim, feugiat massa ac, eleifend
                odio. Donec placerat dignissim metus quis venenatis.
              </Fragment>
            ),
          },
        ],
      },
    },
  ];
  const row03Items = [
    {
      title: {
        titleContent: "Título 7 table",
        tagTitle: "5",
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
                Paragrafo 1 Lorem ipsum dolor sit amet, consectetur adipiscing
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
        titleContent: "Título 8 table",
        tagTitle: "5",
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
                Paragrafo 1 Lorem ipsum dolor sit amet, consectetur adipiscing
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
        titleContent: "Título 9 table",
        tagTitle: "5",
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
                Paragrafo 1 Lorem ipsum dolor sit amet, consectetur adipiscing
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
        content={<Fragment>Tabela / display: FLEX</Fragment>}
      />
      <TableFlex
        className=""
        tableFlexItems={[row01Items, row02Items, row03Items]}
        breakContent="md" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
      />
    </Fragment>
  );
}

export default BlocoTabelaFlex;
