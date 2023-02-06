// Css
import "./index.scss";

// React Elements/Hooks
import { Link } from "react-router-dom";

function List(props) {
  // passe um valor de elemento de lista em tagElement pra setar as tags <ol>,<li>
  let TagElement = props.tagElement;
  const listItens = props.listItens.map((list, id) => {
    // passe um anchor para criar uma lista com links

    if (list.anchor) {
      return (
        <li key={id} className={list.className}>
          <a
            href={list.anchor}
            target="_blank"
            rel="noreferrer"
            download={list.download && list.download}
          >
            {list.content}
          </a>
        </li>
      );
    }

    // passe um anchor para criar uma lista com rotas
    if (list.route) {
      return (
        <li
          key={id}
          className={`${list.className ? list.className : "routeItem"} ${
            list.route == props.pageAtual ? "active" : ""
          }`}
        >
          <Link to={`/${list.route}`}>{list.titulo}</Link>
        </li>
      );
    }
    return (
      <li
        key={id}
        className={list.className}
        onClick={props.onClick && ((e) => props.onClick(e))}
        attribute={list.attribute && list.attribute}
      >
        {list.content}
      </li>
    );
  });
  return (
    <TagElement className={`list ${props.className}`}>
      {props.isMenu && <li className="titleMenu">Menu</li>}
      {listItens}
    </TagElement>
  );
}

export default List;
