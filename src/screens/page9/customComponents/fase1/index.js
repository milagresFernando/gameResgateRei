// React Elements/Hooks
import { useState, Fragment, useRef, useEffect } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import InterativeChangeByVideoSvg from "components/video/interative/interativeChangeByVideoSvg";
import Transitions from "components/transitions";

import Title from "components/texts/title";

//Video Elementos
import poster from "screens/assets/videos/capaVideo.png";

function Fase1(props) {
  const videosFile = "videosInterativeSvgGame"; //coloque o nome do arquivo JSON

  const videoElements = {
    poster,
    videosFile,
  };

  // const [fase1ControlTransition, setFase1ControlTransition] = useState(false);

  useEffect(() => {
    props.setControlTransition((prev) => !prev);
  }, []);

  useEffect(() => {
    props.setOverflow(true);
  }, [props.faseControlTransition]);

  const options = {
    videoJs: {
      className: "full hideControlBar",
    },

    startButton: {
      tagElement: "btn",
      className: "startButton",
      content: "Começar",
    },

    backButton: {
      // position: "topLeft",
      position: "topRight",
      show: "fixed",
      //show: "hover",
    },

    animation: {
      type: "fade",
      timeout: { appear: 1, enter: 600, exit: 300 },
      typeInteraction: "switch",
      scroll: true,
    },
  };

  const svgInterativeElements = [
    {
      actualVideoId: 1,
      svgName: "Apresentacao",
      ref: useRef(null),
      className: "",
      timeStart: 3,
      timeEnd: 11,
      lastVideo: false,
      botoes: [{ gotoVideoId: 2 }, { gotoVideoId: 3 }, { gotoVideoId: 4 }],
    },
    {
      actualVideoId: 2,
      ref: useRef(null),
      className: "",
      lastVideo: true,
    },
    {
      actualVideoId: 3,
      ref: useRef(null),
      className: "",
      lastVideo: true,
    },
    {
      actualVideoId: 4,
      ref: useRef(null),
      className: "",
      lastVideo: true,
    },
  ];
  return (
    <Fragment>
      <Transitions
        interact={props.faseControlTransition}
        options={options.animation}
        typeInteraction={options.animation.typeInteraction} //'oneClick', 'switch', 'hideElement'
      >
        <InterativeChangeByVideoSvg
          svgInterativeElements={svgInterativeElements}
          videoElements={videoElements}
          options={options}
          setControlTransition={props.setControlTransition}
          setIsFinished={props.setIsFinished}
          setCaminho={props.setCaminho}
        />
      </Transitions>
    </Fragment>
  );
}

export default Fase1;
