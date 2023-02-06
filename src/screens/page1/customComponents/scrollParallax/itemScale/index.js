// React Elements/Hooks
import { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import { useParallax, useParallaxController } from "react-scroll-parallax";

//Imagens

//Functions
import debounceTimeOut from "globalFunctions/debounceTimeOut";
import setBreakPoint from "globalFunctions/setBreakPoint";

function ItemScale(props) {
  const parallaxController = useParallaxController();

  useEffect(() => {
    parallaxController.update();
  }, []);

  let n1ValueDesk = { scale: [0, 1] };
  let n1ValueTablet = { scale: [0, 1] };
  let n1ValueMobile = { scale: [0, 1] };

  const [monitoraMudanca, setMonitoraMudanca] = useState(false);
  const [n1Value, setN1Value] = useState(n1ValueDesk);

  const n1 = useParallax(n1Value);

  useEffect(() => {
    const debouncedHandleResize = debounceTimeOut(function handleResize() {
      if (
        window.innerWidth <= setBreakPoint("lg") &&
        window.innerWidth > setBreakPoint("sm")
      ) {
        setN1Value(n1ValueTablet);
      } else if (window.innerWidth <= setBreakPoint("sm")) {
        setN1Value(n1ValueMobile);
      }
      setMonitoraMudanca(!monitoraMudanca);
    }, 500);

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, [window.innerWidth]);

  useEffect(() => {
    if (
      window.innerWidth <= setBreakPoint("lg") &&
      window.innerWidth > setBreakPoint("sm")
    ) {
      setN1Value(n1ValueTablet);
    } else if (window.innerWidth <= setBreakPoint("sm")) {
      setN1Value(n1ValueMobile);
    }
    setMonitoraMudanca(!monitoraMudanca);
  }, []);
  return (
    <div className={props.className} ref={n1.ref}>
      <p>Scale</p>
    </div>
  );
}

export default ItemScale;
