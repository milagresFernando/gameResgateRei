// Css
import "./index.scss";

// React Elements/Hooks
import { useState, useEffect, useContext } from "react";

// Functions
import calcPercentage from "globalFunctions/generalCalcs/calcPercentage";
import { Fragment } from "react/cjs/react.production.min";
import GlobalState from "contexts/globalState";
import verificaBottom from "globalFunctions/scrollFunction/verificaBottom";
import posicaoMenu from "globalFunctions/scrollFunction/posicaoMenu";
import geraAlturaMenu from "globalFunctions/scrollFunction/geraAlturaMenu";

function ProgressPage(props) {
  // none, onlyText, textBar, perSection
  const [widthBar, setWidthBar] = useState(0);
  const [lastWidthBar, setLastWidthBar] = useState(0);

  const [endPositionProg, setEndPositionProg] = useState(false);
  const { pagesData } = useContext(GlobalState);

  let prevScroll = window.pageYOffset;

  useEffect(() => {
    window.addEventListener("scroll", scrollPoint);

    return () => {
      window.removeEventListener("scroll", scrollPoint);
    };
  }, [lastWidthBar, endPositionProg]);

  function scrollPoint() {
    let recebePosition = verificaBottom();
    if (recebePosition) {
      setEndPositionProg(true);
    }

    if (pagesData.curso.mode == "onepage") {
      let recebeMenu = geraAlturaMenu(pagesData);
      let recebePosicao = posicaoMenu({ prev: prevScroll, menu: recebeMenu });
      prevScroll = recebePosicao.prevScroll;
    }

    if (endPositionProg) {
      setEndPositionProg(false);
    } else {
      let scrollPosition = document.documentElement.scrollHeight;
      let barUpdated = calcPercentage(
        window.pageYOffset,
        scrollPosition - window.innerHeight
      );

      if (props.progressType === "maxView") {
        if (barUpdated > lastWidthBar) {
          setWidthBar(barUpdated);
          setLastWidthBar(barUpdated);
        }
      } else {
        setWidthBar(barUpdated);
      }
    }
  }

  return (
    <Fragment>
      <div className={`progress ${props.className}`}>
        <div className="progressBar" style={{ width: `${widthBar}%` }}></div>

        <span>{widthBar}%</span>
      </div>
    </Fragment>
  );
}

export default ProgressPage;
