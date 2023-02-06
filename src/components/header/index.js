// Css
import "./index.scss";

// React Elements/Hooks
import GlobalState from "contexts/globalState";
import { Fragment, useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// Components
import { Container, Row, Col, Form } from "react-bootstrap";
import BotaoMenu from "./menu/botaomenu";
import Menu from "./menu";
import SaveScorm from "components/scorm/saveScorm";

// Function
import posicaoMenu from "globalFunctions/scrollFunction/posicaoMenu";

function Header(props) {
  const headerInitialPos = { top: "0" };
  const [headerStyle, setHeaderStyle] = useState(headerInitialPos);
  const [showHeader, setShowHeader] = useState(true);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [load, setLoad] = useState(false);

  const headerRef = useRef(null);
  const { pagesData } = useContext(GlobalState);
  const { startPage, setStartPage } = useContext(GlobalState);

  let prevScroll = window.pageYOffset;

  useEffect(() => {
    if (pagesData.curso.mode == "onepage") {
      setStartPage(props.pageAtual - 1);
    } else {
      if (props.pageAtual - 1 > startPage) setStartPage(props.pageAtual - 1);
    }

    setLoad(true);
  }, [startPage]);

  useEffect(() => {
    if (props.hideOnScroll) {
      if (showHeader) {
        setHeaderStyle(headerInitialPos);
      } else {
        setHeaderStyle({ top: `${-headerRef.current.offsetHeight}px ` });
      }
    }
  }, [showHeader]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  function scrollHeader() {
    if (props.hideOnScroll) {
      let recebePosicao = posicaoMenu({ prev: prevScroll });
      if (recebePosicao.scrollDirection) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
      prevScroll = recebePosicao.prevScroll;
    }
  }

  function handleThemeChange(e) {
    props.setTemaCor(e.target.value);
  }

  if (!load) {
    return <div>carregando</div>;
  } else {
    return (
      <Fragment>
        <SaveScorm from="Header" />

        <header
          style={headerStyle}
          ref={headerRef}
          className={`headerComponent ${props.className}`}
        >
          <Container>
            <Row className="align-items-center justify-content-between">
              <Col xs="2">
                <Link to="/">
                  <img
                    src={pagesData.curso.logo}
                    className="img-responsive"
                    alt="Logotipo da Empresa"
                  />
                </Link>
              </Col>

              <Col xs="2">
                <Form.Select
                  onChange={(e) => handleThemeChange(e)}
                  aria-label="Default select example"
                  id="changeTemplate"
                >
                  <option value="custom">Custom</option>
                  <option value="azulVerde">Padrão Azul / Verde</option>
                  <option value="azulAmarelo">Padrão Azul / Amarelo</option>
                  <option value="laranja">Padrão Laranja</option>
                  <option value="verdeAreia">Padrão Verde / Areia</option>
                </Form.Select>
              </Col>

              <Col xs="2" className="d-flex justify-content-end">
                <BotaoMenu
                  setMenuIsOpen={setMenuIsOpen}
                  menuIsOpen={menuIsOpen}
                  className=""
                />
              </Col>
            </Row>
          </Container>
          <Menu
            mode={pagesData.curso.mode}
            setMenuIsOpen={setMenuIsOpen}
            menuIsOpen={menuIsOpen}
            pagesData={pagesData}
            pageAtual={props.pageAtual}
            className=""
          />
        </header>
      </Fragment>
    );
  }
}

export default Header;
