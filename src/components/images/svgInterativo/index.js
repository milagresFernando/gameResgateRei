// Css
import "./index.scss";

// Components
import { Container, Row, Col } from "react-bootstrap";

// React Elements/Hooks
import React, { Fragment, Suspense } from "react";
import { useState, useEffect } from "react";

// Functions
import debounceTimeOut from "globalFunctions/debounceTimeOut";

function SvgInterativo(props) {
  const [SVGComponentRender, setSVGComponentRender] = useState("");
  const [carregaSvg, SetCarregaSvg] = useState(true);

  useEffect(() => {
    const debouncedHandleResize = debounceTimeOut(function handleResize() {
      setWindowWidth(window.innerWidth);
    }, 500);

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, [window.innerWidth]);

  useEffect(() => {
    const sufix = [".js", "_sm.js", "_xs.js"];
    let SVGComponent = loadComponent(props.svgName, props.responsive, sufix);
    setSVGComponentRender(SVGComponent);

    SetCarregaSvg(false);
  }, [window.innerWidth]);

  function loadComponent(svgName, responsive, sufix) {
    if (!responsive) {
      const Component = React.lazy(() =>
        import(`screens/assets/svgs/components/${svgName}${sufix[0]}`)
      );
      return Component;
    }
    if (windowWidth < 576) {
      const Component = React.lazy(() =>
        import(`screens/assets/svgs/components/${svgName}${sufix[2]}`)
      );
      return Component;
    } else if (windowWidth >= 576 && windowWidth < 993) {
      const Component = React.lazy(() =>
        import(`screens/assets/svgs/components/${svgName}${sufix[1]}`)
      );
      return Component;
    } else {
      const Component = React.lazy(() =>
        import(`screens/assets/svgs/components/${svgName}${sufix[0]}`)
      );
      return Component;
    }
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  if (carregaSvg) {
    return (
      <Fragment>
        <div className="loaderSvg">
          <div className="loaderBolinha ">
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
          </div>
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        {props.children}
        <Suspense
          fallback={
            <Fragment>
              <div className="loaderSvg"></div>
            </Fragment>
          }
        >
          {props.acessibilidadeItens}
          <div
            tabIndex="-1"
            aria-hidden="true"
            className={`svgInteractive ${
              props.className ? props.className : ""
            }`}
          >
            <SVGComponentRender {...props} />
          </div>
        </Suspense>
      </Fragment>
    );
  }
}

export default SvgInterativo;
