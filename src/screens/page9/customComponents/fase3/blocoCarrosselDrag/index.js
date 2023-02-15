// React Elements/Hooks
import { Fragment, useRef, useState } from "react";

// Components
import { Col, Image, Row } from "react-bootstrap";
import Title from "components/texts/title";
import CarouselDoubleWithDrag from "components/carousel/carouselDoubleWithDrag";
import Item0 from "./item0";
import Item1 from "./item1";
import Item2 from "./item2";
import Item3 from "./item3";
import Item4 from "./item4";
import Item5 from "./item5";
import Item6 from "./item6";
import Item7 from "./item7";
import Item8 from "./item8";

function BlocoCarrosselDrag(props) {
  const options = {
    animation: {
      type: "slideRelative",
      direction: "left", //'down' | 'left' | 'right' | 'up'
      timeout: 200,
    },
    confirmButton: {
      maxSelection: 2,
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
    slotSelection: {
      title: {
        titleContent: "Seus itens:",
        tagTitle: "5",
        titleClassName: "",
      },

      containerSlotClassName: "",
      slotClassName: "",

      animation: {
        type: "slide",
        orientation: "vertical", //'vertical' | 'horizontal'
        timeout: { appear: 1, enter: 600, exit: 300 },
        typeInteraction: "switch",
        scroll: true,
      },
    },
    feedBackSelection: {
      animation: {
        type: "slide",
        orientation: "vertical", //'vertical' | 'horizontal'
        timeout: { appear: 1, enter: 600, exit: 300 },
        typeInteraction: "switch",
        scroll: true,
      },
      title: {
        tagTitle: "4",
        titleClassName: "mb-0",
        content: "Resumo da sua equipe",
      },
      className: "justify-content-center",
      colMd: "2",
      colLg: "2",
      breakContent: "md", // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
      items: {
        title: {
          tagTitle: "5",
          titleClassName: "mb-0",
        },
      },
    },
  };

  const carrosselItems = [
    Item0,
    Item1,
    Item2,
    Item3,
    Item4,
    Item5,
    Item6,
    Item7,
    Item8,
  ];

  return (
    <Fragment>
      <CarouselDoubleWithDrag
        carrosselItems={carrosselItems}
        options={options}
        setIsFinished={props.setIsFinished}
        setControlTransition={props.setControlTransition}
        setOverflow={props.setOverflow}
        setEscolhidos={props.setEscolhidos}
      />
    </Fragment>
  );
}

export default BlocoCarrosselDrag;
