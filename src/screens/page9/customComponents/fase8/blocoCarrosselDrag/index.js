// React Elements/Hooks
import { Fragment, useRef, useState, useEffect } from "react";

// Components
import { Col, Image, Row } from "react-bootstrap";
import Title from "components/texts/title";
import Item0 from "./item0";
import CarouselDoubleWithDragNoBig from "components/carousel/carouselDoubleWithDragNoBig";
import Transitions from "components/transitions";
import FinishButton from "components/carousel/carouselDoubleWithDragNoBig/finishButton";
import ResetButton from "components/carousel/carouselDoubleWithDragNoBig/resetButton";

function BlocoCarrosselDrag(props) {
  const [hasVerticalScroll, setHasVerticalScroll] = useState(false);
  const [callReset, setCallReset] = useState(false);
  const [itemSelected, setItemSelected] = useState([]);
  const [verificaFeed, setVerificaFeed] = useState(false);

  const [showResetAndFinish, setShowResetAndFinish] = useState(false);

  const containerPersonagemItem = useRef(null);
  const containerFinishRef = useRef(null);
  const containerResetRef = useRef(null);

  useEffect(() => {
    setHasVerticalScroll(hasVerticalScroll);
  }, [hasVerticalScroll]);

  useEffect(() => {
    setItemSelected(itemSelected);
  }, [itemSelected]);

  useEffect(() => {
    setShowResetAndFinish(showResetAndFinish);
  }, [showResetAndFinish]);

  useEffect(() => {
    if (!verificaFeed) {
      //console.log("errado");
      props.setFeed(false);
    } else {
      props.setFeed(true);
      //  console.log("certo");
    }
  }, [verificaFeed]);

  const optionsResetFinishButton = {
    finishButton: {
      className: "",
      content: "Prosseguir",
      animation: {
        type: "grow",
        style: { transformOrigin: "0 0 0", height: 0 },
        timeout: { appear: 1, enter: 2200, exit: 300 },
        typeInteraction: "switchGrow",
        scroll: true,
      },
    },
    resetButton: {
      className: "",
      content: "Limpar seleção",
      animation: {
        type: "grow",
        style: { transformOrigin: "0 0 0", height: 0 },
        timeout: { appear: 1, enter: 2200, exit: 300 },
        typeInteraction: "switchGrow",
        scroll: true,
      },
    },
  };

  const optionsItem = {
    animation: {
      type: "slideRelative",
      direction: "left", //'down' | 'left' | 'right' | 'up'
      timeout: 200,
    },
    confirmButton: {
      maxSelection: 1,
      className: "",
      content: "Confirmar seleção",
      animation: {
        type: "grow",
        style: { transformOrigin: "0 0 0", height: 0 },
        timeout: { appear: 1, enter: 600, exit: 300 },
        typeInteraction: "switchGrow",
        scroll: true,
      },
    },

    slotSelection: {
      title: {
        titleContent: "Item:",
        tagTitle: "5",
        titleClassName: "",
      },

      containerSlotClassName: "noBig",
      slotClassName: "",

      animation: {
        type: "slide",
        orientation: "vertical", //'vertical' | 'horizontal'
        timeout: { appear: 1, enter: 600, exit: 300 },
        typeInteraction: "switch",
        scroll: true,
      },
    },
  };

  function handleReset() {
    setCallReset(true);
  }
  function handleFinish() {
    if (props.caminhoData.gabarito[props.etapa].item != null) {
      props.caminhoData.gabarito[props.etapa].item.forEach((item, id) => {
        if (item == itemSelected[0].id) {
          setVerificaFeed(true);
        }
      });
    } else {
      setVerificaFeed(true);
    }

    props.setEtapa(props.etapa + 1);
    // props.setControlTransition((prev) => !prev);
    props.setControlTransition(false);
    props.setIsFinished(true);
  }

  const carrosselItems = [Item0];

  const nextAndClearButtonRow = (
    <Row>
      <Col
        xs={6}
        className="d-flex justify-content-end"
        ref={containerResetRef}
      >
        <Transitions
          interact={showResetAndFinish}
          options={optionsResetFinishButton.resetButton.animation}
          typeInteraction={
            optionsResetFinishButton.resetButton.animation.typeInteraction
          } //'oneClick', 'switch', 'hideElement'
        >
          <ResetButton
            onClick={() => handleReset()}
            className={
              optionsResetFinishButton.resetButton.className
                ? optionsResetFinishButton.resetButton.className
                : ""
            }
            content={optionsResetFinishButton.resetButton.content}
          />
        </Transitions>
      </Col>
      <Col
        xs={6}
        className="d-flex justify-content-start "
        ref={containerFinishRef}
      >
        <Transitions
          interact={showResetAndFinish}
          options={optionsResetFinishButton.finishButton.animation}
          typeInteraction={
            optionsResetFinishButton.finishButton.animation.typeInteraction
          } //'oneClick', 'switch', 'hideElement'
        >
          <FinishButton
            onClick={() => handleFinish()}
            className={
              optionsResetFinishButton.finishButton.className
                ? optionsResetFinishButton.finishButton.className
                : ""
            }
            content={optionsResetFinishButton.finishButton.content}
          />
        </Transitions>
      </Col>
    </Row>
  );

  return (
    <Fragment>
      <div
        className={` ${
          hasVerticalScroll ? "top" : "center"
        } containerPersonagemItem`}
        ref={containerPersonagemItem}
      >
        <Row className="justify-content-center">
          <Col className="d-flex justify-content-center">
            <Title
              typeH={4}
              className={""}
              content={<Fragment>Selecione um item:</Fragment>}
            />
          </Col>
        </Row>

        <CarouselDoubleWithDragNoBig
          type={"item"}
          carrosselItems={carrosselItems}
          setSelectedDescription={setItemSelected}
          options={optionsItem}
          setOverflow={props.setOverflow}
          escolhidos={props.escolhidos[1]}
          refContainer={containerPersonagemItem}
          setHasVerticalScroll={setHasVerticalScroll}
          setShowResetAndFinish={setShowResetAndFinish}
          showResetAndFinish={showResetAndFinish}
          callReset={callReset}
          setCallReset={setCallReset}
        />

        {nextAndClearButtonRow}
      </div>
    </Fragment>
  );
}

export default BlocoCarrosselDrag;
