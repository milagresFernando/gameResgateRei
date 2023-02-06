// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import ModalBoots from "components/modal";
import Colmeia from "./colmeia";

function ColmeiaItem(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  return (
    <Fragment>
      <Colmeia colmeiaName={props.colmeiaName} handleShow={handleShow} />

      <ModalBoots
        className=""
        modalContent={props.modalContent}
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        verticalCenter={true}
        breakContent={props.breakContent} // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
      />
    </Fragment>
  );
}

export default ColmeiaItem;
