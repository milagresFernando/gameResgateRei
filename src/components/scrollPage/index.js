// React Elements/Hooks
import GlobalState from "contexts/globalState";
import { Fragment, useState, useRef, useEffect, useContext } from "react";
import verificaBottom from "globalFunctions/scrollFunction/verificaBottom";
import ProgressPage from "./progressPage";

function ScrollPage(props) {
  // const [load, setLoad] = useState(false);
  const { endPosition, setEndPosition } = useContext(GlobalState);
  const { liberaScorm, setLiberaScorm } = useContext(GlobalState);

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, [endPosition, liberaScorm]);

  function scrollEvent() {
    // setScrollProps({ currentScroll: window.pageYOffset })
    // console.log('Doc' , window.pageYOffset);
    // let recebePosition = verificaBottom();
    // if (recebePosition && !liberaScorm && !endPosition) {
    //   setEndPosition(true);
    // }
  }

  return (
    <Fragment>
      <ProgressPage className="textBar" />
    </Fragment>
  );
}

export default ScrollPage;
