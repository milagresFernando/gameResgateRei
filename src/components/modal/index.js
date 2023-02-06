// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import Btn from "components/buttons";
import Title from "components/texts/title";
import TextBlock from "components/texts/text_block";
import FlexImgWithText from "components/images/flexImgWithText";

// Functions
import setBreakPoint from "globalFunctions/setBreakPoint";
import debounceTimeOut from "globalFunctions/debounceTimeOut";

function ModalBoots(props) {
  //imgSide pode ser "top", "fullTop", "left", "bottom" "fullBottom", "right" "fullRight" ou "fullLeft"
  const [breakResponsive, setBreakResponsive] = useState(false);

  useEffect(() => {
    if (props.breakContent) {
      const debouncedHandleResize = debounceTimeOut(function handleResize() {
        if (window.innerWidth <= setBreakPoint(props.breakContent)) {
          setBreakResponsive(true);
        } else {
          setBreakResponsive(false);
        }
      }, 500);

      window.addEventListener("resize", debouncedHandleResize);
      return () => {
        window.removeEventListener("resize", debouncedHandleResize);
      };
    }
  }, [breakResponsive]);

  useEffect(() => {
    if (props.breakContent) {
      if (window.innerWidth <= setBreakPoint(props.breakContent)) {
        setBreakResponsive(true);
      }
    }
  }, [props.show]);

  return (
    <>
      <Modal
        className={`${props.className ? props.className : ""} ${
          breakResponsive ? "break" : ""
        }`}
        show={props.show}
        onHide={props.handleClose}
        centered={props.verticalCenter && true}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Title
              typeH={props.modalContent.title.tagTitle}
              className={props.modalContent.title.titleClassName}
              content={
                <Fragment>{props.modalContent.title.titleContent}</Fragment>
              }
            />
          </Modal.Title>
        </Modal.Header>

        {props.modalContent.images && (
          <Modal.Body
            className={`relative bodyWithImg ${
              props.modalContent.images.imgSide === "fullLeft"
                ? "fullLeft"
                : props.modalContent.images.imgSide === "left"
                ? "left"
                : props.modalContent.images.imgSide === "right"
                ? "right"
                : props.modalContent.images.imgSide === "fullRight"
                ? "fullRight"
                : props.modalContent.images.imgSide === "bottom"
                ? "bottom"
                : props.modalContent.images.imgSide === "top"
                ? " top"
                : props.modalContent.images.imgSide === "fullBottom"
                ? "fullBottom"
                : props.modalContent.images.imgSide === "fullTop"
                ? "fullTop"
                : ""
            }
   ${props.modalContent.contents.contentClassName}`}
          >
            <FlexImgWithText
              breakContent={props.breakContent}
              typeH={props.modalContent.title.tagTitle}
              titleClassName={props.modalContent.title.titleClassName}
              title={props.modalContent.title.titleContent}
              textsBlock={props.modalContent.contents.textBlocks}
              imgSide={props.modalContent.images.imgSide}
              imgUrl={props.modalContent.images.imgUrl}
              imgUrlBreak={props.modalContent.images.imgUrlBreak}
              imgClassName={props.modalContent.images.imgClassName}
              rowClasses={props.modalContent.images.rowClasses}
              colXs={props.modalContent.images.colXs}
              colSm={props.modalContent.images.colSm}
              colMd={props.modalContent.images.colMd}
              colLg={props.modalContent.images.colLg}
              colXl={props.modalContent.images.colXl}
              colXXl={props.modalContent.images.colXXl}
            />
          </Modal.Body>
        )}
        {!props.modalContent.images && (
          <Modal.Body>
            <TextBlock textsBlock={props.modalContent.contents.textBlocks} />
          </Modal.Body>
        )}
        <Modal.Footer>
          {props.modalContent.buttonClose && (
            <Btn
              className={`${
                props.modalContent.buttonClose.buttonClassName
                  ? props.modalContent.buttonClose.buttonClassName
                  : ""
              }`}
              onClick={props.handleClose}
            >
              {props.modalContent.buttonClose.buttonContent}
            </Btn>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalBoots;
