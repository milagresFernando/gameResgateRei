// React Elements/Hooks
import { Fragment } from "react";

// Components
import { Col } from "react-bootstrap";
import TabsBootstrap from "components/tabs";
import Title from "components/texts/title";

//Imagens
import imgUrl from "screens/assets/images/img-Float.jpg";
import imgUrlBreak from "screens/assets/images/img-Full.jpg";

function BlocoAbasVerticalFull() {
  const tabsItens = [
    {
      title: {
        titleContent: "Aba1",
        titleClassName: "",
      },
      images: {
        rowClasses: "align-items-center",
        imgUrl: imgUrl,
        imgUrlBreak: imgUrlBreak,
        imgSide: "bottom",
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
        titleContent: "Aba2",
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
        titleContent: "Aba3",
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
  ];
  return (
    <Fragment>
      <Col xs="12">
        <Title
          typeH="4"
          className=""
          content={<Fragment>Vertical 100%</Fragment>}
        />
      </Col>
      <Col xs="12" className="d-flex">
        <TabsBootstrap
          tabsItens={tabsItens}
          className="tabVertical"
          typeHeader="vertical"
          breakContent="md" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
        />
      </Col>
    </Fragment>
  );
}

export default BlocoAbasVerticalFull;
