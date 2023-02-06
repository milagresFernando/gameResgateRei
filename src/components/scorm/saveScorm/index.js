import GlobalState from "contexts/globalState";
import React, { Fragment, useEffect, useState, useContext } from "react";
import { withScorm } from "react-scorm-provider";

const Props = (props) => {
  const isScorm = props.sco.apiConnected;

  // const [strScorm, setStrScorm] = useState({});
  // const [suspendData2, setSuspendData2] = useState({ nameMenu: 0 });

  // const [dataScorm, setDataScorm] = useState({});

  const { menuPages } = useContext(GlobalState);
  const { startPage } = useContext(GlobalState);

  let dataMenu = props.data ? props.data : menuPages;

  // if(props.from != "Header") { console.log('Enter Scorm') }

  // useEffect(() => {
  // 	console.log('Menu: ', props.data, startPage )
  // 	setDataScorm()
  // }, [startPage, props.data])

  // useEffect(() => {
  // 	console.log('DataScorm: ', dataScorm )
  // 	setStrScorm({
  // 		"menu": dataScorm.menu,
  // 		"paginaInicial": dataScorm.paginaInicial
  // 	})
  // }, [dataScorm])

  useEffect(() => {
    let strScorm = { menu: dataMenu, paginaInicial: startPage };
    // console.log('Scorm: ', strScorm)
    if (isScorm) {
      props.sco.setSuspendData("dataCurso", JSON.stringify(strScorm));
    } else {
      window.sessionStorage.setItem("dataCurso", JSON.stringify(strScorm));
    }
  }, []);

  return <Fragment></Fragment>;
};

const SaveScorm = withScorm()(Props);
export default SaveScorm;
