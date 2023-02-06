// React Elements/Hooks
import { Fragment } from "react/cjs/react.production.min";
import { useState, useEffect } from "react";

// Components
import Header from "components/header";
import Wrapper from "components/wrapper";
import Footer from "components/footer";

import ScrollPage from "components/scrollPage";
import LoadPage from "components/loadPage";
import BlocoLotties from "./customComponents/blocoLotties";

function Page2() {
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
      <ScrollPage />
      <Header hideOnScroll setTemaCor={setTemaCor} pageAtual={2} className="" />
      <Wrapper>
        {/* <Title typeH="1" className="" content={<Fragment>Page 2</Fragment>} />
        <hr />
        <TituloTextos sectionTitle="Títulos e textos" /> */}
        <BlocoLotties sectionTitle="Bloco de Lotties" />
      </Wrapper>

      <Footer fixed className="" />
    </LoadPage>
  );
}

export default Page2;
