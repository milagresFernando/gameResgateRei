// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import GlobalState from "contexts/globalState";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Btn from "components/buttons";

function NextScreen(props) {
  const { pagesData, setPagesData } = useContext(GlobalState);
  const { changeRoute, setChangeRoute } = useContext(GlobalState);

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
  function handleNext() {
    setChangeRoute(!changeRoute);
    const newPath = `/${
      pagesData.curso.conteudo.telas[idActualPage + 1].route
    }`;
    navigate(newPath);
  }

  //verifica se esta na ultima tela e desabilita o botao
  useEffect(() => {
    if (pagesData.curso.conteudo.telas.length == idActualPage + 1) {
      setDisable(true);
    }
  }, []);

  return (
    <Btn
      className={`nextScreen btn-padrao ${
        props.className ? props.className : ""
      }`}
      size={`${props.size ? props.size : "md"}`}
      onClick={(e) => handleNext()}
      disabled={disable}
    >
      Próxima tela
    </Btn>
  );
}

export default NextScreen;
