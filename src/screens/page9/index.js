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
import Fase6 from "./customComponents/fase6";
import Fase7 from "./customComponents/fase7";
import Fase8 from "./customComponents/fase8";
import Fase9 from "./customComponents/fase9";

function Page9() {
  const [temaCor, setTemaCor] = useState("custom"); //seta a cor do tema no body. Passar uma classe aqui caso queira iniciar com um tema

  const [overflow, setOverflow] = useState(false);
  const [caminho, setCaminho] = useState(0);
  const [caminhoData, setCaminhoData] = useState({});

  const [etapa1Wrong, setEtapa1Wrong] = useState(false);

  const [escolhidos, setEscolhidos] = useState([]);
  const [etapa, setEtapa] = useState(0);
  const [feedEtapa1, setFeedEtapa1] = useState(false);
  const [feedEtapa2, setFeedEtapa2] = useState(false);

  const [fase1ControlTransition, setFase1ControlTransition] = useState(false);
  const [fimFase1, setFimFase1] = useState(false);

  const [fase2ControlTransition, setFase2ControlTransition] = useState(false);
  const [fimFase2, setFimFase2] = useState(false);

  const [fase3ControlTransition, setFase3ControlTransition] = useState(false);
  const [fimFase3, setFimFase3] = useState(false);

  const [fase4ControlTransition, setFase4ControlTransition] = useState(false);
  const [fimFase4, setFimFase4] = useState(false);
  const [endVideoFase4, setEndVideoFase4] = useState(false);

  const [fase5ControlTransition, setFase5ControlTransition] = useState(false);
  const [fimFase5, setFimFase5] = useState(false);

  const [fase6ControlTransition, setFase6ControlTransition] = useState(false);
  const [fimFase6, setFimFase6] = useState(false);

  const [fase7ControlTransition, setFase7ControlTransition] = useState(false);
  const [fimFase7, setFimFase7] = useState(false);
  const [endVideoFase7, setEndVideoFase7] = useState(false);

  const [fase8ControlTransition, setFase8ControlTransition] = useState(false);
  const [fimFase8, setFimFase8] = useState(false);

  const [fase9ControlTransition, setFase9ControlTransition] = useState(false);
  const [fimFase9, setFimFase9] = useState(false);

  useEffect(() => {
    if (temaCor) {
      document.body.classList.value.search("ios") !== -1
        ? (document.body.className = "ios")
        : (document.body.className = "");

      document.body.classList.add(temaCor);
    }
  }, [temaCor]);

  useEffect(() => {
    if (etapa1Wrong) {
      setFimFase1(false);
      setFimFase2(false);
      setFimFase3(false);
      setFimFase4(false);
      setFimFase5(false);
      setFimFase6(false);
      setFimFase7(false);
      setFase1ControlTransition(false);
      setFase2ControlTransition(false);
      setFase3ControlTransition(false);
      setFase4ControlTransition(false);
      setFase5ControlTransition(false);
      setFase6ControlTransition(false);
      setFase7ControlTransition(false);
      setEndVideoFase4(false);
      setEndVideoFase7(false);
      setEscolhidos([]);
      setEtapa(0);
      setFeedEtapa1(false);
      setFase2ControlTransition((prev) => !prev);
      setEtapa1Wrong(false);
    }
  }, [etapa1Wrong]);

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
    if (fimFase5) {
      setFase6ControlTransition((prev) => !prev);
    }
  }, [fimFase5]);

  useEffect(() => {
    if (fimFase6) {
      setFase7ControlTransition((prev) => !prev);
    }
  }, [fimFase6]);

  useEffect(() => {
    if (fimFase7) {
      setFase8ControlTransition((prev) => !prev);
    }
  }, [fimFase7]);

  useEffect(() => {
    if (fimFase8) {
      setFase9ControlTransition((prev) => !prev);
    }
  }, [fimFase8]);

  useEffect(() => {
    setOverflow(overflow);
  }, [overflow]);

  useEffect(() => {
    setEscolhidos(escolhidos);
  }, [escolhidos]);

  useEffect(() => {
    setCaminhoData(caminhoData);
  }, [caminhoData]);

  useEffect(() => {
    setFeedEtapa1(feedEtapa1);
  }, [feedEtapa1]);

  useEffect(() => {
    setFeedEtapa2(feedEtapa2);
  }, [feedEtapa2]);

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
          setEscolhidos={setEscolhidos}
        />
        <Fase3
          faseControlTransition={fase3ControlTransition}
          setControlTransition={setFase3ControlTransition}
          setIsFinished={setFimFase3}
          setOverflow={setOverflow}
          setEscolhidos={setEscolhidos}
        />
        <Fase4
          faseControlTransition={fase4ControlTransition}
          setControlTransition={setFase4ControlTransition}
          setIsFinished={setFimFase4}
          setEndVideo={setEndVideoFase4}
          endVideo={endVideoFase4}
          setOverflow={setOverflow}
          caminho={caminho}
          setCaminhoData={setCaminhoData}
          actualVideo={0}
        />
        <Fase5
          faseControlTransition={fase5ControlTransition}
          setControlTransition={setFase5ControlTransition}
          setIsFinished={setFimFase5}
          setOverflow={setOverflow}
          escolhidos={escolhidos}
          caminhoData={caminhoData}
          etapa={etapa}
          setEtapa={setEtapa}
          setFeed={setFeedEtapa1}
        />
        <Fase6
          faseControlTransition={fase6ControlTransition}
          setControlTransition={setFase6ControlTransition}
          setIsFinished={setFimFase6}
          setOverflow={setOverflow}
          feedEtapa={feedEtapa1}
          etapa={etapa}
          caminhoData={caminhoData}
        />
        <Fase7
          faseControlTransition={fase7ControlTransition}
          setControlTransition={setFase7ControlTransition}
          setIsFinished={setFimFase7}
          setEndVideo={setEndVideoFase7}
          endVideo={endVideoFase7}
          setOverflow={setOverflow}
          feedEtapa={feedEtapa1}
          setCaminhoData={setCaminhoData}
          caminhoData={caminhoData}
          actualVideo={1}
          setEtapaWrong={setEtapa1Wrong}
        />
        <Fase8
          faseControlTransition={fase8ControlTransition}
          setControlTransition={setFase8ControlTransition}
          setIsFinished={setFimFase8}
          setOverflow={setOverflow}
          escolhidos={escolhidos}
          caminhoData={caminhoData}
          etapa={etapa}
          setEtapa={setEtapa}
          setFeed={setFeedEtapa2}
        />
        <Fase9
          faseControlTransition={fase9ControlTransition}
          setControlTransition={setFase9ControlTransition}
          setIsFinished={setFimFase9}
          setOverflow={setOverflow}
          feedEtapa={feedEtapa2}
          etapa={etapa}
          caminhoData={caminhoData}
        />
      </Wrapper>
    </LoadPage>
  );
}

export default Page9;
