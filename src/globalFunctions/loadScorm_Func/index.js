function loadScorm_Func(props) {
  let startPage = Number(0);
  let menuPages = [];

  let strData;
  let data;
  
  if (props.apiConnected) {
    strData = props.suspendData.dataCurso;
  } else {
    strData = window.sessionStorage.getItem("dataCurso");
  }
  console.log("Load Data: ", strData);

  if (strData != undefined || strData != null) {
    data = JSON.parse(strData);
    if (data.menu !== 0) {
      let newCounter = Number(0);
      data.menu.forEach((obj) => {
        if (obj === 1) newCounter++;
      });

      if (newCounter === data.menu.length) {
        return data;
      } else if (newCounter > data.paginaInicial) {
        data.paginaInicial = newCounter;
      }
    }
  } else {
    data = {
      menu: menuPages,
      paginaInicial: startPage,
    };
  }

  return data;
}

export default loadScorm_Func;
