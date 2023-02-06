// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import GlobalState from "contexts/globalState";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Btn from "components/buttons";

function PreviousScreen(props) {
  const { pagesData, setPagesData } = useContext(GlobalState);
  const [disable, setDisable] = useState(false);
  const location = useLocation();
  const actualPath = location.pathname;
  const navigate = useNavigate();

  //pega o id da pagina atual
  let idActualPage;
  pagesData.curso.conteudo.telas.forEach((element, id) => {
    if (element.route == actualPath.slice(1)) {
      idActualPage = id;
    }
  });

  //avanca para a proxima tela
  function handlePrevious() {
    const newPath = `/${
      pagesData.curso.conteudo.telas[idActualPage - 1].route
    }`;
    navigate(newPath);
  }

  //verifica se esta na primeira tela e desabilita o botao
  useEffect(() => {
    if (idActualPage == 0) {
      setDisable(true);
    }
  }, []);

  return (
    <Btn
      className={`previousScreen btn-padrao ${
        props.className ? props.className : ""
      }`}
      size={`${props.size ? props.size : "md"}`}
      onClick={(e) => handlePrevious()}
      disabled={disable}
    >
      Tela Anterior
    </Btn>
  );
}

export default PreviousScreen;
