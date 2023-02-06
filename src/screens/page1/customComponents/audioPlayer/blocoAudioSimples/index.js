// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import AudioJs from "components/audio";

import audioFile from "screens/assets/audio/podcast_relevantes.mp3";
import transcricao from "screens/assets/audio/podcast_relevantes.pdf";

//Imagens

function BlocoAudioSimples(props) {
  const titleSetings = {
    titleContent: "Competências Essencias",
    tagTitle: "5",
    titleClassName: "",
  };

  return (
    <Fragment>
      <AudioJs
        className="mb-3"
        src={audioFile}
        transcricao={transcricao}
        titleSetings={titleSetings}
      />
    </Fragment>
  );
}

export default BlocoAudioSimples;
