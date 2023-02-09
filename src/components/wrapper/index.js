// Css
import "./index.scss";

// React Elements/Hooks
import { Fragment, useRef, useState } from "react";

function Wrapper(props) {
  const containerRef = useRef(); //IMPORTANTE
  return (
    <main
      ref={containerRef}
      className={`wrapper ${props.className ? props.className : ""} `}
    >
      {props.children}
    </main>
  );
}

export default Wrapper;
