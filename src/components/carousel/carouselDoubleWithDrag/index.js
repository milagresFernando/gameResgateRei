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

function CarouselDoubleWithDrag(props) {
  //  states
  const [minHeight, setMinHeight] = useState(0);
  const [thumbAbsoluteHeight, setThumbAbsoluteHeight] = useState(0);
  const [carrosselThumbs, setCarrosselThumbs] = useState([]);
  const [thumbsWidth, setThumbsWidth] = useState([]);
  const [thumbsWrapperWidth, setThumbsWrapperWidth] = useState(0);
  const [thumbsContainerHeight, setThumbsContainerHeight] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);
  const [scrollStart, setScrollStart] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const [actualItem, setActualItem] = useState(0);
  const [interact, setInteract] = useState(false);
  const [hasScroll, setHaScroll] = useState(false);
  const [firstInteract, setFirstInteract] = useState(false);

  const [showConfirm, setShowConfirm] = useState(false);
  const [showComponents, setShowComponents] = useState(false);
  const [reset, setReset] = useState(false);
  const [finishItems, setFinishItems] = useState([]);
  const [countMaxSelected, setCountMaxSelected] = useState({});
  const [controlAtive, setControlAtive] = useState(
    props.carrosselItems.map((carrosselThumb, id) => {
      return false;
    })
  );

  const [controlSelected, setControlSelected] = useState(
    props.carrosselItems.map((carrosselThumb, id) => {
      return false;
    })
  );

  const [bigItems, setBigItems] = useState([
    props.carrosselItems[actualItem].component,
  ]);

  // refs
  const thumbRef = createRef();
  const containerRef = useRef(null);
  const scrollThumb = useRef(null);
  const containerScrollThumb = useRef(null);
  const containerSlotRef = useRef(null);
  const confirmContainerRef = useRef(null);
  const containerFinishRef = useRef(null);
  const containerResetRef = useRef(null);

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
  const resetButtonOptions = props.options.resetButton && {
    type: props.options.resetButton.animation.type,
    orientation: props.options.resetButton.animation.orientation,
    timeout: props.options.resetButton.animation.timeout,
    typeInteraction: props.options.resetButton.animation.typeInteraction,
    scroll: true,
  };
  const finishButtonOptions = props.options.finishButton && {
    type: props.options.finishButton.animation.type,
    orientation: props.options.finishButton.animation.orientation,
    timeout: props.options.finishButton.animation.timeout,
    typeInteraction: props.options.finishButton.animation.typeInteraction,
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
    setInteract((prev) => !prev);
    setTimeout(() => {
      setMinHeight(containerRef.current.clientHeight);
      // scrollTo(confirmContainerRef, 0, 10, "auto");
    }, props.options.animation.timeout + 200);
  }, [showComponents]);

  useEffect(() => {
    setCarrosselThumbs(
      props.carrosselItems.map((carrosselThumb, id) => {
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

  useEffect(() => {
    setBigItems([props.carrosselItems[actualItem].component]);
  }, [actualItem]);

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
  useEffect(() => {
    if (firstInteract) {
      setTimeout(() => {
        setBigItems([props.carrosselItems[1].component]);
        setBigItems([props.carrosselItems[actualItem].component]);
      }, 200);
    }
  }, [firstInteract]);

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
    if (countMaxSelected.true == props.options.confirmButton.maxSelection) {
      setFinishItems(
        props.carrosselItems
          .filter((selected, id) => {
            return controlSelected[id] == true;
          })
          .map((selected, id) => {
            return selected.info;
          })
      );
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
  function handleArrowClick(side) {
    if (side == "prev") {
      setScrollPos(
        (containerScrollThumb.current.scrollLeft -=
          containerScrollThumb.current.offsetWidth)
      );
      console.log("voltar");
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
    setControlAtive(
      props.carrosselItems.map((carrosselThumb, id) => {
        return false;
      })
    );
  }
  function handleReset() {
    setFirstInteract(false);
    setControlSelected(
      props.carrosselItems.map((carrosselThumb, id) => {
        return false;
      })
    );
    setReset((prev) => !prev);
    setActualItem(0);
    setTimeout(() => {
      setMinHeight(containerRef.current.clientHeight);
    }, 200);

    console.log("reset");
  }
  function handleFinish() {
    console.log("finish");
    props.setControlTransition((prev) => !prev);
    props.setIsFinished(true);

    // setFinishItems(
    //   props.carrosselItems
    //     .filter((selected, id) => {
    //       return controlSelected[id] == true;
    //     })
    //     .map((selected, id) => {
    //       return selected.info;
    //     })
    // );
  }

  return (
    <Fragment>
      <FeedBackSelection
        finishItems={finishItems}
        options={props.options}
        feedBackSelectionOptions={feedBackSelectionOptions}
        countMaxSelected={countMaxSelected.true}
        maxSelection={props.options.confirmButton.maxSelection}
      />

      <div
        className={`bigItems ${
          props.options.feedBackSelection &&
          countMaxSelected.true == props.options.confirmButton.maxSelection
            ? "esconde"
            : "mostra"
        }`}
        style={{ minHeight: `${minHeight}px` }}
      >
        <Row className="align-items-center">
          {props.options.slotSelection && (
            <Col className="relative overflow-hidden" ref={containerSlotRef}>
              <Transitions
                interact={firstInteract}
                options={slotOptions}
                typeInteraction={slotOptions.typeInteraction} //'oneClick', 'switch', 'hideElement'
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
                  carrosselThumb={props.carrosselItems}
                  controlSelected={controlSelected}
                  setControlSelected={setControlSelected}
                  actualItem={actualItem}
                  setActualItem={setActualItem}
                  countMaxSelected={countMaxSelected}
                />
              </Transitions>
            </Col>
          )}

          <Col
            xs={12}
            md={`${firstInteract ? "10" : "12"}`}
            className="contentCol"
          >
            <div className="relative" ref={containerRef}>
              <Transitions
                interact={interact}
                options={options}
                typeInteraction={options.typeInteraction} //'oneClick', 'switch', 'hideElement'
                containerRef={containerRef} //IMPORTANTE para ser relativo ao container
              >
                {bigItems}
              </Transitions>
            </div>
          </Col>
        </Row>
      </div>
      <Row>
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
              } ${hasScroll ? "hasScroll" : ""}`}
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
      <Row>
        <Col
          xs={6}
          className="d-flex justify-content-end relative overflow-hidden"
          ref={containerResetRef}
        >
          <Transitions
            interact={
              countMaxSelected.true == props.options.confirmButton.maxSelection
            }
            options={resetButtonOptions}
            typeInteraction={resetButtonOptions.typeInteraction} //'oneClick', 'switch', 'hideElement'
          >
            <ResetButton
              onClick={() => handleReset()}
              className={
                props.options.resetButton.className
                  ? props.options.resetButton.className
                  : ""
              }
              content={props.options.resetButton.content}
            />
          </Transitions>
        </Col>
        <Col
          xs={6}
          className="d-flex justify-content-start relative overflow-hidden"
          ref={containerFinishRef}
        >
          <Transitions
            interact={
              countMaxSelected.true == props.options.confirmButton.maxSelection
            }
            options={finishButtonOptions}
            typeInteraction={finishButtonOptions.typeInteraction} //'oneClick', 'switch', 'hideElement'
          >
            <FinishButton
              onClick={() => handleFinish()}
              className={
                props.options.finishButton.className
                  ? props.options.finishButton.className
                  : ""
              }
              content={props.options.finishButton.content}
            />
          </Transitions>
        </Col>
      </Row>
    </Fragment>
  );
}

export default CarouselDoubleWithDrag;
