// React Elements/Hooks
import { Fragment } from "react/cjs/react.production.min";
import { useState, useEffect } from "react";

// Components
import Header from "components/header";
import Wrapper from "components/wrapper";
import Footer from "components/footer";
import ProgressPage from "components/progressPage";
import LoadPage from "components/loadPage";

import Quizzes from "./customComponents/quizz";

function Quizz() {
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
      <ProgressPage className="textBar d-none" />
      <Header hideOnScroll setTemaCor={setTemaCor} pageAtual={3} className="" />
      <Wrapper>
        <Quizzes sectionTitle="Tipos de quizz" />
      </Wrapper>
      <Footer fixed className="" />
    </LoadPage>
  );
}

export default Quizz;
