// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment, useEffect, useRef } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import FlexImgWithText from "components/images/flexImgWithText";
import Title from "components/texts/title";
import TextBlock from "components/texts/text_block";
import ButtonQuizz from "../buttonQuizz";

//Imagens

//Functions
import setBreakPoint from "globalFunctions/setBreakPoint";
import debounceTimeOut from "globalFunctions/debounceTimeOut";
import scrollTo from "globalFunctions/scrollTo";

function FeedBack(props) {
  const [load, setLoad] = useState(false);
  const [breakResponsive, setBreakResponsive] = useState(false);
  const [feedIsImgFull, setFeedIsImgFull] = useState(false);

  const feedBack = useRef(null);

  useEffect(() => {
    if (props.feedBackItems != "") {
      if (props.feedBackItems.images) {
        ajustBreakContentResponsive(props.feedBackItems.images.imgSide);
      }

      if (
        props.btnTryAgain &&
        props.typeFeed == "wrong" &&
        (props.numberTries >= 0 || props.numberTries == "infinite")
      ) {
        props.setShowButtonNext(false);
      }

      if (
        props.feedBackItems.images &&
        (props.feedBackItems.images.imgSide === "fullLeft" ||
          props.feedBackItems.images.imgSide === "fullRight" ||
          props.feedBackItems.images.imgSide === "fullBottom" ||
          props.feedBackItems.images.imgSide === "fullTop")
      ) {
        setFeedIsImgFull(true);
      } else {
        setFeedIsImgFull(false);
      }

      setLoad(true);
    }
  }, [props.feedBackItems, props.showFeed]);

  // atualiza no resize
  useEffect(() => {
    if (props.feedBackItems != "" && props.feedBackItems.images) {
      const debouncedHandleResize = debounceTimeOut(function handleResize() {
        ajustBreakContentResponsive(props.feedBackItems.images.imgSide);
      }, 500);

      window.addEventListener("resize", debouncedHandleResize);
      return () => {
        window.removeEventListener("resize", debouncedHandleResize);
      };
    }
  }, [window.innerWidth, props.feedBackItems]);

  useEffect(() => {
    if (props.scrollAnimated && load && props.showFeed) {
      scrollTo(feedBack, 120);
    }
  }, [load, props.showFeed]);

  function ajustBreakContentResponsive(imgSide) {
    //seta a classe de break, quando o feedBack fica na versao tablet/mobile
    if (window.innerWidth <= setBreakPoint(props.breakContent)) {
      setBreakResponsive(true);
    } else {
      setBreakResponsive(false);
    }
  }

  function handleTryAgain() {
    scrollTo(props.refTopoQuestion, 120);
    props.setShowFeed(false);
    props.setDisable(false);
    props.answers.forEach((answer, id) => {
      answer.inputClassName = "";
    });
    props.setCheckedInitial(props.setInitialCheckedArray(props.answers));
  }
  const feedTitle = props.showFeed && (
    <Title
      typeH="4"
      className={`feedTitle ${!props.showFeed ? "hideFeed" : ""}`}
      content={<Fragment>{"FEEDBACK"}</Fragment>}
    />
  );
  const feedBackItems =
    load &&
    (props.feedBackItems.images ? (
      <Fragment>
        {feedTitle}
        <div
          className={`relative bodyWithImg feedback-wrapper ${
            breakResponsive ? "break" : ""
          } ${
            props.feedBackItems.images.imgSide === "fullLeft"
              ? "fullLeft"
              : props.feedBackItems.images.imgSide === "left"
              ? "left"
              : props.feedBackItems.images.imgSide === "right"
              ? "right"
              : props.feedBackItems.images.imgSide === "fullRight"
              ? "fullRight"
              : props.feedBackItems.images.imgSide === "bottom"
              ? "bottom"
              : props.feedBackItems.images.imgSide === "top"
              ? " top"
              : props.feedBackItems.images.imgSide === "fullBottom"
              ? "fullBottom"
              : props.feedBackItems.images.imgSide === "fullTop"
              ? "fullTop"
              : ""
          }  ${props.typeFeed} ${!props.showFeed ? "hideFeed" : ""}
    `}
        >
          <FlexImgWithText
            rowClasses={`${props.feedBackItems.images.rowClasses}`}
            typeH={
              props.feedBackItems.title && props.feedBackItems.title.tagTitle
            }
            titleClassName={
              props.feedBackItems.title &&
              props.feedBackItems.title.titleClassName
            }
            title={
              props.feedBackItems.title &&
              props.feedBackItems.title.titleContent
            }
            textsBlock={
              props.feedBackItems.contents &&
              props.feedBackItems.contents.textBlocks
            }
            imgSide={props.feedBackItems.images.imgSide}
            imgUrl={props.feedBackItems.images.imgUrl}
            imgUrlBreak={props.feedBackItems.images.imgUrlBreak}
            imgClassName={props.feedBackItems.images.imgClassName}
            colXs={props.feedBackItems.images.colXs}
            colSm={props.feedBackItems.images.colSm}
            colMd={props.feedBackItems.images.colMd}
            colLg={props.feedBackItems.images.colLg}
            colXl={props.feedBackItems.images.colXl}
            colXXl={props.feedBackItems.images.colXXl}
            offsetSm={props.feedBackItems.images.offsetSm}
            offsetMd={props.feedBackItems.images.offsetMd}
            offsetLg={props.feedBackItems.images.offsetLg}
            offsetXl={props.feedBackItems.images.offsetXl}
            offsetXXl={props.feedBackItems.images.offsetXXl}
            isFeedBack={true}
            feedIsImgFull={feedIsImgFull}
            showFeed={props.showFeed}
            btnTryAgain={props.btnTryAgain && props.btnTryAgain}
            numberTries={props.numberTries && props.numberTries}
            typeFeed={props.typeFeed}
            handleTryAgain={handleTryAgain}
            breakContent={props.breakContent} // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
          />
        </div>
      </Fragment>
    ) : (
      <Fragment>
        {feedTitle}
        <div
          className={`feedback-wrapper ${props.typeFeed} ${
            !props.showFeed ? "hideFeed" : ""
          }`}
        >
          <div className="p-notImg">
            {props.feedBackItems.title && (
              <Title
                typeH={props.feedBackItems.title.tagTitle}
                className={props.feedBackItems.title.titleClassName}
                content={
                  <Fragment>{props.feedBackItems.title.titleContent}</Fragment>
                }
              />
            )}

            {props.feedBackItems.contents && (
              <TextBlock textsBlock={props.feedBackItems.contents.textBlocks} />
            )}

            {props.btnTryAgain &&
              props.typeFeed == "wrong" &&
              (props.numberTries >= 0 || props.numberTries == "infinite") && (
                <Fragment>
                  <ButtonQuizz
                    type={"tenteNovamente"}
                    className={props.btnTryAgain.className}
                    btnFunction={handleTryAgain}
                    showButton={true}
                    content={props.btnTryAgain.content}
                  />
                  {props.numberTries != "infinite" && (
                    <small className="feedTriesText">{`Você possui mais ${
                      props.numberTries + 1
                    } tentativas`}</small>
                  )}
                </Fragment>
              )}
          </div>
        </div>
      </Fragment>
    ));
  if (!load) {
    return <Fragment> </Fragment>;
  } else {
    return <div ref={feedBack}>{feedBackItems}</div>;
  }
}

export default FeedBack;
