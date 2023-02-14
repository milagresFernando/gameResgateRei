// React Elements/Hooks
import { useState, Fragment, useEffect, useContext, useRef } from "react";
import React from "react";

// Components

import VideoJS from "components/video/videoJs";
import Transitions from "components/transitions";

//Services
import Caminhos from "services/caminhos";

//Video Elementos
import poster from "screens/assets/videos/capaVideo.png";

//Functions
import generateId from "globalFunctions/generateId";
import GlobalState from "contexts/globalState";

function Fase4(props) {
  const [randomId, setRandomId] = useState("");
  const [load, setLoad] = useState(false);
  const [actualVideo, setActualVideo] = useState("");
  const [videoElements, setVideoElements] = useState({});
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [iphoneClass, setIphoneClass] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [ready, setReady] = useState(false);

  const { isIphone, isSafari } = useContext(GlobalState);

  const elementsRef = useRef(null);
  const playerRef = useRef(null);

  async function loadData() {
    const data = await Caminhos.getCaminhoById(props.caminho);
    const caminhoData = data;
    return caminhoData;
  }

  useEffect(() => {
    props.setOverflow(true);
  }, [props.faseControlTransition]);

  useEffect(async () => {
    if (props.caminho != 0) {
      const caminhosLoaded = await loadData();
      setActualVideo(caminhosLoaded.videos[props.actualVideo].video);
    }
  }, [props.caminho]);

  useEffect(async () => {
    if (actualVideo != "") {
      const resultVideoData = loadVideosPaths(actualVideo);
      let pathRes;

      pathRes = await resultVideoData.videoHd;
      const videoHd = pathRes.default;

      pathRes = await resultVideoData.videoSd;
      const videoSd = pathRes.default;

      pathRes = await resultVideoData.legenda;
      const legenda = pathRes.default;

      setVideoElements({ videoHd, videoSd, poster, legenda, autoplay: true });

      setRandomId(generateId());
      setLoad(true);
    }
  }, [actualVideo]);

  //checa se chegou no fim do vídeo
  useEffect(() => {
    if (isEnd) {
      props.setControlTransition((prev) => !prev);
      props.setIsFinished(true);
    }
  }, [isEnd]);

  // useEffect(() => {
  //   if (load && ready) {
  //     playerRef.current.play();
  //   }
  // }, [load, ready]);

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on("ended", function (evt) {
      console.log("fim");
      setIsEnd(true);
    });

    setReady(true);
  };

  const options = {
    animation: {
      type: "fade",
      timeout: { appear: 1, enter: 600, exit: 300 },
      typeInteraction: "switch",
      scroll: true,
    },
  };

  function loadVideosPaths(video) {
    const videosPaths = {
      videoHd: import(`screens/assets/videos/${video}.mp4`),
      videoSd: import(`screens/assets/videos/${video}_360p.mp4`),
      legenda: import(`screens/assets/videos/${video}.vtt`),
    };

    return videosPaths;
  }

  useEffect(() => {
    if (load && props.faseControlTransition) {
      //clone do botao full screen do video js e set de um novo bind

      const fullScreenButton = document.querySelector(
        `#${randomId} .vjs-fullscreen-control`
      );
      const fullScreenButtonClone = fullScreenButton.cloneNode(true);
      document.querySelector(`#${randomId} .vjs-fullscreen-control`).remove();

      document
        .querySelector(`#${randomId} .vjs-control-bar`)
        .appendChild(fullScreenButtonClone);

      fullScreenButtonClone.addEventListener("click", function (event) {
        this.querySelector(".vjs-icon-placeholder").classList.toggle(
          "exitFull"
        );
        //ajusta o player para funcionar em full screen no Iphone
        if (isIphone) {
          setIphoneClass((prevIphoneClass) => !prevIphoneClass);

          document.body.classList.toggle("overflow");
          return;
        }

        if (!isFullScreen) {
          if (elementsRef.current.requestFullscreen) {
            elementsRef.current.requestFullscreen();
          } else if (elementsRef.current.webkitRequestFullscreen) {
            /* Safari */
            elementsRef.current.webkitRequestFullscreen();
          } else if (elementsRef.current.msRequestFullscreen) {
            /* IE11 */
            elementsRef.current.msRequestFullscreen();
          }
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) {
            /* Safari */
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) {
            /* IE11 */
            document.msExitFullscreen();
          }
        }
        setIsFullScreen(!isFullScreen);
      });
    }
  }, [load, isFullScreen]);

  if (load == false) {
    return <div>Carregando</div>;
  } else {
    return (
      <Fragment>
        <Transitions
          interact={props.faseControlTransition}
          options={options.animation}
          typeInteraction={options.animation.typeInteraction} //'oneClick', 'switch', 'hideElement'
        >
          <div
            className={`singleVideoWrapper videoGame ${
              iphoneClass ? "iphoneClass" : ""
            }`}
            ref={elementsRef}
          >
            <VideoJS
              className="full hideControlBar mb-0"
              videoElements={videoElements}
              onReady={handlePlayerReady}
              dontHideControlBar
              hideReplayButton={true}
              id={randomId}
            />
          </div>
        </Transitions>
      </Fragment>
    );
  }
}

export default Fase4;
