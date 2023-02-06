import * as React from "react";
import Slide from "@mui/material/Slide";
import { useEffect } from "react";
import { useState } from "react";
import { Collapse, Grow, Zoom } from "@mui/material";

function Transitions(props) {
  const [showMessage, setShowMessage] = useState(false);
  const [style, setStyle] = useState(props.options.style);
  const [loadClick, setLoadClick] = useState(false);

  function clicoAqui() {
    if (props.typeInteraction == "oneClick") {
      setStyle({ ...style, height: "100%" });
      setShowMessage(true);
    }

    if (props.typeInteraction == "switch") {
      showMessage
        ? setStyle({ ...style, height: 0 })
        : setStyle({ ...style, height: "100%" });
      setShowMessage((prev) => !prev);
    }
    if (props.typeInteraction == "switchGrow") {
      setShowMessage((prev) => !prev);
    }

    if (props.typeInteraction == "hideElement") {
      setStyle({ ...style, height: "100%" });

      props.setShowButton(false);
      setShowMessage(true);
    }
  }

  useEffect(() => {
    loadClick && clicoAqui();
    setLoadClick(true);
  }, [props.interact]);

  let transition =
    props.options.type == "collapse" ? (
      <Collapse
        orientation={props.options.orientation}
        in={showMessage}
        easing={props.options.easing && props.options.easing}
        timeout={props.options.timeout && props.options.timeout}
      >
        <div>{props.children}</div>
      </Collapse>
    ) : props.options.type == "slide" ? (
      <Slide
        direction={props.options.direction && props.options.direction}
        in={showMessage}
        easing={props.options.easing && props.options.easing}
        timeout={props.options.timeout && props.options.timeout}
        mountOnEnter
        unmountOnExit
      >
        <div>{props.children}</div>
      </Slide>
    ) : props.options.type == "slideRelative" ? (
      <Slide
        direction={props.options.direction && props.options.direction}
        in={showMessage}
        easing={props.options.easing && props.options.easing}
        timeout={props.options.timeout && props.options.timeout}
        mountOnEnter
        unmountOnExit
        container={props.containerRef.current}
      >
        <div>{props.children}</div>
      </Slide>
    ) : props.options.type == "grow" ? (
      <Grow
        in={showMessage}
        easing={props.options.easing && props.options.easing}
        timeout={props.options.timeout && props.options.timeout}
        style={style}
        mountOnEnter
        unmountOnExit
      >
        <div>{props.children}</div>
      </Grow>
    ) : props.options.type == "zoom" ? (
      <Zoom
        in={showMessage}
        easing={props.options.easing && props.options.easing}
        timeout={props.options.timeout && props.options.timeout}
        style={style}
      >
        <div>{props.children}</div>
      </Zoom>
    ) : (
      ""
    );

  return <>{transition}</>;
}

export default Transitions;
