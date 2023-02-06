// React Elements/Hooks
import { Fragment } from "react/cjs/react.production.min";
import { useState, useEffect } from "react";

// Components
import Header from "components/header";
import Wrapper from "components/wrapper";
import Footer from "components/footer";

import TituloTextos from "./customComponents/titulosTextos";
import Imagens from "./customComponents/imagens";
import CaixasDestaque from "./customComponents/caixasDestaque";
import CaixasRetrateis from "./customComponents/caixasRetrateis";
import Cards from "./customComponents/cards";
import FlipCards from "./customComponents/flipCards";
import Abas from "./customComponents/abas";
import Svgs from "./customComponents/svgs";
import LinhaTempo from "./customComponents/linhaTempo";
import Carrossel from "./customComponents/carrosel";
import Tabelas from "./customComponents/tabelas";
import Botoes from "./customComponents/botoes";
import Formularios from "./customComponents/formularios";
import VideoPlayer from "./customComponents/videoPlayer";
import AudioPlayer from "./customComponents/audioPlayer";
import Title from "components/texts/title";
import BotoesNavegacao from "./customComponents/botoesNavegacao";
import ScrollParallax from "./customComponents/scrollParallax";

import ScrollPage from "components/scrollPage";
import LoadPage from "components/loadPage";
import ScrollParallaxSvg from "./customComponents/scrollParallaxSvg";

function Page1() {
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
        <Title typeH="1" className="" content={<Fragment>Page 1</Fragment>} />
        <hr />
        <VideoPlayer sectionTitle="Player de Vídeo" />
        <TituloTextos sectionTitle="Títulos e textos" />
        <Imagens sectionTitle="Imagens" />
        <CaixasDestaque sectionTitle="Caixas de Destaque" />
        <Carrossel sectionTitle="Carrosel" />
        <CaixasRetrateis sectionTitle="Caixa Retrátil" />
        <Cards sectionTitle="Cards" />
        <FlipCards sectionTitle="Flip cards" />
        <Abas sectionTitle="Abas" />

        <Tabelas sectionTitle="Tabelas" />
        <LinhaTempo sectionTitle="Linha do Tempo / Timeline" />
        <ScrollParallaxSvg sectionTitle="Itens com parallax SVG" />
        <ScrollParallax sectionTitle="Itens com parallax" />
        <Formularios sectionTitle="Formulários" />
        <Svgs sectionTitle="Infográfico Interativo" />
        <Botoes sectionTitle="Botões" />
        <AudioPlayer sectionTitle="Player de Audio" />

        <BotoesNavegacao sectionTitle="Botões de Navegação" />
      </Wrapper>
      <Footer fixed className="" />
    </LoadPage>
  );
}

export default Page1;
