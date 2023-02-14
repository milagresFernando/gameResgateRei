// React Elements/Hooks
import { Fragment } from "react/cjs/react.production.min";
import { useState, useEffect } from "react";

// Components
import Header from "components/header";
import Wrapper from "components/wrapper";

import ScrollPage from "components/scrollPage";
import LoadPage from "components/loadPage";
import Fase2 from "./customComponents/fase2";
import Fase1 from "./customComponents/fase1";
import Fase3 from "./customComponents/fase3";
import Fase4 from "./customComponents/fase4";
import Fase5 from "./customComponents/fase5";

function Page9() {
  const [overflow, setOverflow] = useState(false);

  const [temaCor, setTemaCor] = useState("custom"); //seta a cor do tema no body. Passar uma classe aqui caso queira iniciar com um tema
  const [fase1ControlTransition, setFase1ControlTransition] = useState(false);
  const [fimFase1, setFimFase1] = useState(false);
  const [caminho, setCaminho] = useState(0);

  const [fase2ControlTransition, setFase2ControlTransition] = useState(false);
  const [fimFase2, setFimFase2] = useState(false);

  const [fase3ControlTransition, setFase3ControlTransition] = useState(false);
  const [fimFase3, setFimFase3] = useState(false);

  const [fase4ControlTransition, setFase4ControlTransition] = useState(false);
  const [fimFase4, setFimFase4] = useState(false);

  const [fase5ControlTransition, setFase5ControlTransition] = useState(false);
  const [fimFase5, setFimFase5] = useState(false);

  useEffect(() => {
    if (temaCor) {
      document.body.classList.value.search("ios") !== -1
        ? (document.body.className = "ios")
        : (document.body.className = "");

      document.body.classList.add(temaCor);
    }
  }, [temaCor]);

  useEffect(() => {
    if (fimFase1) {
      setFase2ControlTransition((prev) => !prev);
    }
  }, [fimFase1]);

  useEffect(() => {
    if (fimFase2) {
      setFase3ControlTransition((prev) => !prev);
    }
  }, [fimFase2]);

  useEffect(() => {
    if (fimFase3) {
      setFase4ControlTransition((prev) => !prev);
    }
  }, [fimFase3]);

  useEffect(() => {
    if (fimFase4) {
      setFase5ControlTransition((prev) => !prev);
    }
  }, [fimFase4]);

  useEffect(() => {
    setOverflow(overflow);
  }, [overflow]);

  console.log(overflow);

  return (
    <LoadPage>
      <Wrapper className={`${overflow ? "overflow" : "overflowX"} relative`}>
        <Fase1
          faseControlTransition={fase1ControlTransition}
          setControlTransition={setFase1ControlTransition}
          setIsFinished={setFimFase1}
          setCaminho={setCaminho}
          setOverflow={setOverflow}
        />
        <Fase2
          faseControlTransition={fase2ControlTransition}
          setControlTransition={setFase2ControlTransition}
          setIsFinished={setFimFase2}
          setOverflow={setOverflow}
        />
        <Fase3
          faseControlTransition={fase3ControlTransition}
          setControlTransition={setFase3ControlTransition}
          setIsFinished={setFimFase3}
          setOverflow={setOverflow}
        />
        <Fase4
          faseControlTransition={fase4ControlTransition}
          setControlTransition={setFase4ControlTransition}
          setIsFinished={setFimFase4}
          setOverflow={setOverflow}
          caminho={caminho}
          actualVideo={0}
        />
        <Fase5
          faseControlTransition={fase5ControlTransition}
          setControlTransition={setFase5ControlTransition}
          setIsFinished={setFimFase5}
          setOverflow={setOverflow}
        />
      </Wrapper>
    </LoadPage>
  );
}

export default Page9;
