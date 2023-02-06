// React Elements/Hooks
import { Fragment } from "react/cjs/react.production.min";
import { useState, useEffect } from "react";

// Components
import Header from "components/header";
import Wrapper from "components/wrapper";
import Footer from "components/footer";

import TituloTextos from "./customComponents/titulosTextos";
import Title from "components/texts/title";
import ProgressPage from "components/progressPage";
import LoadPage from "components/loadPage";

function PageMin() {
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
      <Header hideOnScroll setTemaCor={setTemaCor} pageAtual={7} className="" />
      <Wrapper>
        <Title typeH="1" className="" content={<Fragment>Page 1</Fragment>} />
        <hr />
        <TituloTextos sectionTitle="Títulos e textos" />
      </Wrapper>

      <Footer fixed className="" />
    </LoadPage>
  );
}

export default PageMin;
