// React Elements/Hooks
import { useState, Fragment, useEffect, useContext, useRef } from "react";
import React from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "components/texts/title";
import VideoJS from "components/video/videoJs";

//Video Elementos
import videoHd from "screens/assets/videos/opcao1.mp4";
import videoSd from "screens/assets/videos/vinheta_teste.mp4";
import poster from "screens/assets/videos/capaVideo.png";
import legenda from "screens/assets/videos/vinheta_teste.vtt";

//Functions
import generateId from "globalFunctions/generateId";
import GlobalState from "contexts/globalState";

function BlocoVideoSimples(props) {
  const videoElements = { videoHd, videoSd, poster, legenda };

  const [randomId, setRandomId] = useState("");
  const [load, setLoad] = useState(false);

  const [isFullScreen, setIsFullScreen] = useState(false);
  const [iphoneClass, setIphoneClass] = useState(false);
  const elementsRef = useRef(null);
  const { isIphone, isSafari } = useContext(GlobalState);

  useEffect(() => {
    setRandomId(generateId());
    setLoad(true);
  }, [load]);

  useEffect(() => {
    if (load) {
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
        <Col xs="12">
          <Title typeH="4" className="" content={<Fragment>Padrão</Fragment>} />
        </Col>
        <Col lg="9">
          <div
            className={`singleVideoWrapper ${iphoneClass ? "iphoneClass" : ""}`}
            ref={elementsRef}
          >
            <VideoJS
              className="mb-5"
              videoElements={videoElements}
              id={randomId}
            />
          </div>
        </Col>
      </Fragment>
    );
  }
}

export default BlocoVideoSimples;
