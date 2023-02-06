// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "components/texts/title";

//Plugin
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";

function AudioJs(props) {
  const headerItems = props.titleSetings && (
    <Title
      typeH={props.titleSetings.tagTitle}
      className={props.titleSetings.titleClassName}
      content={<Fragment>{props.titleSetings.titleContent}</Fragment>}
    />
  );

  const audioFileName = props.src
    .split("/")
    [props.src.split("/").length - 1].split(".")[0];

  const transcriptionButton = props.transcricao && (
    <div className="transcricao">
      <a
        className="btn-transcricao"
        href={props.transcricao}
        rel="noreferrer"
        download={audioFileName}
        target="_blank"
        title="Transcrição do áudio"
      ></a>
    </div>
  );
  const downloadButton = (
    <div className="download">
      <a
        className="btn-download"
        href={props.src}
        rel="noreferrer"
        download={audioFileName}
        target="_blank"
        title="Download do áudio"
      ></a>
    </div>
  );

  const downloadTranscriptionWrapper = (
    <div className="dTWrapper">
      {downloadButton}
      {transcriptionButton}
    </div>
  );
  const play = <span className="play"></span>;
  const pause = <span className="pause"></span>;
  const forward = <span className="forward"></span>;
  const rewind = <span className="rewind"></span>;
  const volume = <span className="volumeButton"></span>;
  const volumeMute = <span className="muteButton"></span>;

  return (
    <AudioPlayer
      className={` ${props.className ? props.className : ""}`}
      header={headerItems}
      src={props.src}
      autoPlay={false}
      layout="horizontal-reverse"
      showJumpControls={false}
      customIcons={{ play, pause, forward, rewind, volume, volumeMute }}
      customControlsSection={["MAIN_CONTROLS"]}
      customProgressBarSection={[
        "PROGRESS_BAR",
        "CURRENT_TIME",
        <span className="rhap_time">/</span>,
        "DURATION",
        "VOLUME_CONTROLS",
        downloadTranscriptionWrapper,
      ]}
    />
  );
}

export default AudioJs;
