// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import ColmeiaWrapper from "components/buttons/colmeiaWrapper";
import ColmeiaItem from "components/buttons/colmeiaWrapper/colmeiaItem";
import Title from "components/texts/title";

//Imagens
import imgUrl from "screens/assets/images/img-Float.jpg";
import imgUrlBreak from "screens/assets/images/img-Full.jpg";

function BlocoBotoesColmeiaCom06(props) {
  const modalContent01 = {
    title: {
      titleContent: "Título 1 modal",
      tagTitle: "5",
      titleClassName: "",
    },
    images: {
      rowClasses: "align-items-center",
      imgUrl: imgUrl,
      imgUrlBreak: imgUrlBreak,
      imgSide: "fullTop",
      imgClassName: "",
      colMd: "5",
      colLg: "6",
    },
    buttonClose: {
      buttonClassName: "btn-padrao",
      buttonContent: "Sair",
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
              elit. Fusce eu tortor dignissim, feugiat massa ac, eleifend odio.
              Donec placerat dignissim metus quis venenatis.
            </Fragment>
          ),
        },
        {
          tagElement: "p",
          className: "",
          content: (
            <Fragment>
              Paragrafo 2 Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Fusce eu tortor dignissim, feugiat massa ac, eleifend odio.
              Donec placerat dignissim metus quis venenatis.
            </Fragment>
          ),
        },
      ],
    },
  };
  const modalContent02 = {
    title: {
      titleContent: "Título 2 modal",
      tagTitle: "5",
      titleClassName: "",
    },
    images: {
      rowClasses: "align-items-center",
      imgUrl: imgUrl,
      imgUrlBreak: imgUrlBreak,
      imgSide: "fullTop",
      imgClassName: "",
      colMd: "5",
      colLg: "6",
    },
    buttonClose: {
      buttonClassName: "btn-padrao",
      buttonContent: "Sair",
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
              elit. Fusce eu tortor dignissim, feugiat massa ac, eleifend odio.
              Donec placerat dignissim metus quis venenatis.
            </Fragment>
          ),
        },
        {
          tagElement: "p",
          className: "",
          content: (
            <Fragment>
              Paragrafo 2 Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Fusce eu tortor dignissim, feugiat massa ac, eleifend odio.
              Donec placerat dignissim metus quis venenatis.
            </Fragment>
          ),
        },
      ],
    },
  };
  const modalContent03 = {
    title: {
      titleContent: "Título 3 modal",
      tagTitle: "5",
      titleClassName: "",
    },
    images: {
      rowClasses: "align-items-center",
      imgUrl: imgUrl,
      imgUrlBreak: imgUrlBreak,
      imgSide: "fullTop",
      imgClassName: "",
      colMd: "5",
      colLg: "6",
    },
    buttonClose: {
      buttonClassName: "btn-padrao",
      buttonContent: "Sair",
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
              elit. Fusce eu tortor dignissim, feugiat massa ac, eleifend odio.
              Donec placerat dignissim metus quis venenatis.
            </Fragment>
          ),
        },
        {
          tagElement: "p",
          className: "",
          content: (
            <Fragment>
              Paragrafo 2 Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Fusce eu tortor dignissim, feugiat massa ac, eleifend odio.
              Donec placerat dignissim metus quis venenatis.
            </Fragment>
          ),
        },
      ],
    },
  };
  const modalContent04 = {
    title: {
      titleContent: "Título 4 modal",
      tagTitle: "5",
      titleClassName: "",
    },
    images: {
      rowClasses: "align-items-center",
      imgUrl: imgUrl,
      imgUrlBreak: imgUrlBreak,
      imgSide: "fullTop",
      imgClassName: "",
      colMd: "5",
      colLg: "6",
    },
    buttonClose: {
      buttonClassName: "btn-padrao",
      buttonContent: "Sair",
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
              elit. Fusce eu tortor dignissim, feugiat massa ac, eleifend odio.
              Donec placerat dignissim metus quis venenatis.
            </Fragment>
          ),
        },
        {
          tagElement: "p",
          className: "",
          content: (
            <Fragment>
              Paragrafo 2 Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Fusce eu tortor dignissim, feugiat massa ac, eleifend odio.
              Donec placerat dignissim metus quis venenatis.
            </Fragment>
          ),
        },
      ],
    },
  };
  const modalContent05 = {
    title: {
      titleContent: "Título 5 modal",
      tagTitle: "5",
      titleClassName: "",
    },
    images: {
      rowClasses: "align-items-center",
      imgUrl: imgUrl,
      imgUrlBreak: imgUrlBreak,
      imgSide: "fullTop",
      imgClassName: "",
      colMd: "5",
      colLg: "6",
    },
    buttonClose: {
      buttonClassName: "btn-padrao",
      buttonContent: "Sair",
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
              elit. Fusce eu tortor dignissim, feugiat massa ac, eleifend odio.
              Donec placerat dignissim metus quis venenatis.
            </Fragment>
          ),
        },
        {
          tagElement: "p",
          className: "",
          content: (
            <Fragment>
              Paragrafo 2 Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Fusce eu tortor dignissim, feugiat massa ac, eleifend odio.
              Donec placerat dignissim metus quis venenatis.
            </Fragment>
          ),
        },
      ],
    },
  };
  const modalContent06 = {
    title: {
      titleContent: "Título 6 modal",
      tagTitle: "5",
      titleClassName: "",
    },
    images: {
      rowClasses: "align-items-center",
      imgUrl: imgUrl,
      imgUrlBreak: imgUrlBreak,
      imgSide: "fullTop",
      imgClassName: "",
      colMd: "5",
      colLg: "6",
    },
    buttonClose: {
      buttonClassName: "btn-padrao",
      buttonContent: "Sair",
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
              elit. Fusce eu tortor dignissim, feugiat massa ac, eleifend odio.
              Donec placerat dignissim metus quis venenatis.
            </Fragment>
          ),
        },
        {
          tagElement: "p",
          className: "",
          content: (
            <Fragment>
              Paragrafo 2 Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Fusce eu tortor dignissim, feugiat massa ac, eleifend odio.
              Donec placerat dignissim metus quis venenatis.
            </Fragment>
          ),
        },
      ],
    },
  };

  return (
    <Fragment>
      <Col xs="12" sm="6">
        <Title
          typeH="4"
          className=""
          content={<Fragment>Primeira Linha = 2</Fragment>}
        />

        <ColmeiaWrapper className="i2">
          <ColmeiaItem
            modalContent={modalContent01}
            colmeiaName="1"
            breakContent="md"
          />
          <ColmeiaItem
            modalContent={modalContent02}
            colmeiaName="2"
            breakContent="md"
          />
          <ColmeiaItem
            modalContent={modalContent03}
            colmeiaName="3"
            breakContent="md"
          />
          <ColmeiaItem
            modalContent={modalContent04}
            colmeiaName="4"
            breakContent="md"
          />
          <ColmeiaItem
            modalContent={modalContent05}
            colmeiaName="5"
            breakContent="md"
          />
          <ColmeiaItem
            modalContent={modalContent06}
            colmeiaName="6"
            breakContent="md"
          />
        </ColmeiaWrapper>
      </Col>
    </Fragment>
  );
}

export default BlocoBotoesColmeiaCom06;
