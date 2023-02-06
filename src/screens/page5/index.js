// React Elements/Hooks
import { Fragment } from "react/cjs/react.production.min";
import { useState, useEffect } from "react";

// Components
import Header from "components/header";
import Wrapper from "components/wrapper";
import Footer from "components/footer";

import VideoPlayer from "./customComponents/videoPlayer";

import ScrollPage from "components/scrollPage";
import LoadPage from "components/loadPage";

function Page5() {
  const [temaCor, setTemaCor] = useState("custom"); //seta a cor do tema no body. Passar uma classe aqui caso queira iniciar com um tema

  // setGlobal({ title : "Milagres" })

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
      <Header hideOnScroll setTemaCor={setTemaCor} pageAtual={1} className="" />

      <Wrapper>
        <VideoPlayer sectionTitle="Player de Vídeo" />
      </Wrapper>
      <Footer className="" />
    </LoadPage>
  );
}

export default Page5;
