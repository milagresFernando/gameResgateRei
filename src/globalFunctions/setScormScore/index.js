import { useEffect } from "react";

// seta as notas e status do Scorm de pontuacao
function setScormScore(isScorm, sco, optionsScorm, scoreCounter) {
  if (isScorm && optionsScorm) {
    sco.setScore({
      value: scoreCounter,
      max: 100,
      status: "complete",
    });

    if (scoreCounter >= optionsScorm.minScore) {
      sco.setStatus("passed");
    } else {
      sco.setStatus("failed");
    }
  }
}

//conta os acertos e converte para o formato de 0 a 100
export function CalcScormScore(questions, setScoreCounter, correctCounter) {
  //seta score para scorm
  useEffect(() => {
    if (questions != "") {
      setScoreCounter(Math.floor((correctCounter * 100) / questions.length));
    }
  }, [correctCounter, questions]);
}

export default setScormScore;
