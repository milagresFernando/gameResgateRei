// Css
import "./index.scss";

// React Elements/Hooks
import GlobalState from "contexts/globalState";
import { Fragment, useEffect, useState, useContext } from "react";
import { withScorm } from "react-scorm-provider";
import LinkTravado from "components/header/menu/linktravado";
import SaveScorm from "components/scorm/saveScorm";

function ListaMenu(props) {
  // passe um valor de elemento de lista em tagElement pra setar as tags <ol>,<li>
  let TagElement = props.tagElement;
  //const [currentClass, setCurrentClass] = useState('');
  let currentClass = "";
  const [dataChanged, setDataChanged] = useState(false);
  const [travaComplete, setTravaComplete] = useState(false);
  const [travaScorm, setTravaScorm] = useState(false);
  const [scormSaved, setScormSaved] = useState(false);
  // let newData = [];
  const [load, setLoad] = useState(false);
  const [changeMenu, setChangeMenu] = useState(false);
  const [endScroll, setEndScroll] = useState(false);
  const isScorm = props.sco.apiConnected;

  const [listItens, setListItens] = useState([]);
  const [newSuspendData, setNewSuspendData] = useState([]);

  const { menuPages, setMenuPages } = useContext(GlobalState);
  const { pagesData, setPagesData } = useContext(GlobalState);
  const { liberaScorm, setLiberaScorm } = useContext(GlobalState);

  useEffect(() => {
    if (menuPages.length === 0) {
      setNewSuspendData(
        props.listItens.map(() => {
          return 0;
        })
      );
    } else {
      setNewSuspendData(menuPages);
    }

    if (props.tipoMenu != "onepage") {
      setTravaScorm(pagesData.curso.conteudo.telas[props.itemVisited].trava);
    }

    setLoad(true);
  }, [isScorm, menuPages, props.listItens]);

  useEffect(() => {
    if (load && newSuspendData.length !== 0) {
      if (props.tipoMenu === "onepage") {
        if (!changeMenu) {
          setListItens(
            props.listItens.map((list, id) => {
              if (props.lastVisited[id] === 1) {
                currentClass = "";
                newSuspendData[id] = 1;
                if (id === props.menuAtivo) {
                  currentClass = "active";
                }
              } else {
                if (isScorm) {
                  currentClass = "travado";
                } else {
                  currentClass = "";
                }
              }

              return (
                <li
                  key={id}
                  onClick={(e) => props.onClick(e)}
                  className={currentClass}
                  data-top={list.menu}
                >
                  {list.content}
                </li>
              );
            })
          );
        }
      } else {
        if (!changeMenu) {
          setListItens(
            props.listItens.map((list, id) => {
              if (newSuspendData[id] === 1) {
                currentClass = "";
                if (id === props.itemVisited) {
                  currentClass = "active";
                }
              } else if (id === props.itemVisited) {
                currentClass = "active";
              } else {
                if (isScorm) {
                  currentClass = "travado";
                } else {
                  currentClass = "";
                }
              }

              return (
                <li key={id} className={`routeItem ${currentClass}`}>
                  <LinkTravado
                    content={list.content}
                    link={list.route}
                    trava={currentClass}
                  />
                </li>
              );
            })
          );

          setChangeMenu(true);
        }
      }

      if (props.tipoMenu === "onepage") {
        let newData_Items = [...newSuspendData];

        let newCounter = Number(0);
        newData_Items.forEach((obj) => {
          if (obj === 1) newCounter++;
        });
        // console.log(newCounter, newData_Items.length)
        // console.log(newCounter, newData_Items, endScroll, props.bottomReached)

        if (newCounter !== newData_Items.length) {
          if (!dataChanged) {
            // console.log('I: ', newData_Items)
            // setMenuPages(newData_Items);
            setNewSuspendData(newData_Items);
            setDataChanged(true);
            setScormSaved(false);
          } else {
            setScormSaved(true);
            setDataChanged(false);
          }
        } else if (
          newCounter === newData_Items.length &&
          props.bottomReached &&
          !endScroll
        ) {
          setNewSuspendData(newData_Items);
          setDataChanged(true);
          setScormSaved(false);
          isScorm && props.sco.setStatus("completed");
          // console.log("Completed");
          setEndScroll(true);
        }
      } else {
        if (props.bottomReached && !endScroll && !liberaScorm) {
          let newData_Items = [...newSuspendData];
          let newData_fromItem = newData_Items[props.itemVisited];
          newData_fromItem = 1;
          newData_Items[props.itemVisited] = newData_fromItem;

          let newCounter = Number(0);
          newData_Items.forEach((obj) => {
            if (obj === 1) newCounter++;
          });

          if (
            newCounter !== newData_Items.length &&
            props.itemVisited + 1 !== newData_Items.length
          ) {
            let newList_Items = [...listItens];

            if (props.itemVisited + 1 != newList_Items.length) {
              let newItem_fromList = {
                ...newList_Items[props.itemVisited + 1],
              };

              if (!travaComplete) {
                newItem_fromList = (
                  <li key={props.itemVisited + 1} className={"routeItem"}>
                    <LinkTravado
                      content={props.listItens[props.itemVisited + 1].content}
                      link={props.listItens[props.itemVisited + 1].route}
                      trava={""}
                    />
                  </li>
                );
              }

              newList_Items[props.itemVisited + 1] = newItem_fromList;
            }

            setListItens(newList_Items);

            if (!dataChanged) {
              // console.log("Menu_Data: ", newData_Items);
              setMenuPages(newData_Items);
              setDataChanged(true);
            } else {
              // console.log("Menu: ", menuPages);
              setScormSaved(true);
              setEndScroll(true);
            }
          } else if (
            newCounter === newData_Items.length &&
            !travaComplete &&
            !liberaScorm
          ) {
            setMenuPages(newData_Items);
            setScormSaved(true);
            isScorm && props.sco.setStatus("completed");

            // console.log("Completed");
            setTravaComplete(true);
          }
        }
      }
    }
  }, [
    load,
    changeMenu,
    props.bottomReached,
    props.menuAtivo,
    endScroll,
    newSuspendData,
    travaComplete,
    liberaScorm,
  ]);

  if (!load && newSuspendData.length === 0) {
    return <div>carregando</div>;
  } else {
    if (props.tipoMenu === "onepage") {
      // console.log('Data: ', newSuspendData)
      // console.log('Data: ', dataChanged, ' - Scorm: ', scormSaved, ' - Data: ', newSuspendData)
      // if (dataChanged && !scormSaved) console.log('Sco Saved')
      return (
        <Fragment>
          {dataChanged && !scormSaved && <SaveScorm data={newSuspendData} />}
          <TagElement className={`list ${props.className}`}>
            {listItens}
          </TagElement>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          {/* {dataChanged && !scormSaved && <SaveScorm />} */}
          <TagElement className={`list ${props.className}`}>
            {props.showLiMenu && <li className="titleMenu">Menu</li>}
            {listItens}
          </TagElement>
        </Fragment>
      );
    }
  }
}

export default withScorm()(ListaMenu);
