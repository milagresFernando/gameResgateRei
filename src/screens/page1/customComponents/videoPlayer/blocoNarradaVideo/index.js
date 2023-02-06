// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import VideoChangeByVideo from "components/video/videoWithMenu/changeByVideo";
import Title from "components/texts/title";

//Video Elementos
import poster from "screens/assets/videos/capaVideo.png";

function BlocoNarradaVideo(props) {
  const videosFile = "videoByVideo01"; //coloque o nome do arquivo JSON

  const videoElements = {
    poster,
    videosFile,
    hideOnClick: false,
    centerOnHide: true,
  };
  return (
    <Fragment>
      <Col xs="12">
        <Title
          typeH="4"
          className=""
          content={
            <Fragment>
              Player com Menu Retrátil (Aula Narrada / Troca entre Vídeos)
            </Fragment>
          }
        />
      </Col>
      <VideoChangeByVideo videoElements={videoElements} menuSide="right" />
    </Fragment>
  );
}

export default BlocoNarradaVideo;
