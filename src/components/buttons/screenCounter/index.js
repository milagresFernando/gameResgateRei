// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import GlobalState from "contexts/globalState";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Btn from "components/buttons";

function ScreenCounter(props) {
  const { pagesData, setPagesData } = useContext(GlobalState);
  const location = useLocation();
  const actualPath = location.pathname;

  //pega o id da pagina atual
  let idActualPage;
  pagesData.curso.conteudo.telas.forEach((element, id) => {
    if (element.route == actualPath.slice(1)) {
      idActualPage = id;
    }
  });

  return (
    <Fragment>
      <span
        className={`screenCounter ${props.className ? props.className : ""}`}
      >
        {idActualPage + 1} {props.middleItem ? props.middleItem : "de"}{" "}
        {pagesData.curso.conteudo.telas.length}
      </span>
    </Fragment>
  );
}

export default ScreenCounter;
