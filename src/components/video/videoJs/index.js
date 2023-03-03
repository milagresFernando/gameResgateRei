// Css
import "./index.scss";

import React, { useState, useContext } from "react";
import GlobalState from "contexts/globalState";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "@silvermine/videojs-quality-selector/dist/css/quality-selector.css";
require("@silvermine/videojs-quality-selector/")(videojs);

export const VideoJS = (props) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);

  const dataSetup = props.dontHideControlBar
    ? '{ "inactivityTimeout": 0 }'
    : "";

  const { isIos, isIphone, isSafari } = useContext(GlobalState);

  const [firstClickIosSafari, setFirstClickIosSafari] = useState(false);

  const { onReady } = props;
  let isMobilePlaying = false;

  let controlBarItems;
  if (!props.videoElements.controlBar) {
    controlBarItems = "";
  } else {
    controlBarItems = [...props.videoElements.controlBar.children];
  }

  const controlBarChildren = props.isInteractive
    ? [
        "playToggle",
        "progressControl",
        "volumePanel",
        "qualitySelector",
        "subsCapsButton",
        "fullscreenToggle",
        ...controlBarItems,
      ]
    : [
        "playToggle",
        "progressControl",
        "volumePanel",
        "qualitySelector",
        "subsCapsButton",
        "fullscreenToggle",
        ...controlBarItems,
      ];

  const options = {
    autoplay:
      props.videoElements.autoplay == undefined
        ? false
        : props.videoElements.autoplay
        ? props.videoElements.autoplay
        : false,
    muted:
      props.videoElements.autoplay == undefined
        ? false
        : props.videoElements.autoplay
        ? props.videoElements.autoplay
        : false,
    controls:
      props.videoElements.controls == undefined
        ? true
        : props.videoElements.controls == false
        ? props.videoElements.controls
        : true,

    responsive:
      props.videoElements.responsive == undefined
        ? true
        : props.videoElements.responsive == false
        ? props.videoElements.responsive
        : true,

    poster: props.videoElements.poster,
    fluid:
      props.videoElements.fluid == undefined
        ? true
        : props.videoElements.fluid == false
        ? props.videoElements.fluid
        : true,

    controlBar: {
      children: [...controlBarChildren],
    },

    playsinline: isIos ? true : false,
    sources: [
      {
        src: props.videoElements.videoHd,
        type: "video/mp4",
        label: "HD",
        selected: true,
      },
      // {
      //   src: props.videoElements.videoSd,
      //   type: "video/mp4",
      //   label: "SD",
      // },
    ],
    tracks: [
      {
        src: props.videoElements.legenda,
        kind: "captions",
        srclang: "pt-br",
        label: "Português-Br",
      },
    ],
  };

  //botao para funcionar o botao de legenda no ios e safari quando da play a primeira vez no video
  function handleBtnForSafariIos() {
    if (isSafari || isIphone) {
      if (!firstClickIosSafari || !props.firstClickIosSafari) {
        playerRef.current.src([
          {
            src: props.videoElements.videoHd,
            type: "video/mp4",
            label: "HD",
            selected: true,
          },
          {
            src: props.videoElements.videoSd,
            type: "video/mp4",
            label: "SD",
          },
        ]);

        let oldTrack = playerRef.current.remoteTextTracks();
        playerRef.current.removeRemoteTextTrack(oldTrack[0]);
        playerRef.current.addRemoteTextTrack(
          {
            src: props.videoElements.legenda,
            kind: "captions",
            srclang: "pt-br",
            label: "Português-Br",
          },
          true
        );

        playerRef.current.play();
        setFirstClickIosSafari(true);
      }
    }
  }

  React.useEffect(() => {
    const startWrapper = document.createElement("div");
    startWrapper.classList.add("startWrapper");
    const startButton = document.createElement(
      props.startButtonCustom.tagElement
        ? props.startButtonCustom.tagElement
        : "btn"
    );
    if (props.startButtonCustom != null) {
      const startButtonContent = document.createTextNode(
        props.startButtonCustom.content ? props.startButtonCustom.content : ""
      );
      startButton.classList.add(
        props.startButtonCustom.className
          ? props.startButtonCustom.className
          : ""
      );
      startButton.appendChild(startButtonContent);
      startWrapper.appendChild(startButton);

      startWrapper.addEventListener("click", function () {
        playerRef.current.play();
        this.style.display = "none";
      });
    }

    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");
      videoElement.classList.add("vjs-big-play-centered");
      videoElement.setAttribute("data-setup", dataSetup);

      props.startButtonCustom != null &&
        videoRef.current.appendChild(startWrapper);
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        onReady && onReady(player);

        player.on("ended", function (evt) {
          player.hasStarted(false);
          //mostra botao de replay quando o video termina
          if (!props.hideReplayButton) {
            if (
              evt.target.querySelector(
                ".vjs-big-play-button .vjs-icon-placeholder"
              ) != null
            ) {
              evt.target
                .querySelector(".vjs-big-play-button .vjs-icon-placeholder")
                .classList.add("vjs-icon-replay");

              evt.target
                .querySelector(".vjs-big-play-button .vjs-icon-replay")
                .classList.remove("vjs-icon-placeholder");
            }
            isMobilePlaying = false;
          } else {
            evt.target.querySelector(".vjs-big-play-button").style.display =
              "none";
          }
        });
        if (!props.mobileSvg) {
          player.on("touchstart", function (evt) {
            //habilita poder clicar na tela no mobile e pausar e dar play no video
            if (!this.currentTime() == 0) {
              if (evt.target.nodeName === "VIDEO") {
                if (!isMobilePlaying) {
                  player.play();
                } else {
                  player.pause();
                }
              }
              isMobilePlaying = !isMobilePlaying;
            } else {
              isMobilePlaying = true;
            }
          });
        }
      }));
    } else {
      // you can update player here [update player through props]
      // const player = playerRef.current;
      // player.autoplay(options.autoplay);
      // player.src(options.sources);
    }
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div
      className={`player ${props.className ? props.className : ""}`}
      id={props.id}
    >
      {(isSafari || isIphone) &&
        !firstClickIosSafari &&
        !props.firstClickIosSafari && (
          <div
            className="btnForSafariIos"
            onClick={() => handleBtnForSafariIos()}
          ></div>
        )}

      <div data-vjs-player>
        <div ref={videoRef} />
      </div>
    </div>
  );
};

export default VideoJS;
