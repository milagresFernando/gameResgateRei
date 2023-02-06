// React Elements/Hooks
import { Fragment } from "react/cjs/react.production.min";
import { useState, useEffect } from "react";

// Components
import Header from "components/header";
import Wrapper from "components/wrapper";

import ScrollPage from "components/scrollPage";
import LoadPage from "components/loadPage";
import CarrosselDrag from "./customComponents/carrosselDrag";
import BlocoInterativoSvgs from "./customComponents/blocoInterativoSvgs";

function Page9() {
  const [temaCor, setTemaCor] = useState("custom"); //seta a cor do tema no body. Passar uma classe aqui caso queira iniciar com um tema

  useEffect(() => {
    if (temaCor) {
      document.body.classList.value.search("ios") !== -1
        ? (document.body.className = "ios")
        : (document.body.className = "");

      document.body.classList.add(temaCor);
    }
  }, [temaCor]);

  return (
    <LoadPage>
      {/* <ScrollPage /> */}
      {/* <Header hideOnScroll setTemaCor={setTemaCor} pageAtual={9} className="" /> */}
      <Wrapper>
        <BlocoInterativoSvgs />
        <CarrosselDrag sectionTitle="Carrossel estilo seleção de personagem" />
      </Wrapper>
    </LoadPage>
  );
}

export default Page9;
