// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import ModalBoots from "components/modal";
import Btn from "components/buttons";
import Title from "components/texts/title";

//Imagens
import imgUrl from "screens/assets/images/img-Float.jpg";
import imgUrlBreak from "screens/assets/images/img-Full.jpg";

function BlocoBotoesModal02(props) {
  const modalContent = {
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

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <Col>
        <Btn className="btn-padrao btn-rounded" size="md" onClick={handleShow}>
          Botão Modal 02
        </Btn>
      </Col>
      <ModalBoots
        className=""
        modalContent={modalContent}
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        verticalCenter={true}
        breakContent="md" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
      />
    </Fragment>
  );
}

export default BlocoBotoesModal02;
