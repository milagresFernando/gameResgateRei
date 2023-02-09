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

function Page9() {
  const [temaCor, setTemaCor] = useState("custom"); //seta a cor do tema no body. Passar uma classe aqui caso queira iniciar com um tema
  const [fase1ControlTransition, setFase1ControlTransition] = useState(false);
  const [fimFase1, setFimFase1] = useState(false);
  const [caminho, setCaminho] = useState(0);

  const [fase2ControlTransition, setFase2ControlTransition] = useState(false);
  const [fimFase2, setFimFase2] = useState(false);

  const [fase3ControlTransition, setFase3ControlTransition] = useState(false);
  const [fimFase3, setFimFase3] = useState(false);
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

  console.log(caminho);

  return (
    <LoadPage>
      <Wrapper className="relative overflow-hidden">
        <Fase1
          fase1ControlTransition={fase1ControlTransition}
          setFase1ControlTransition={setFase1ControlTransition}
          setFimFase1={setFimFase1}
          setCaminho={setCaminho}
        />
        <Fase2
          fase2ControlTransition={fase2ControlTransition}
          setFase2ControlTransition={setFase2ControlTransition}
          setFimFase2={setFimFase2}
        />
        <Fase3
          fase3ControlTransition={fase3ControlTransition}
          setFase3ControlTransition={setFase3ControlTransition}
          setFimFase3={setFimFase3}
        />
      </Wrapper>
    </LoadPage>
  );
}

export default Page9;
