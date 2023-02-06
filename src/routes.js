import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import { useContext, useEffect, useState } from "react";
import PageMin from "./screens/pageMin";
import Page1 from "./screens/page1";
import Page2 from "./screens/page2";
import Page5 from "./screens/page5";
import Page6 from "./screens/page6";
import Page7 from "./screens/page7";
import Page8 from "./screens/page8";

import Quizz from "./screens/quizz";
import ArvoreDecisao from "./screens/arvoreDecisao";

import GlobalState from "./contexts/globalState";
import { withScorm } from "react-scorm-provider";
import loadScorm_Func from "./globalFunctions/loadScorm_Func";

function ScreenRoutes(props) {
  const pagesArray = [
    Page1,
    Page2,
    Quizz,
    ArvoreDecisao,
    Page5,
    Page6,
    Page7,
    Page8,
  ]; // adicione as chamadas de pagina desse array

  const { pagesData, setPagesData } = useContext(GlobalState);
  const { startPage, setStartPage } = useContext(GlobalState);
  const { menuPages, setMenuPages } = useContext(GlobalState);
  const { changeRoute, setChangeRoute } = useContext(GlobalState);
  const { liberaScorm, setLiberaScorm } = useContext(GlobalState);

  const [pagesAtual, setPagesAtual] = useState();
  const [allPages, setAllPages] = useState([]);
  const [checkConnect, setCheckConnect] = useState(false);
  const [checkLoaded, setCheckLoaded] = useState(false);
  const [checkPages, setCheckPages] = useState(false);
  const [counterEntry, setCounterEntry] = useState(0);
  const [errorLoader, setErrorLoader] = useState("Carregando...");
  let recebeLoad;

  useEffect(() => {
    if (counterEntry === 0) {
      setCounterEntry(counterEntry + 1);
    } else if (counterEntry > 0) {
      if (pagesData.curso.scorm && props.sco.apiConnected) {
        // console.log("CAMINHO 1");
        setCheckConnect(true);
      } else if (
        (!pagesData.curso.scorm && props.sco.apiConnected) ||
        (pagesData.curso.scorm && !props.sco.apiConnected)
      ) {
        setCheckConnect(false);
        if (props.sco.apiConnected) {
          setErrorLoader("JSON não configurado para o Scorm!");
        } else {
          setErrorLoader("SCORM Habilitado no JSON, Desabilite!");
        }
      } else {
        // console.log("CAMINHO 3");
        setCheckConnect(true);
      }
    }
  }, [props.sco.apiConnected, counterEntry]);

  useEffect(() => {
    if (checkConnect) {
      recebeLoad = loadScorm_Func(props.sco);
      setMenuPages(recebeLoad.menu);

      if (pagesData.curso.mode == "onepage") {
        setStartPage(0);
      } else {
        setStartPage(recebeLoad.paginaInicial);
      }

      setCheckLoaded(true);
    }
  }, [checkConnect]);

  useEffect(() => {
    const routePathAtual = window.location.href;
    const routePathAtualName = routePathAtual.substring(
      routePathAtual.lastIndexOf("/") + 1
    );
    pagesData.curso.conteudo.telas.forEach((tela, id) => {
      if (tela.route == routePathAtualName) {
        //console.log(tela.trava);
        setLiberaScorm(tela.trava);
      }
    });
  }, [changeRoute]);

  useEffect(() => {
    if (checkLoaded) {
      if (startPage !== 0) {
        let NameElement = pagesArray[startPage];
        setPagesAtual(
          <Route
            path={`/${pagesData.curso.conteudo.telas[startPage].route}`}
            element={<NameElement />}
          />
        );
      }

      setAllPages(
        pagesArray.map((Page, id) => {
          return (
            <Route
              exact
              key={id}
              path={`/${pagesData.curso.conteudo.telas[id].route}`}
              element={<Page />}
            />
          );
        })
      );
      setChangeRoute(!changeRoute);
      setCheckPages(true);
    }
  }, [checkLoaded, startPage]);

  if (checkPages == false) {
    return <div>{errorLoader}</div>;
  } else {
    // console.log("Routes");
    return (
      <HashRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Navigate
                to={`${pagesData.curso.conteudo.telas[startPage].route}`}
              />
            }
          />
          {pagesAtual}
          {allPages}
        </Routes>
      </HashRouter>
    );
  }
}

export default withScorm()(ScreenRoutes);
