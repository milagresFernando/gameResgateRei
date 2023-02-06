// React Elements/Hooks
import { useState, useEffect, useContext, useCallback } from "react";
import { Fragment } from "react/cjs/react.production.min";

// Functions
import GlobalState from "contexts/globalState";
import verificaBottom from "globalFunctions/scrollFunction/verificaBottom";

function LoadPage(props) {
  // const { endPosition, setEndPosition } = useContext(GlobalState);
  const [load, setLoad] = useState(false);

  const resetWindowScrollPosition = useCallback(
    () => window.scrollTo(0, 0),
    []
  );

  // useEffect(() => {
  //   if (load) {
  //     let hasVScroll =
  //       document.body.scrollHeight >
  //       document.body.clientHeight;

  //     if (!hasVScroll) {
  //       setEndPosition(true);
  //     }
  //   }
  // }, [load]);

  useEffect(() => {
    window.onbeforeunload = function () {
      resetWindowScrollPosition();
    };
  }, [resetWindowScrollPosition]);

  useEffect(() => {
    if (!load) {
      setLoad(true);
      resetWindowScrollPosition();
    }
  }, [load, document.body.scrollHeight]);

  return <Fragment>{props.children}</Fragment>;
}

export default LoadPage;
