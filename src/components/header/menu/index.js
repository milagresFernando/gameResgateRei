// Css
import "./index.scss";

// React Elements/Hooks
import { useEffect, useState, useContext, useCallback } from "react";
import GlobalState from "contexts/globalState";

// Components
import { Container, Row, Col } from "react-bootstrap";
import ListaMenu from "./listamenu";

// FUNCTIONS
import geraAlturaMenu from "globalFunctions/scrollFunction/geraAlturaMenu";
import posicaoMenu from "globalFunctions/scrollFunction/posicaoMenu";
import verificaBottom from "globalFunctions/scrollFunction/verificaBottom";

function Menu(props) {
  let menuList = [];
  const [menuListTop, setMenuListTop] = useState([]);
  const [menuListPages, setMenuListPages] = useState([]);
  const [load, setLoad] = useState(false);
  const [currentMenuAtual, setCurrentMenuAtual] = useState(0);
  const [currentAtivo, setCurrentAtivo] = useState(0);

  const [endPosition, setEndPosition] = useState(false);

  // const [, updateState] = React.useState();
  // const forceUpdate = React.useCallback(() => updateState({}), []);
  const [menuClasse, setMenuClasse] = useState("");
  const [itemsViewed, setItemsViewed] = useState([]);

  useEffect(() => {
    const valMenuClasse = props.menuIsOpen ? "menu-aberto" : "";
    setMenuClasse(valMenuClasse);

    document.body.classList.toggle("overflow", props.menuIsOpen);
  }, [props.menuIsOpen]);

  useEffect(() => {
    window.addEventListener("scroll", scrollMenu);
    return () => {
      window.removeEventListener("scroll", scrollMenu);
    };
  }, [itemsViewed]);

  function scrollMenu() {
    let recebePosition = verificaBottom();
    if (recebePosition) {
      setEndPosition(true);
    }

    if (props.mode === "onepage") {
      let recebeMenu = geraAlturaMenu(props.pagesData);
      let recebePosicao = posicaoMenu({
        menu: recebeMenu,
        bottom: recebePosition,
      });
      itemsViewed[recebePosicao.menuPosition] = 1;
      setCurrentMenuAtual(recebePosicao.menuPosition);
    }
  }

  // useEffect(() => {
  //   console.log('Here', document.readyState);
  // }, [document.readyState]);

  useEffect(() => {
    // setTimeout(() => {
    let loadPage = setInterval(() => {
      if (document.readyState === "complete" && !load) {
        // console.log(document.readyState);
        if (props.mode === "onepage") {
          // let queryFind = document.querySelectorAll("section");
          // if (props.pagesData.curso.menu != '') {
          //   queryFind = document.querySelectorAll(props.pagesData.curso.menu); }

          // menuList = Array.apply(null, queryFind);
          menuList = geraAlturaMenu(props.pagesData, "trasObjeto");

          setItemsViewed(
            menuList.map(() => {
              return 0;
            })
          );
          setMenuListTop(
            menuList.map((menuItem, id) => {
              let valueItem;
              if (props.pagesData.curso.menu) {
                valueItem = menuItem.firstChild.nodeValue;
              } else {
                valueItem = menuItem.querySelectorAll(".titleDivisor")[0]
                  .firstChild.nodeValue;
              }

              return {
                menu: menuItem.offsetTop,
                content: valueItem,
                visited: menuItem.getAttribute("data-seen"),
                index: id,
              };
            })
          );
        } else {
          menuList = props.pagesData.curso.conteudo.telas;
          setMenuListPages(
            menuList.map((pageItem, id) => {
              return {
                route: pageItem.route,
                content: pageItem.titulo,
                index: id,
              };
            })
          );

          let routePage =
            props.pagesData.curso.conteudo.telas[props.pageAtual - 1].route;
          setCurrentAtivo(routePage);
          setCurrentMenuAtual(
            props.pagesData.curso.conteudo.telas
              .map(function (e) {
                return e.route;
              })
              .indexOf(routePage)
          );
        }

        scrollMenu();
        setLoad(true);
        clearInterval(loadPage);
      }
    }, 1000);

    // }, 4000)
  }, [load]);

  const clickMenu = (e) => {
    const newValue = props.menuIsOpen;
    props.setMenuIsOpen((newValue) => !newValue);

    let scrollTo = e.target.getAttribute("data-top");
    window.scrollTo({
      top: scrollTo - 15 - 100,
      behavior: "smooth",
    });
  };

  if (!load && menuListTop.length !== 0) {
    return <div>carregando</div>;
  } else {
    let menuRender;

    // setGlobal({ menu : menuListTop })

    // console.log(menuListTop);
    if (props.mode === "onepage") {
      // console.log(currentMenuAtual, menuListTop, itemsViewed)
      menuRender = (
        <ListaMenu
          tagElement="ul"
          tipoMenu="onepage"
          className="ulMenuOne"
          bottomReached={endPosition}
          listItens={menuListTop}
          menuAtivo={currentMenuAtual}
          lastVisited={itemsViewed}
          onClick={clickMenu}
        />
      );
    } else {
      menuRender = (
        <ListaMenu
          tagElement="ul"
          tipoMenu="multipage"
          className="ulMenu"
          bottomReached={endPosition}
          listItens={menuListPages}
          menuAtivo={currentAtivo}
          itemVisited={currentMenuAtual}
          showLiMenu={true}
        />
      );
    }

    // console.log('Menu');

    return (
      <nav className={`navComponent ${props.className} ${menuClasse}`}>
        <Container>
          <Row>
            <Col>
              <div className="conteudoMenu">{menuRender}</div>
            </Col>
          </Row>
        </Container>

        <div className="menuBG"></div>
      </nav>
    );
  }
}

export default Menu;
