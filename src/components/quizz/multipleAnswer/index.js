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
import setScormScore, { CalcScormScore } from "globalFunctions/setScormScore";

function MultipleAnswer(props) {
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
  const [correctCounter, setCorrectCounter] = useState(0);
  const [percentageCounter, setPercentageCounter] = useState(0);
  const [scoreCounter, setScoreCounter] = useState(0);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [compareAnswers, setCompareAnswers] = useState([]);
  const [checkedInitial, setCheckedInitial] = useState([]);
  const { liberaScorm, setLiberaScorm } = useContext(GlobalState);

  const initNumberTries =
    props.options.btnTryAgain &&
    props.options.btnTryAgain.numberTries != "infinite"
      ? props.options.btnTryAgain.numberTries
      : "infinite";

  const [numberTries, setNumberTries] = useState(initNumberTries);
  const topoQuestion = useRef(null);

  const isScorm = props.sco.apiConnected;
  //executa quando a páginna é carregada.verifica se possui limite de questoes, se sim, busca as questões de forma aleatória, senão, só preenche o state de questões

  //executa quando a páginna é carregada.verifica se possui limite de questoes, se sim, busca as questões de forma aleatória, senão, só preenche o state de questões
  useEffect(() => {
    if (props.options.maxQuestions) {
      const numberQuestions = Array(props.options.maxQuestions).fill(0);
      const cloneQuestions = randomArray(props.questions);
      const questionsLimited = numberQuestions.map((question, id) => {
        return cloneQuestions[id];
      });
      setQuestions(questionsLimited);
    } else {
      setQuestions(props.questions);
    }
  }, []);
  //carrega as questoes toda vez que entra uma nova
  useEffect(() => {
    if (questions != "") {
      //randomiza as perguntas
      if (props.options.randomQuestions) {
        setQuestions(randomArray(questions));
      }
      setActualQuestion(questions[questionCounter - 1]);
      setQuestionNumber(addZero(questionCounter));

      if (Object.keys(actualQuestion).length !== 0) {
        //randomiza as alternativas
        const initiArrayAnswers = Array(actualQuestion.answers.length).fill(
          "wrong"
        );
        setCompareAnswers(initiArrayAnswers);

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

      setPercentageCounter(
        Math.floor((questionCounter / questions.length) * 100)
      );
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
      setNumberTries(initNumberTries);
    }
  }, [questionCounter, actualQuestion, questions]);

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

  useEffect(() => {
    if (questionCounter == questions.length) {
      setIsLastQuestion(true);
    }
  }, [questions, questionCounter]);

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

  //conta os acertos e converte para o formato de 0 a 100
  CalcScormScore(questions, setScoreCounter, correctCounter);

  //seta o feed final e ajusta os contadores desse feed
  useEffect(() => {
    if (props.finalFeed) {
      if (showFinalFeed) {
        //envia as notas e status para o scorm
        setScormScore(isScorm, props.sco, props.options.scorm, scoreCounter);
        if (props.setCorrectCounter && props.setTotalQuestions) {
          props.setCorrectCounter(addZero(correctCounter));
          props.setTotalQuestions(addZero(questions.length));
        }

        if (props.finalFeed[0].type == "components") {
          setFinalFeedBackItems(props.finalFeed[1]);
        } else {
          setFinalFeedBackItems(props.finalFeed[0]);
        }
        if (typeFeed != "wrong") {
          setLiberaScorm(false);
        }
      }
    }
  }, [finalFeedBackItems, showFinalFeed, typeFeed]);

  function validateAnswer(id, cloneAnswers, answered) {
    if (checked[id] == true) {
      compareAnswers[id] = "correct";
      cloneAnswers[id].inputClassName = "selected";
    }
  }

  function handleConfirm() {
    let cloneAnswers = [...answers];

    answers.forEach((answer, id) => {
      if (answer.correct == "correct") {
        cloneAnswers[id].feedIco = "iconCorrect";
        validateAnswer(id, cloneAnswers, answer.correct);
      }

      if (answer.correct == "wrong") {
        validateAnswer(id, cloneAnswers, answer.correct);
        cloneAnswers[id].feedIco = "iconIncorrect";
      }
    });

    const isCorrect = compareAnswers.every((answered, id) => {
      if (answered != answers[id].correct) {
        return false;
      } else {
        return true;
      }
    });

    let feedBack = "";
    if (isCorrect) {
      setCorrectCounter(correctCounter + 1);
      setTypeFeed("correct");
      feedBack = actualQuestion.feedbacks["correct"];
    } else {
      numberTries != "infinite" && setNumberTries(numberTries - 1);
      setTypeFeed("wrong");
      feedBack = actualQuestion.feedbacks["wrong"];
    }
    setFeedBackItems(feedBack);
    setShowFeed(true);
    setDisable(true);
    setAnswers(cloneAnswers);
    setShowButtonConfirm(false);
    if (!isLastQuestion) {
      setShowButtonNext(true);
    } else {
      setShowFinalFeed(true);
    }
  }
  function handleNext() {
    setShowFeed(false);
    setDisable(false);
    setShowButtonNext(false);
    setQuestionCounter(questionCounter + 1);
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
      <Row>
        <Col>
          <Form.Group
            className={`${disable ? "defaultCursor" : ""}  formAnswers`}
          >
            <Check
              className={`${
                props.options.answersType
                  ? props.options.answersType
                  : "upper-roman"
              } ${
                disable ? "defaultCursor" : ""
              } check-option answers defaultCursor`}
              type="checkboxCustom"
              iconFeed={!props.options.btnTryAgain && props.options.iconFeed}
              checkItems={answers}
              setChecked={setChecked}
              checked={checked}
              disable={disable}
              questionCounter={questionCounter}
              checkedInitial={checkedInitial}
            />
          </Form.Group>
        </Col>
      </Row>
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

  const counterBar = props.options.counterBar && (
    <CounterBar
      counterBar={props.options.counterBar}
      correctCounter={correctCounter}
      totalQuestions={questions.length}
      questionNumber={questionNumber}
      percentageCounter={percentageCounter}
    />
  );

  if (!load) {
    return <Fragment></Fragment>;
  } else {
    return (
      <Fragment>
        <div className="multipleAnswer">
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
                btnTryAgain={
                  props.options.btnTryAgain && props.options.btnTryAgain
                }
                numberTries={numberTries}
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
          {(typeFeed != "wrong" || numberTries < 0) &&
            (props.finalFeed[0].type == "components" ? (
              finalFeedBackItems
            ) : (
              <FeedBack
                typeFeed={"finalFeed"}
                showFeed={showFinalFeed}
                feedBackItems={finalFeedBackItems}
                breakContent={props.options.breakContent}
                showFinalFeed={showFinalFeed}
                isLastQuestion={isLastQuestion}
                totalQuestions={questions.length}
              />
            ))}

          {counterBar}
        </div>
      </Fragment>
    );
  }
}

export default withScorm()(MultipleAnswer);
