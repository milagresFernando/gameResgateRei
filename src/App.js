import React from "react";
import { Fragment, useEffect, useState } from "react";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import PagesService from "./services/pages";
import ScreenRoutes from "./routes";
import GlobalState from "./contexts/globalState"; //state global
import { ParallaxProvider } from "react-scroll-parallax";
import ScormProvider, { withScorm } from "react-scorm-provider";

function App() {
  const [pagesData, setPagesData] = useState(false);
  const [liberaScorm, setLiberaScorm] = useState(false);

  const [endPosition, setEndPosition] = useState(false);
  const [changeRoute, setChangeRoute] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [isIphone, setIsIphone] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [isSafari, setIsSafari] = useState(false);
  const [startPage, setStartPage] = useState(0);
  const [menuPages, setMenuPages] = useState([]);

  //checagem se o navegador suporta o userAgentData
  let platform =
    navigator?.userAgentData?.platform || navigator?.platform || "unknown";

  //checagem se é um dispostivo IOS
  let iOS = /iPad|iPhone|iPod|macOS|MacIntel/.test(platform);
  let iPhone = /iPhone/.test(platform);
  let ua = navigator.userAgent.toLowerCase();
  let android = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

  // macOS|MacIntel

  let safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (iOS) {
      document.body.classList.add("ios");
      setIsIos(true);
    }
    if (safari) {
      document.body.classList.add("safari");
      setIsSafari(true);
    }
    if (iPhone) {
      setIsIphone(true);
    }
    if (android) {
      setIsAndroid(true);
    }

    if (typeof document !== "undefined") {
      setIsTouch("ontouchstart" in document.documentElement);
    }
  }, []);

  async function loadData() {
    const data = await PagesService.getPages();
    setPagesData(data);
  }

  if (pagesData === false) {
    return (
      <Fragment>
        <div className="loadingContent">
          <div className="loaderSpinner">
            <div className="loadingio-spinner">
              <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  } else {
    document.title = pagesData.curso.titulo;

    return (
      <ScormProvider
        version="1.2"
        debug={process.env.NODE_ENV !== "production"}
      >
        <GlobalState.Provider
          value={{
            isTouch,
            isIphone,
            isSafari,
            isIos,
            isAndroid,
            pagesData,
            setPagesData,
            startPage,
            setStartPage,
            menuPages,
            setMenuPages,
            liberaScorm,
            setLiberaScorm,
            changeRoute,
            setChangeRoute,
          }}
        >
          <ParallaxProvider>
            <ScreenRoutes pagesData={pagesData} />
          </ParallaxProvider>
        </GlobalState.Provider>
      </ScormProvider>
    );
  }
}

export default withScorm()(App);
