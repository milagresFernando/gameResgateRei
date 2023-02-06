// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment, useEffect, useRef, useContext } from "react";

// Components
import { Container, Row, Col, Form } from "react-bootstrap";
import Check from "components/forms/check";
import FlexImgWithText from "components/images/flexImgWithText";
import Title from "components/texts/title";
import FeedBack from "components/quizz/feedBack";
import ButtonQuizz from "components/quizz/buttonQuizz";
import CounterBar from "components/quizz/counterBar";
import GlobalState from "contexts/globalState";
import { withScorm } from "react-scorm-provider";

// Functions
import addZero from "globalFunctions/generalCalcs/addZero";
import setBreakPoint from "globalFunctions/setBreakPoint";
import randomArray from "globalFunctions/generalCalcs/randomArray";
import debounceTimeOut from "globalFunctions/debounceTimeOut";
import scrollTo from "globalFunctions/scrollTo";

function TreeOneAnswerFixed(props) {
  const [load, setLoad] = useState(false);
  const [actualQuestion, setActualQuestion] = useState({});
  const [questions, setQuestions] = useState([]);
  const [questionCounter, setQuestionCounter] = useState(1);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [titleQuestion, setTitleQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [checked, setChecked] = useState([]);
  const [disable, setDisable] = useState(false);
  const [showFeed, setShowFeed] = useState(false);
  const [showFinalFeed, setShowFinalFeed] = useState(false);
  const [typeFeed, setTypeFeed] = useState("");
  const [feedBackItems, setFeedBackItems] = useState("");
  const [finalFeedBackItems, setFinalFeedBackItems] = useState("");
  const [breakResponsiveQuestion, setBreakResponsiveQuestion] = useState(false);
  const [breakResponsiveAnswer, setBreakResponsiveAnswer] = useState(false);
  const [questionIsImgFull, setQuestionIsImgFull] = useState(false);
  const [answerIsImgFull, setAnswerIsImgFull] = useState(false);
  const [showButtonConfirm, setShowButtonConfirm] = useState(false);
  const [showButtonNext, setShowButtonNext] = useState(false);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [checkedInitial, setCheckedInitial] = useState([]);
  const [treeInfoNumber, setTreeInfoNumber] = useState(1);
  const [treeQuestion, setTreeQuestion] = useState(0);

  const [ending, setEnding] = useState([]);

  const { liberaScorm, setLiberaScorm } = useContext(GlobalState);

  const topoQuestion = useRef(null);

  const isScorm = props.sco.apiConnected;
  //executa quando a páginna é carregada.verifica se possui limite de questoes, se sim, busca as questões de forma aleatória, senão, só preenche o state de questões

  useEffect(() => {
    setQuestions(props.questions);
  }, []);
  //carrega as questoes toda vez que entra uma nova
  useEffect(() => {
    if (questions != "") {
      setActualQuestion(questions[treeQuestion]);
      setQuestionNumber(addZero(questionCounter));

      if (Object.keys(actualQuestion).length !== 0) {
        //randomiza as alternativas
        if (props.options.randomAnswers) {
          actualQuestion.answers = randomArray(actualQuestion.answers);
        }
        setTitleQuestion(actualQuestion.title);

        setAnswers(
          actualQuestion.answers.map((answer, id) => {
            return {
              label: answer.text,
              value: id,
              correct: answer.correct,
              feedIco: "",
              inputClassName: "",
              labelClassName: "mb-0",
            };
          })
        );
      }

      //verifica se a proxima pergunta possui imagem full
      if (
        actualQuestion.questionImages &&
        (actualQuestion.questionImages.imgSide === "fullLeft" ||
          actualQuestion.questionImages.imgSide === "fullRight" ||
          actualQuestion.questionImages.imgSide === "fullBottom" ||
          actualQuestion.questionImages.imgSide === "fullTop")
      ) {
        setQuestionIsImgFull(true);
      } else {
        setQuestionIsImgFull(false);
      }
      //verifica se as proximas alternativas possuem imagem full
      if (
        actualQuestion.answersImages &&
        (actualQuestion.answersImages.imgSide === "fullLeft" ||
          actualQuestion.answersImages.imgSide === "fullRight" ||
          actualQuestion.answersImages.imgSide === "fullBottom" ||
          actualQuestion.answersImages.imgSide === "fullTop")
      ) {
        setAnswerIsImgFull(true);
      } else {
        setAnswerIsImgFull(false);
      }
    }
  }, [actualQuestion, questions, treeQuestion, questionCounter]);

  //controla os estados de check das alternativas
  useEffect(() => {
    if (answers != "") {
      if (!showFeed) {
        setCheckedInitial(setInitialCheckedArray(answers));
      }
      if (actualQuestion.answersImages) {
        ajustBreakContentResponsive(
          actualQuestion.answersImages.imgSide,
          "answer"
        );
      }
      if (actualQuestion.questionImages) {
        ajustBreakContentResponsive(
          actualQuestion.questionImages.imgSide,
          "question"
        );
      }
    }
  }, [answers]);

  //seta o estado inicial dos checks
  useEffect(() => {
    if (checkedInitial != "") {
      setLoad(true);
      setChecked(checkedInitial);
    }
  }, [checkedInitial]);

  // atualiza no resize
  useEffect(() => {
    if (actualQuestion.answersImages) {
      const debouncedHandleResize = debounceTimeOut(function handleResize() {
        ajustBreakContentResponsive(
          actualQuestion.answersImages.imgSide,
          "answer"
        );
      }, 500);

      window.addEventListener("resize", debouncedHandleResize);
      return () => {
        window.removeEventListener("resize", debouncedHandleResize);
      };
    }
  }, [window.innerWidth, answers]);

  // atualiza no resize
  useEffect(() => {
    if (actualQuestion.questionImages) {
      const debouncedHandleResize = debounceTimeOut(function handleResize() {
        ajustBreakContentResponsive(
          actualQuestion.questionImages.imgSide,
          "question"
        );
      }, 500);

      window.addEventListener("resize", debouncedHandleResize);
      return () => {
        window.removeEventListener("resize", debouncedHandleResize);
      };
    }
  }, [window.innerWidth, answers]);

  // mostra o botao de confirmar caso o usuario clique em alguma alternativa
  useEffect(() => {
    checked.find((selectedAnswer) => selectedAnswer == true)
      ? setShowButtonConfirm(true)
      : setShowButtonConfirm(false);
  }, [checked]);

  function verificaGotoEnding() {
    if (questions[treeQuestion].treeInfo?.goToEnding != undefined) {
      return questions[treeQuestion].treeInfo.goToEnding.map((goToEnding) => {
        if (typeFeed == goToEnding.typeFeed) {
          return { goToEnding: true, feedId: goToEnding.feedId };
        } else {
          return { goToEnding: false, feedId: "" };
        }
      });
    } else {
      return [{ goToEnding: false, feedId: "" }];
    }
  }
  // verifica se a ultima pergunta respondida não possui mais caminhos, caso sim, ativa o encerramento
  useEffect(() => {
    if (questions != "") {
      if (showFeed) {
        if (
          questions[treeQuestion].treeInfo?.goToQuestion == undefined ||
          (questions[treeQuestion].treeInfo.isEndQuestion &&
            (ending[0]?.goToEnding || ending[1]?.goToEnding))
        ) {
          setIsLastQuestion(true);
        }
      }
    }
  }, [typeFeed, treeQuestion, showFeed, ending]);

  //verifica e seta o objeto com os endings toda vez que aparece o feed
  useEffect(() => {
    if (questions != "") {
      if (showFeed) {
        setEnding(verificaGotoEnding());
      }
    }
  }, [showFeed]);

  //se for a ultima questao, mostra o feed final apos confirmar
  useEffect(() => {
    if (isLastQuestion) {
      setShowFinalFeed(true);
    }
  }, [isLastQuestion]);

  //controla a visibilidade do botao next
  useEffect(() => {
    if (!isLastQuestion && showFeed && !showFinalFeed) {
      setShowButtonNext(true);
    } else {
      setShowButtonNext(false);
    }
  }, [isLastQuestion, showFinalFeed, showFeed]);

  //captura o numero da proxima questao
  useEffect(() => {
    if (typeFeed != "") {
      if (questions[treeQuestion].treeInfo?.goToQuestion != undefined) {
        typeFeed == "correct" &&
          setTreeInfoNumber(
            questions[treeQuestion].treeInfo.goToQuestion.correct
          );

        typeFeed == "wrong" &&
          setTreeInfoNumber(
            questions[treeQuestion].treeInfo.goToQuestion.wrong
          );
        typeFeed == "neutral" &&
          setTreeInfoNumber(
            questions[treeQuestion].treeInfo.goToQuestion.neutral
          );
      }
    }
  }, [typeFeed, treeQuestion, isLastQuestion]);

  //calcula qual é o id da proxima questao
  function nextTreeInfoNumber(allQuestions) {
    if (typeFeed == "correct") {
      return (
        allQuestions.treeInfo.questionId ==
        questions[treeQuestion].treeInfo.goToQuestion.correct
      );
    }
    if (typeFeed == "wrong") {
      return (
        allQuestions.treeInfo.questionId ==
        questions[treeQuestion].treeInfo.goToQuestion.wrong
      );
    }
    if (typeFeed == "neutral") {
      return (
        allQuestions.treeInfo.questionId ==
        questions[treeQuestion].treeInfo.goToQuestion.neutral
      );
    }
  }
  //seta o feed final e ajusta os contadores desse feed
  useEffect(() => {
    if (props.finalFeed) {
      if (showFinalFeed) {
        ending.forEach((goToEnding) => {
          if (goToEnding.feedId != "") {
            setFinalFeedBackItems(props.finalFeed[goToEnding.feedId - 1]);
          }
        });

        if (typeFeed != "wrong") {
          setLiberaScorm(false);
        }
      } else {
        props.sco.setStatus("incomplete");
      }
    }
  }, [finalFeedBackItems, showFinalFeed, typeFeed, ending]);

  function setInitialCheckedArray(checkedArray) {
    return checkedArray.map(() => false);
  }

  function ajustBreakContentResponsive(imgSide, type) {
    //seta a classe de break, quando o a question ou answer fica na versao tablet/mobile
    if (window.innerWidth <= setBreakPoint(props.options.breakContent)) {
      if (type == "answer") {
        setBreakResponsiveAnswer(true);
      }
      if (type == "question") {
        setBreakResponsiveQuestion(true);
      }
    } else if (type == "answer") {
      setBreakResponsiveAnswer(false);
    } else if (type == "question") {
      setBreakResponsiveQuestion(false);
    }
  }

  function validateAnswer(id, cloneAnswers, answered) {
    if (id == checked.indexOf(true)) {
      cloneAnswers[id].inputClassName = "selected";

      setTypeFeed(answered);
      const feedBack = actualQuestion.feedbacks[answered];

      setFeedBackItems(feedBack);
    }
  }

  function handleConfirm() {
    let cloneAnswers = [...answers];

    answers.forEach((answer, id) => {
      if (answer.correct == "correct") {
        cloneAnswers[id].feedIco = "iconCorrect";
        validateAnswer(id, cloneAnswers, answer.correct);
      }
      if (answer.correct == "neutral") {
        validateAnswer(id, cloneAnswers, answer.correct);
        cloneAnswers[id].feedIco = "iconNeutral";
      }
      if (answer.correct == "wrong") {
        validateAnswer(id, cloneAnswers, answer.correct);
        cloneAnswers[id].feedIco = "iconIncorrect";
      }
    });

    setShowFeed(true);
    setDisable(true);
    setAnswers(cloneAnswers);
    setShowButtonConfirm(false);
  }
  function handleNext() {
    setShowFeed(false);
    setDisable(false);
    setShowButtonNext(false);

    setQuestionCounter(questionCounter + 1);

    setTreeQuestion(questions.findIndex(nextTreeInfoNumber));

    setCheckedInitial(setInitialCheckedArray(answers));
    props.options.scrollAnimated && scrollTo(topoQuestion, 120);
  }

  const questionTexts = (
    <div className="questionWrapper" key={"questionWrapper"} ref={topoQuestion}>
      <Row className="justify-content-center">
        <Col
          xs="12"
          className={`${
            props.options.questionNumberPreText
              ? "withPreText"
              : "withoutPreText"
          } questionNumber`}
        >
          <Title
            typeH="3"
            className=""
            content={
              <Fragment>{`${
                props.options.questionNumberPreText
                  ? props.options.questionNumberPreText
                  : ""
              } ${questionNumber}`}</Fragment>
            }
          />
        </Col>

        <Col
          className={`${
            props.options.questionNumberPreText
              ? "withPreText"
              : "withoutPreText"
          } question`}
        >
          {titleQuestion && (
            <Title
              typeH={titleQuestion.tagTitle}
              className={titleQuestion.titleClassName}
              content={<Fragment>{titleQuestion.titleContent}</Fragment>}
            />
          )}
        </Col>
      </Row>
    </div>
  );
  const questionItems =
    load &&
    (actualQuestion.questionImages ? (
      <div
        className={`relative bodyWithImg questionWrapper ${
          breakResponsiveQuestion ? "break" : ""
        } ${
          actualQuestion.questionImages.imgSide === "fullLeft"
            ? "fullLeft"
            : actualQuestion.questionImages.imgSide === "left"
            ? "left"
            : actualQuestion.questionImages.imgSide === "right"
            ? "right"
            : actualQuestion.questionImages.imgSide === "fullRight"
            ? "fullRight"
            : actualQuestion.questionImages.imgSide === "bottom"
            ? "bottom"
            : actualQuestion.questionImages.imgSide === "top"
            ? " top"
            : actualQuestion.questionImages.imgSide === "fullBottom"
            ? "fullBottom"
            : actualQuestion.questionImages.imgSide === "fullTop"
            ? "fullTop"
            : ""
        } 
`}
      >
        <FlexImgWithText
          rowClasses={`${actualQuestion.questionImages.rowClasses}`}
          questionTexts={questionTexts}
          imgSide={actualQuestion.questionImages.imgSide}
          imgUrl={actualQuestion.questionImages.imgUrl}
          imgUrlBreak={actualQuestion.questionImages.imgUrlBreak}
          imgClassName={actualQuestion.questionImages.imgClassName}
          questionIsImgFull={questionIsImgFull}
          colXs={actualQuestion.questionImages.colXs}
          colSm={actualQuestion.questionImages.colSm}
          colMd={actualQuestion.questionImages.colMd}
          colLg={actualQuestion.questionImages.colLg}
          colXl={actualQuestion.questionImages.colXl}
          colXXl={actualQuestion.questionImages.colXXl}
          isQuizzOneAnswer={true}
          questionCounter={questionCounter}
          breakContent={props.options.breakContent} // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
        />
      </div>
    ) : (
      [questionTexts]
    ));

  const formGroup = (
    <div className="answersWrapper notImg" key={"answersWrapper"}>
      <Form.Group className={`${disable ? "defaultCursor" : ""}  formAnswers `}>
        <Check
          className={`${
            props.options.answersType
              ? props.options.answersType
              : "upper-roman"
          } ${
            disable ? "defaultCursor" : ""
          } radio-option answers defaultCursor`}
          type="radioCustom"
          iconFeed={!props.options.btnTryAgain && props.options.iconFeed}
          checkItems={answers}
          setChecked={setChecked}
          checked={checked}
          disable={disable}
          questionCounter={questionCounter}
          checkedInitial={checkedInitial}
        />
      </Form.Group>
    </div>
  );

  const quizzItems =
    load &&
    (actualQuestion.answersImages ? (
      <div
        className={`relative bodyWithImg answersWrapper ${
          breakResponsiveAnswer ? "break" : ""
        } ${
          actualQuestion.answersImages.imgSide === "fullLeft"
            ? "fullLeft"
            : actualQuestion.answersImages.imgSide === "left"
            ? "left"
            : actualQuestion.answersImages.imgSide === "right"
            ? "right"
            : actualQuestion.answersImages.imgSide === "fullRight"
            ? "fullRight"
            : actualQuestion.answersImages.imgSide === "bottom"
            ? "bottom"
            : actualQuestion.answersImages.imgSide === "top"
            ? " top"
            : actualQuestion.answersImages.imgSide === "fullBottom"
            ? "fullBottom"
            : actualQuestion.answersImages.imgSide === "fullTop"
            ? "fullTop"
            : ""
        } 
    `}
      >
        <FlexImgWithText
          rowClasses={`${actualQuestion.answersImages.rowClasses}`}
          formGroupOneAnswer={formGroup}
          imgSide={actualQuestion.answersImages.imgSide}
          imgUrl={actualQuestion.answersImages.imgUrl}
          imgUrlBreak={actualQuestion.answersImages.imgUrlBreak}
          imgClassName={actualQuestion.answersImages.imgClassName}
          answerIsImgFull={answerIsImgFull}
          colXs={actualQuestion.answersImages.colXs}
          colSm={actualQuestion.answersImages.colSm}
          colMd={actualQuestion.answersImages.colMd}
          colLg={actualQuestion.answersImages.colLg}
          colXl={actualQuestion.answersImages.colXl}
          colXXl={actualQuestion.answersImages.colXXl}
          offsetSm={actualQuestion.answersImages.offsetSm}
          offsetMd={actualQuestion.answersImages.offsetMd}
          offsetLg={actualQuestion.answersImages.offsetLg}
          offsetXl={actualQuestion.answersImages.offsetXl}
          offsetXXl={actualQuestion.answersImages.offsetXXl}
          isQuizzOneAnswer={true}
          questionCounter={questionCounter}
          breakContent={props.options.breakContent} // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
        />
      </div>
    ) : (
      [formGroup]
    ));

  if (!load) {
    return <Fragment></Fragment>;
  } else {
    return (
      <Fragment>
        <div className="treeOneAnswerFixed">
          {questionItems}
          <Row className="justify-content-center">
            <Col>{quizzItems}</Col>
          </Row>

          <Row className="justify-content-center ">
            <Col>
              <ButtonQuizz
                className="mb-5"
                btnFunction={handleConfirm}
                showButton={showButtonConfirm}
                content="Confirmar"
              />
            </Col>
          </Row>
          <Row className="justify-content-center my-5">
            <Col>
              <FeedBack
                refTopoQuestion={topoQuestion}
                typeFeed={typeFeed}
                showFeed={showFeed}
                feedBackItems={feedBackItems}
                breakContent={props.options.breakContent}
                setShowFeed={setShowFeed}
                setDisable={setDisable}
                setShowButtonNext={setShowButtonNext}
                setCheckedInitial={setCheckedInitial}
                setInitialCheckedArray={setInitialCheckedArray}
                answers={answers}
                scrollAnimated={
                  props.options.scrollAnimated && props.options.scrollAnimated
                }
              />
            </Col>
          </Row>

          <Row className="justify-content-center ">
            <Col>
              <ButtonQuizz
                className=""
                btnFunction={handleNext}
                showButton={showButtonNext}
                content="Próxima"
              />
            </Col>
          </Row>

          <FeedBack
            typeFeed={"finalFeed"}
            showFeed={showFinalFeed}
            feedBackItems={finalFeedBackItems}
            breakContent={props.options.breakContent}
            showFinalFeed={showFinalFeed}
            isLastQuestion={isLastQuestion}
            totalQuestions={questions.length}
          />
        </div>
      </Fragment>
    );
  }
}

export default withScorm()(TreeOneAnswerFixed);
