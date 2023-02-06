// React Elements/Hooks
import { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";

import { useParallax, useParallaxController } from "react-scroll-parallax";
import SvgParallax from "components/images/svgParallax";

//Funcoes
import setBreakPoint from "globalFunctions/setBreakPoint";
import debounceTimeOut from "globalFunctions/debounceTimeOut";

function ParallaxTresBolasDesfoque(props) {
  let n1ValueDesk = 9;
  let n1ValueTablet = 5;
  let n1ValueMobile = 4;

  let n2ValueDesk = 6;
  let n2ValueTablet = 6;
  let n2ValueMobile = 6;

  let n3ValueDesk = -8;
  let n3ValueTablet = -6;
  let n3ValueMobile = -6;

  const [monitoraMudanca, setMonitoraMudanca] = useState(false);
  const [n1Value, setN1Value] = useState({ speed: n1ValueDesk });
  const [n2Valeu, setN2Value] = useState({ speed: n2ValueDesk });
  const [n3Value, setN3Value] = useState({ speed: n3ValueDesk });

  const n1 = useParallax(n1Value);
  const n2 = useParallax(n2Valeu);
  const n3 = useParallax(n3Value);

  useEffect(() => {
    const debouncedHandleResize = debounceTimeOut(function handleResize() {
      if (
        window.innerWidth <= setBreakPoint("lg") &&
        window.innerWidth > setBreakPoint("sm")
      ) {
        setN1Value({ speed: n1ValueTablet });
        setN2Value({ speed: n2ValueTablet });
        setN3Value({ speed: n3ValueTablet });
      } else if (window.innerWidth <= setBreakPoint("sm")) {
        setN1Value({ speed: n1ValueMobile });
        setN2Value({ speed: n2ValueMobile });
        setN3Value({ speed: n3ValueMobile });
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
      setN1Value({ speed: n1ValueTablet });
      setN2Value({ speed: n2ValueTablet });
      setN3Value({ speed: n3ValueTablet });
    } else if (window.innerWidth <= setBreakPoint("sm")) {
      setN1Value({ speed: n1ValueMobile });
      setN2Value({ speed: n2ValueMobile });
      setN3Value({ speed: n3ValueMobile });
    }
    setMonitoraMudanca(!monitoraMudanca);
  }, []);

  return (
    <Fragment>
      <div className="baseSize tresBolasDesfoque">
        <SvgParallax
          svgName="TresBolasDesfoqueAzul"
          svgParallaxClassName="zindex-2"
          className="ilustrasBase tresBolasDesfoqueBase"
          parallaxRef={n1.ref}
          monitoraMudanca={monitoraMudanca}
        />
        <SvgParallax
          svgName="TresBolasDesfoqueRosa"
          svgParallaxClassName="zindex-2"
          className="ilustrasBase tresBolasDesfoqueBase"
          parallaxRef={n2.ref}
          monitoraMudanca={monitoraMudanca}
        />
        <SvgParallax
          svgName="TresBolasDesfoqueAmarelo"
          svgParallaxClassName="zindex-2"
          className="ilustrasBase tresBolasDesfoqueBase"
          parallaxRef={n3.ref}
          monitoraMudanca={monitoraMudanca}
        />
      </div>
    </Fragment>
  );
}

export default ParallaxTresBolasDesfoque;
