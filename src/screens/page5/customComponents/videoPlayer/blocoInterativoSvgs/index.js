// React Elements/Hooks
import { useState, Fragment, useRef } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import InterativeChangeByVideoSvg from "components/video/interative/interativeChangeByVideoSvg";

import Title from "components/texts/title";

//Video Elementos
import poster from "screens/assets/videos/capaVideo.png";

function BlocoInterativoSvgs(props) {
  const videosFile = "videosInterativeSvg"; //coloque o nome do arquivo JSON

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
      // show: "hover",
    },

    backButton: {
      // position: "topLeft",
      position: "topRight",
      show: "fixed",
      //show: "hover",
    },
  };

  const svgInterativeElements = [
    {
      actualVideoId: 1,
      svgName: "InterativoVideoSvg_01",
      ref: useRef(null),
      className: "",
      timeStart: 1,
      timeEnd: 8,
      botoes: [
        { gotoVideoId: 1 },
        { gotoVideoId: 2 },
        { gotoVideoId: 3 },
        { gotoVideoId: 4 },
      ],
    },
    {
      actualVideoId: 2,
      svgName: "InterativoVideoSvg_01",
      ref: useRef(null),
      className: "",
      timeStart: 1,
      timeEnd: 8,
      botoes: [
        { gotoVideoId: 1 },
        { gotoVideoId: 2 },
        { gotoVideoId: 3 },
        { gotoVideoId: 4 },
      ],
    },
    {
      actualVideoId: 3,
      svgName: "InterativoVideoSvg_01",
      ref: useRef(null),
      className: "",
      timeStart: 1,
      timeEnd: 6,
      botoes: [
        { gotoVideoId: 1 },
        { gotoVideoId: 2 },
        { gotoVideoId: 3 },
        { gotoVideoId: 4 },
      ],
    },
    {
      actualVideoId: 4,
      svgName: "InterativoVideoSvg_01",
      ref: useRef(null),
      className: "",
      timeStart: 1,
      timeEnd: 6,
      botoes: [
        { gotoVideoId: 1 },
        { gotoVideoId: 2 },
        { gotoVideoId: 3 },
        { gotoVideoId: 4 },
      ],
    },
  ];
  return (
    <Fragment>
      <Col xs="12">
        <Title
          typeH="4"
          className=""
          content={<Fragment>Vídeo interativo Svg</Fragment>}
        />
      </Col>

      <InterativeChangeByVideoSvg
        svgInterativeElements={svgInterativeElements}
        videoElements={videoElements}
        options={options}
      />
    </Fragment>
  );
}

export default BlocoInterativoSvgs;
