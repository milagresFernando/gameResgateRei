// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment, useRef, useEffect, createRef } from "react";

// Components
import { Container, Row, Col, Image } from "react-bootstrap";
import Btn from "components/buttons";
import Transitions from "components/transitions";
import scrollTo from "globalFunctions/scrollTo";
import ConfirmButton from "./confirmButton";
import SlotSelected from "./slotSelected";
import FinishButton from "./finishButton";
import ResetButton from "./resetButton";

// Functions

import debounceTimeOut from "globalFunctions/debounceTimeOut";
import FeedBackSelection from "./feedBackSelection";

//Imagens

function CarouselDoubleWithDragNoBig(props) {
  //  states
  const [minHeight, setMinHeight] = useState(0);
  const [thumbAbsoluteHeight, setThumbAbsoluteHeight] = useState(0);
  const [carrosselThumbs, setCarrosselThumbs] = useState([]);
  const [selectedDescription, setSelectedDescription] = useState(0);
  const [thumbsWidth, setThumbsWidth] = useState([]);
  const [thumbsWrapperWidth, setThumbsWrapperWidth] = useState(0);
  const [thumbsContainerHeight, setThumbsContainerHeight] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);
  const [scrollStart, setScrollStart] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const [actualItem, setActualItem] = useState(0);
  const [interact, setInteract] = useState(false);
  const [hasScroll, setHaScroll] = useState(false);
  const [hasVerticalScroll, setHasVerticalScroll] = useState(false);
  const [firstInteract, setFirstInteract] = useState(false);

  const [showConfirm, setShowConfirm] = useState(false);
  const [showComponents, setShowComponents] = useState(false);
  const [reset, setReset] = useState(false);
  const [finishItems, setFinishItems] = useState([]);

  const [countMaxSelected, setCountMaxSelected] = useState({});

  const [escolhidos, setEscolhidos] = useState([
    props.carrosselItems[0],
    ...props.escolhidos,
  ]);

  const [controlAtive, setControlAtive] = useState(
    escolhidos.map((carrosselThumb, id) => {
      return false;
    })
  );

  const [controlSelected, setControlSelected] = useState(
    escolhidos.map((carrosselThumb, id) => {
      return false;
    })
  );

  // const [bigItems, setBigItems] = useState([escolhidos[actualItem].component]);

  // refs
  const thumbRef = createRef();
  const containerRef = useRef(null);
  const scrollThumb = useRef(null);
  const containerScrollThumb = useRef(null);
  const containerSlotRef = useRef(null);
  const confirmContainerRef = useRef(null);

  // const props.refContainer = useRef(null);

  // vars
  const scrollBarHeight = 15;

  const options = {
    type: props.options.animation.type,
    direction: props.options.animation.direction,
    timeout: props.options.animation.direction.timeout,
    typeInteraction: "switch",
    scroll: true,
  };

  const slotOptions = props.options.slotSelection && {
    type: props.options.slotSelection.animation.type,
    orientation: props.options.slotSelection.animation.orientation,
    timeout: props.options.slotSelection.animation.timeout,
    typeInteraction: props.options.slotSelection.animation.typeInteraction,
    scroll: true,
  };

  const confirmButtonOptions = props.options.confirmButton && {
    type: props.options.confirmButton.animation.type,
    orientation: props.options.confirmButton.animation.orientation,
    timeout: props.options.confirmButton.animation.timeout,
    typeInteraction: props.options.confirmButton.animation.typeInteraction,
    scroll: true,
  };

  const feedBackSelectionOptions = props.options.feedBackSelection && {
    type: props.options.feedBackSelection.animation.type,
    orientation: props.options.feedBackSelection.animation.orientation,
    timeout: props.options.feedBackSelection.animation.timeout,
    typeInteraction: props.options.feedBackSelection.animation.typeInteraction,
    scroll: true,
  };

  useEffect(() => {
    if (props.refContainer?.current != null) {
      setTimeout(() => {
        checkHasVerticalScroll(props.refContainer);
      }, options.timeout);
    }
  }, [actualItem, controlAtive]);

  useEffect(() => {
    const debouncedHandleResize = debounceTimeOut(function handleResize() {
      if (props.refContainer?.current != null) {
        checkHasVerticalScroll(props.refContainer);
      }
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  useEffect(() => {
    setInteract((prev) => !prev);
    setTimeout(() => {
      //setMinHeight(containerRef.current.clientHeight);
      // scrollTo(confirmContainerRef, 0, 10, "auto");
    }, props.options.animation.timeout + 200);
  }, [showComponents]);

  useEffect(() => {
    setCarrosselThumbs(
      escolhidos.map((carrosselThumb, id) => {
        if (id == 0) {
          return <div ref={thumbRef} key={id}></div>;
        } else {
          return (
            <Btn
              ref={thumbRef}
              key={id}
              className={`${
                controlAtive[id] && !controlSelected[id]
                  ? "active"
                  : "notActive"
              } ${controlSelected[id] ? "selected" : "notSelected"}  ${
                countMaxSelected.true ==
                props.options.confirmButton.maxSelection
                  ? "disabled"
                  : ""
              } btnCarrosselDrag`}
            >
              <div
                className="absoluteItem"
                style={{ height: `${thumbAbsoluteHeight}px` }}
              ></div>
              <Image
                onClick={() => handleClickThumb(id + 1)}
                src={carrosselThumb.thumb}
                className={""}
                loading="lazy"
                alt=""
                fluid
              />
            </Btn>
          );
        }
      })
    );
  }, [controlAtive, controlSelected, countMaxSelected, thumbAbsoluteHeight]);

  useEffect(() => {
    if (carrosselThumbs != "") {
      setThumbsWidth(
        carrosselThumbs.map((carrosselThumb, id) => {
          return carrosselThumb.ref.current.children[1].naturalWidth;
        })
      );

      setThumbsContainerHeight(
        carrosselThumbs[0].ref.current.children[1].naturalHeight +
          scrollBarHeight
      );
    }
  }, [carrosselThumbs]);

  useEffect(() => {
    setThumbsWrapperWidth(
      thumbsWidth.reduce((partialSum, a) => partialSum + a, -thumbsWidth[1])
    );
  }, [thumbsWidth]);

  useEffect(() => {
    setThumbAbsoluteHeight(thumbsWidth[0]);
  }, [thumbsWidth]);

  useEffect(() => {
    containerScrollThumb.current.addEventListener(
      "scroll",
      controlButtonsDisable
    );

    // return () => {
    //   containerScrollThumb.current.removeEventListener(
    //     "scroll",
    //     controlButtonsDisable
    //   );
    // };
  }, []);

  useEffect(() => {
    let cloneControlAtive = [...controlAtive];
    carrosselThumbs.forEach((carrosselThumb, id) => {
      if (actualItem == id && actualItem != 0) {
        cloneControlAtive[id] = true;
      } else {
        cloneControlAtive[id] = false;
      }
    });
    setControlAtive(cloneControlAtive);
  }, [actualItem]);

  // useEffect(() => {
  //   setBigItems([props.carrosselItems[actualItem].component]);
  // }, [actualItem]);

  useEffect(() => {
    if (controlAtive.includes(true)) {
      setShowConfirm(true);
      scrollTo(confirmContainerRef, 0, 10, "auto");
    } else {
      setShowConfirm(false);
    }
  }, [controlAtive]);

  useEffect(() => {
    setCountMaxSelected(
      controlSelected.reduce((accumulator, value) => {
        return { ...accumulator, [value]: (accumulator[value] || 0) + 1 };
      }, {})
    );
  }, [controlSelected]);

  // useEffect(() => {
  //   if (firstInteract) {
  //     setTimeout(() => {
  //       setBigItems([props.carrosselItems[1].component]);
  //       setBigItems([props.carrosselItems[actualItem].component]);
  //     }, 200);
  //   }
  // }, [firstInteract]);

  useEffect(() => {
    if (thumbsWrapperWidth != 0 && isNaN(thumbsWrapperWidth) == false) {
      if (containerScrollThumb.current.offsetWidth >= thumbsWrapperWidth) {
        setHaScroll(false);
      } else {
        setHaScroll(true);
      }
    }
  }, [thumbsWrapperWidth]);

  useEffect(() => {
    const debouncedHandleResize = debounceTimeOut(function handleResize() {
      setMinHeight(containerRef.current.clientHeight);
      if (thumbsWrapperWidth != 0 && isNaN(thumbsWrapperWidth) == false) {
        if (containerScrollThumb.current.offsetWidth >= thumbsWrapperWidth) {
          setHaScroll(false);
        } else {
          setHaScroll(true);
        }
      }
    }, 500);

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, [thumbsWrapperWidth]);

  useEffect(() => {
    if (props.type == "item") {
      if (countMaxSelected.true == props.options.confirmButton.maxSelection) {
        props.setShowResetAndFinish(true);
      } else {
        props.setShowResetAndFinish(false);
      }
    }

    if (props.type == "personagemAndItem") {
      let cloneShowResetAndFinish = [...props.showResetAndFinish];
      if (countMaxSelected.true == props.options.confirmButton.maxSelection) {
        cloneShowResetAndFinish[props.id] = true;
        props.setShowResetAndFinish(cloneShowResetAndFinish);
      } else {
        cloneShowResetAndFinish[props.id] = false;
        props.setShowResetAndFinish(cloneShowResetAndFinish);
      }
    }
  }, [countMaxSelected]);

  function controlButtonsDisable() {
    if (containerScrollThumb.current.scrollLeft == 0) {
      setScrollStart(true);
    } else {
      setScrollStart(false);
    }

    if (
      containerScrollThumb.current.scrollWidth -
        containerScrollThumb.current.offsetWidth <=
      containerScrollThumb.current.scrollLeft + 2
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  }
  function checkHasVerticalScroll(refContainer) {
    if (refContainer.current.clientHeight > window.innerHeight) {
      props.setOverflow(false);
      props.setHasVerticalScroll(true);
    } else {
      props.setHasVerticalScroll(false);
      props.setOverflow(true);
    }
  }
  function handleArrowClick(side) {
    if (side == "prev") {
      setScrollPos(
        (containerScrollThumb.current.scrollLeft -=
          containerScrollThumb.current.offsetWidth)
      );
    }
    if (side == "next") {
      setScrollPos(
        (containerScrollThumb.current.scrollLeft +=
          containerScrollThumb.current.offsetWidth)
      );
    }
  }
  function handleClickThumb(id) {
    setShowComponents((prev) => !prev);
    setTimeout(() => {
      setActualItem(id - 1);
      setShowComponents((prev) => !prev);
    }, props.options.animation.timeout);
  }
  function handleConfirm() {
    setFirstInteract(true);

    let cloneSelected = [...controlSelected];
    carrosselThumbs.forEach((carrosselThumb, id) => {
      if (actualItem == id) {
        cloneSelected[id] = true;
      }
    });
    setControlSelected(cloneSelected);

    props.setSelectedDescription(
      cloneSelected
        .map((selected, id) => {
          if (selected == true) {
            return escolhidos[id];
          } else {
            return false;
          }
        })
        .filter((selected, id) => {
          return selected != false;
        })
    );
    setControlAtive(
      escolhidos.map((carrosselThumb, id) => {
        return false;
      })
    );
  }

  useEffect(() => {
    if (props.callReset) {
      handleReset();
      props.setCallReset(false);
    }
  }, [props.callReset]);

  function handleReset() {
    setFirstInteract(false);
    setControlSelected(
      escolhidos.map((carrosselThumb, id) => {
        return false;
      })
    );
    setReset((prev) => !prev);
    setActualItem(0);
    // setTimeout(() => {
    //   setMinHeight(containerRef.current.clientHeight);
    // }, 200);
    setTimeout(() => {
      checkHasVerticalScroll(props.refContainer);
    }, 500);
  }

  const confirmButtonRow = (
    <Row>
      <Col
        xs={12}
        className="d-flex justify-content-center relative overflow-hidden"
        ref={confirmContainerRef}
      >
        <Transitions
          interact={showConfirm}
          options={confirmButtonOptions}
          typeInteraction={confirmButtonOptions.typeInteraction} //'oneClick', 'switch', 'hideElement'
        >
          <ConfirmButton
            onClick={() => handleConfirm()}
            className={
              props.options.confirmButton.className
                ? props.options.confirmButton.className
                : ""
            }
            content={props.options.confirmButton.content}
          />
        </Transitions>
      </Col>
    </Row>
  );

  return (
    // <Row
    //   className={` ${hasVerticalScroll ? "top" : "center"} props.refContainer`}
    //   ref={props.refContainer}
    // >
    <Row className="justify-content-center">
      {props.options.feedBackSelection && (
        <FeedBackSelection
          finishItems={finishItems}
          options={props.options}
          feedBackSelectionOptions={feedBackSelectionOptions}
          countMaxSelected={countMaxSelected.true}
          maxSelection={props.options.confirmButton.maxSelection}
        />
      )}
      <div
        className={`bigItems ${
          props.options.feedBackSelection &&
          countMaxSelected.true == props.options.confirmButton.maxSelection
            ? "esconde"
            : "mostra"
        }`}
        style={{ minHeight: `${minHeight}px` }}
      >
        <Row className="">
          {props.options.slotSelection && (
            <Col
              className="relative overflow-hidden d-flex justify-content-center"
              ref={containerSlotRef}
            >
              <SlotSelected
                containerSlotClassName={
                  props.options.slotSelection.containerSlotClassName
                    ? props.options.slotSelection.containerSlotClassName
                    : ""
                }
                slotClassName={
                  props.options.slotSelection.slotClassName
                    ? props.options.slotSelection.slotClassName
                    : ""
                }
                title={
                  props.options.slotSelection.title &&
                  props.options.slotSelection.title
                }
                reset={reset}
                numberSlots={props.options.confirmButton.maxSelection}
                carrosselThumb={escolhidos}
                controlSelected={controlSelected}
                setControlSelected={setControlSelected}
                actualItem={actualItem}
                setActualItem={setActualItem}
                countMaxSelected={countMaxSelected}
              />
            </Col>
          )}
        </Row>
        <Row className="justify-content-center">
          <Col
            xs={12}
            md={`${firstInteract ? "10" : "12"}`}
            className="contentCol"
          >
            {/* <div className="relative" ref={containerRef}>
              <Transitions
                interact={interact}
                options={options}
                typeInteraction={options.typeInteraction} //'oneClick', 'switch', 'hideElement'
                containerRef={containerRef} //IMPORTANTE para ser relativo ao container
              >
                {bigItems}
              </Transitions>
            </div> */}
            <Row className="">
              <Col xs={12}>
                <div className="carouselDoubleWithDrag">
                  {hasScroll && (
                    <Btn
                      className="controls controlPrev"
                      onClick={() => handleArrowClick("prev")}
                      disabled={
                        (scrollStart && scrollStart) ||
                        countMaxSelected.true ==
                          props.options.confirmButton.maxSelection
                      }
                    >
                      <span className="leitorTela">voltar</span>
                    </Btn>
                  )}
                  <div
                    className={`containerThumbs ${
                      countMaxSelected.true ==
                      props.options.confirmButton.maxSelection
                        ? "disabled"
                        : ""
                    } ${hasScroll ? "hasScroll" : ""} justify-content-center`}
                    ref={containerScrollThumb}
                    style={{ height: `${thumbsContainerHeight}px` }}
                  >
                    <div
                      className="thumbsWrapper"
                      ref={scrollThumb}
                      style={{ width: `${thumbsWrapperWidth}px` }}
                    >
                      {carrosselThumbs}
                    </div>
                  </div>
                  {hasScroll && (
                    <Btn
                      className="controls controlNext"
                      onClick={() => handleArrowClick("next")}
                      disabled={
                        (scrollEnd && scrollEnd) ||
                        countMaxSelected.true ==
                          props.options.confirmButton.maxSelection
                      }
                    >
                      <span className="leitorTela">avançar</span>
                    </Btn>
                  )}
                </div>
              </Col>
            </Row>

            {confirmButtonRow}
          </Col>
        </Row>
      </div>
    </Row>
  );
}

export default CarouselDoubleWithDragNoBig;
