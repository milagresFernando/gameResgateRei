// React Elements/Hooks
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import GlobalState from "contexts/globalState";

function LinkTravado(props) {
  const { pagesData } = useContext(GlobalState);

  const location = useLocation();
  const actualPath = location.pathname;

  let idActualPage;
  pagesData.curso.conteudo.telas.forEach((element, id) => {
    if (element.route == actualPath.slice(1)) {
      idActualPage = id;
    }
  });

  const { changeRoute, setChangeRoute } = useContext(GlobalState);
  if (props.trava === "travado") {
    return <span>{props.content}</span>;
  } else {
    return (
      <Link to={`/${props.link}`} onClick={() => setChangeRoute(!changeRoute)}>
        {props.content}
      </Link>
    );
  }
}

export default LinkTravado;
