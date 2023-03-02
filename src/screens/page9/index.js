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
import Fase10 from "./customComponents/fase10";
import Fase11 from "./customComponents/fase11";
import Fase12 from "./customComponents/fase12";
import Fase13 from "./customComponents/fase13";

function Page9() {
  const [temaCor, setTemaCor] = useState("custom"); //seta a cor do tema no body. Passar uma classe aqui caso queira iniciar com um tema

  const [overflow, setOverflow] = useState(false);
  const [caminho, setCaminho] = useState(0);
  const [caminhoData, setCaminhoData] = useState({});

  const [etapa1Wrong, setEtapa1Wrong] = useState(false);
  const [etapa2Wrong, setEtapa2Wrong] = useState(false);
  const [etapa3Wrong, setEtapa3Wrong] = useState(false);

  const [escolhidos, setEscolhidos] = useState([]);
  const [etapa, setEtapa] = useState(0);
  const [feedEtapa1, setFeedEtapa1] = useState(false);
  const [feedEtapa2, setFeedEtapa2] = useState(false);
  const [feedEtapa3, setFeedEtapa3] = useState(false);

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

  const [fase10ControlTransition, setFase10ControlTransition] = useState(false);
  const [fimFase10, setFimFase10] = useState(false);
  const [endVideoFase10, setEndVideoFase10] = useState(false);

  const [fase11ControlTransition, setFase11ControlTransition] = useState(false);
  const [fimFase11, setFimFase11] = useState(false);

  const [fase12ControlTransition, setFase12ControlTransition] = useState(false);
  const [fimFase12, setFimFase12] = useState(false);

  const [fase13ControlTransition, setFase13ControlTransition] = useState(false);
  const [fimFase13, setFimFase13] = useState(false);
  const [endVideoFase13, setEndVideoFase13] = useState(false);

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
      // setFase2ControlTransition(false);
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
      setFase2ControlTransition(true);
      setEtapa1Wrong(false);
    }
  }, [etapa1Wrong]);

  useEffect(() => {
    if (etapa2Wrong) {
      setFimFase5(false);
      setFimFase6(false);
      setFimFase7(false);
      setFimFase8(false);
      setFimFase9(false);
      setFimFase10(false);

      //setFase5ControlTransition(false);
      setFase6ControlTransition(false);
      setFase7ControlTransition(false);
      setFase8ControlTransition(false);
      setFase9ControlTransition(false);
      setFase10ControlTransition(false);

      setEndVideoFase7(false);
      setEndVideoFase10(false);

      setEtapa(1);
      setFeedEtapa2(false);
      setFase5ControlTransition(true);
      setEtapa2Wrong(false);
    }
  }, [etapa2Wrong]);
  console.log(fimFase11, fase11ControlTransition);
  useEffect(() => {
    if (etapa3Wrong) {
      setFimFase8(false);
      setFimFase9(false);
      setFimFase10(false);
      setFimFase11(false);
      setFimFase12(false);
      setFimFase13(false);

      // setFase8ControlTransition(false);
      setFase9ControlTransition(false);
      setFase10ControlTransition(false);
      setFase11ControlTransition(false);
      setFase12ControlTransition(false);
      setFase13ControlTransition(false);

      setEndVideoFase10(false);
      setEndVideoFase13(false);

      setEtapa(1);
      setFeedEtapa3(false);
      setFase8ControlTransition(true);
      setEtapa3Wrong(false);
    }
  }, [etapa3Wrong]);

  useEffect(() => {
    if (fimFase1) {
      setFase2ControlTransition(true);
    }
  }, [fimFase1]);

  useEffect(() => {
    if (fimFase2) {
      setFase3ControlTransition(true);
    }
  }, [fimFase2]);

  useEffect(() => {
    if (fimFase3) {
      setFase4ControlTransition(true);
    }
  }, [fimFase3]);

  useEffect(() => {
    if (fimFase4) {
      setFase5ControlTransition(true);
    }
  }, [fimFase4]);

  useEffect(() => {
    if (fimFase5) {
      setFase6ControlTransition(true);
    }
  }, [fimFase5]);

  useEffect(() => {
    if (fimFase6) {
      setFase7ControlTransition(true);
    }
  }, [fimFase6]);

  useEffect(() => {
    if (fimFase7) {
      setFase8ControlTransition(true);
    }
  }, [fimFase7]);

  useEffect(() => {
    if (fimFase8) {
      setFase9ControlTransition(true);
    }
  }, [fimFase8]);

  useEffect(() => {
    if (fimFase9) {
      setFase10ControlTransition(true);
    }
  }, [fimFase9]);

  useEffect(() => {
    if (fimFase10) {
      console.log("estranho", fimFase10);
      setFase11ControlTransition(true);
    }
  }, [fimFase10]);

  useEffect(() => {
    if (fimFase11) {
      setFase12ControlTransition(true);
    }
  }, [fimFase11]);

  useEffect(() => {
    if (fimFase12) {
      setFase13ControlTransition(true);
    }
  }, [fimFase12]);

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

  useEffect(() => {
    setFeedEtapa3(feedEtapa3);
  }, [feedEtapa3]);

  return (
    <LoadPage>
      <Wrapper className={`${overflow ? "overflow" : "overflowX"} relative`}>
        {/* Fase 1 - escolha dos caminhos */}
        <Fase1
          faseControlTransition={fase1ControlTransition}
          setControlTransition={setFase1ControlTransition}
          setIsFinished={setFimFase1}
          setCaminho={setCaminho}
          setOverflow={setOverflow}
        />
        {/* Fase 2 - escolha dos personagens */}
        <Fase2
          faseControlTransition={fase2ControlTransition}
          setControlTransition={setFase2ControlTransition}
          setIsFinished={setFimFase2}
          setOverflow={setOverflow}
          setEscolhidos={setEscolhidos}
        />
        {/* Fase 3 - escolha dos itens */}
        <Fase3
          faseControlTransition={fase3ControlTransition}
          setControlTransition={setFase3ControlTransition}
          setIsFinished={setFimFase3}
          setOverflow={setOverflow}
          setEscolhidos={setEscolhidos}
        />
        {/* Fase 4 - vídeo do desafio 1 */}
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
        {/* Fase 5 - seleção de um personagem e um item */}
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
        {/* Fase 6 - feedback */}
        <Fase6
          faseControlTransition={fase6ControlTransition}
          setControlTransition={setFase6ControlTransition}
          setIsFinished={setFimFase6}
          setOverflow={setOverflow}
          feedEtapa={feedEtapa1}
          etapa={etapa}
          caminhoData={caminhoData}
        />
        {/* Fase 7 - vídeo do desafio 2 */}
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
        {/* Fase 8 - seleção de um item  */}
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
        {/* Fase 9 - feedback */}
        <Fase9
          faseControlTransition={fase9ControlTransition}
          setControlTransition={setFase9ControlTransition}
          setIsFinished={setFimFase9}
          setOverflow={setOverflow}
          feedEtapa={feedEtapa2}
          etapa={etapa}
          caminhoData={caminhoData}
        />

        {/* Fase 10 - vídeo do desafio 3 */}
        <Fase10
          faseControlTransition={fase10ControlTransition}
          setControlTransition={setFase10ControlTransition}
          setIsFinished={setFimFase10}
          setEndVideo={setEndVideoFase10}
          endVideo={endVideoFase10}
          setOverflow={setOverflow}
          feedEtapa={feedEtapa2}
          setCaminhoData={setCaminhoData}
          caminhoData={caminhoData}
          actualVideo={2}
          setEtapaWrong={setEtapa2Wrong}
        />
        {/* Fase 11 - seleção de um personagem e um item */}
        <Fase11
          faseControlTransition={fase11ControlTransition}
          setControlTransition={setFase11ControlTransition}
          setIsFinished={setFimFase11}
          setOverflow={setOverflow}
          escolhidos={escolhidos}
          caminhoData={caminhoData}
          etapa={etapa}
          setEtapa={setEtapa}
          setFeed={setFeedEtapa3}
        />

        {/* Fase 12 - feedback */}
        <Fase12
          faseControlTransition={fase12ControlTransition}
          setControlTransition={setFase12ControlTransition}
          setIsFinished={setFimFase12}
          setOverflow={setOverflow}
          feedEtapa={feedEtapa3}
          etapa={etapa}
          caminhoData={caminhoData}
        />

        {/* Fase 10 - vídeo de finalização*/}
        <Fase13
          faseControlTransition={fase13ControlTransition}
          setControlTransition={setFase13ControlTransition}
          setIsFinished={setFimFase13}
          setEndVideo={setEndVideoFase13}
          endVideo={endVideoFase13}
          setOverflow={setOverflow}
          feedEtapa={feedEtapa3}
          setCaminhoData={setCaminhoData}
          caminhoData={caminhoData}
          actualVideo={3}
          setEtapaWrong={setEtapa3Wrong}
        />
      </Wrapper>
    </LoadPage>
  );
}

export default Page9;
