// React Elements/Hooks
import { useState, Fragment, useRef } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import InterativeChangeByVideo from "components/video/interative/interativeChangeByVideo";

import Title from "components/texts/title";

//Video Elementos
import poster from "screens/assets/videos/capaVideo.png";

function BlocoInterativoBotoes(props) {
  const videosFile = "videosInterative"; //coloque o nome do arquivo JSON

  const videoElements = {
    poster,
    videosFile,
  };

  const options = {
    counter: {
      // typeCounter: "bar",
      // typeCounter: "time",
      barSizePx: 100,
      typeCounter: "barAndTime",
    },
    resetButton: {
      position: "topLeft",
      // position: "topRight",
      show: "fixed",
      //show: "hover",
    },

    backButton: {
      // position: "topLeft",
      position: "topRight",
      show: "fixed",
      // show: "hover",
    },
  };

  const interativeElements = [
    {
      actualVideoId: 1,
      gotoVideoId: 2,
      ref: useRef(null),
      element: "button",
      content: "puxa video2",
      className: "btn-padrao btn-rounded btn-border btn btn-primary btn-md",
      timeStart: 1,
      timeEnd: 5,
    },
    {
      actualVideoId: 1,
      gotoVideoId: 3,
      ref: useRef(null),
      element: "button",
      content: "puxa video3",
      className: "btn-padrao btn-rounded btn-border btn btn-primary btn-md",
      timeStart: 1,
      timeEnd: 5,
    },
    {
      actualVideoId: 2,
      gotoVideoId: 4,
      ref: useRef(null),
      element: "button",
      content: "puxa video4",
      className: "btn-padrao btn-rounded btn-border btn btn-primary btn-md",
      timeStart: 2,
      timeEnd: 5,
    },
    {
      actualVideoId: 3,
      gotoVideoId: 1,
      ref: useRef(null),
      element: "button",
      content: "puxa video1",
      className: "btn-padrao btn-rounded btn-border btn btn-primary btn-md",
      timeStart: 2,
      timeEnd: 5,
    },
  ];
  return (
    <Fragment>
      <Col xs="12">
        <Title
          typeH="4"
          className=""
          content={<Fragment>Vídeo interativo</Fragment>}
        />
      </Col>
      <InterativeChangeByVideo
        videoElements={videoElements}
        interativeElements={interativeElements}
        options={options}
      />
    </Fragment>
  );
}

export default BlocoInterativoBotoes;
