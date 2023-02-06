// Css
import "./index.scss";

// React Elements/Hooks
import React, {
  useState,
  Fragment,
  useEffect,
  useRef,
  useContext,
} from "react";

import GlobalState from "contexts/globalState";

// Components
import { Container, Row, Col } from "react-bootstrap";
import VideoJS from "components/video/videoJs";
import Btn from "components/buttons";
//Services
import VideosMenu from "services/videosMenu";

//Functions
import debounceTimeOut from "globalFunctions/debounceTimeOut";
import generateId, { createRandomIds } from "globalFunctions/generateId";

function InterativeChangeByVideo(props) {
  //options
  //caso nao queria um counter, apague no componente pai o options.counter
  //caso queira um contador de barra, passe o "barSizePx", para determinar do tamanho da barra em pixels
  //props.options.counter.typeCounter aceita os parametros "bar", "time" e "barAndTime"

  //interativeElements
  // actualVideoId: é o id do vídeo em que o elemento deve aparecer
  // gotoVideoId: é o id do vídeo em que o elemento deve ir
  // ref: parametro obrigatório, nao mexer
  // element: passe uma tag html, para ser renderizada
  // content: é o conteudo em texto do elemento html renderizado
  // className: classe css do elemento
  // timeStart: tempo em segundos que o elemento vai aparecer
  // timeEnd: tempo em segundos que o elemento vai desaparecer

  const { isIphone, isTouch } = useContext(GlobalState);
  const baseSizeCounter =
    props.options.counter && props.options.counter.barSizePx
      ? props.options.counter.barSizePx
      : 0;
  const [load, setLoad] = useState(false);
  const [iphoneClass, setIphoneClass] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [timeActual, setTimeActual] = useState(0);
  const [remaingTime, setRemaingTime] = useState(0);
  const [calcRemaingTime, setCalcRemaingTime] = useState(baseSizeCounter);
  const [classInCounter, setClassInCounter] = useState(false);
  const [timers, setTimers] = useState([]);
  const [timersVisible, setTimersVisible] = useState([]);
  const [dataHd, setDataHd] = useState([]);
  const [dataSd, setDataSd] = useState([]);
  const [dataLeg, setDataLeg] = useState([]);
  const [actualVideoId, setActualVideoId] = useState(0);
  const [videoElements, setVideoElements] = useState({});
  const [interativeElements, setInterativeElements] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [interativeElementsData, setInterativeElementsData] = useState(false);
  const playerRef = useRef(null);
  const elementsRef = useRef(null);
  const [randomIds, setRandomIds] = useState([]);
  const [randomId, setRandomId] = useState("");

  async function loadData() {
    const data = await VideosMenu.getVideoByVideo(
      props.videoElements.videosFile
    );

    const videoData = data.videos;
    return videoData;
  }

  function loadVideosPaths(videos) {
    const videosPaths = videos.map((video) => {
      return {
        videoHd: import(`screens/assets/videos/${video.video}.mp4`),
        videoSd: import(`screens/assets/videos/${video.video}_360p.mp4`),
        legenda: import(`screens/assets/videos/${video.video}.vtt`),
        id: video.id,
      };
    });
    return videosPaths;
  }

  useEffect(async () => {
    const videos = await loadData();
    const resultPath = loadVideosPaths(videos);
    const cloneDataHd = [];
    const cloneDataSd = [];
    const cloneDataLeg = [];
    const cloneDataId = [];
    const cloneVideoElements = { ...videoElements };
    let dataPath;
    let pathRes;

    resultPath.forEach(async (path, id) => {
      pathRes = await path.videoHd;
      cloneDataHd.push(pathRes.default);

      pathRes = await path.videoSd;
      cloneDataSd.push(pathRes.default);

      pathRes = await path.legenda;
      cloneDataLeg.push(pathRes.default);

      cloneDataId.push(path.id);
    });

    setDataHd(cloneDataHd);
    setDataSd(cloneDataSd);
    setDataLeg(cloneDataLeg);

    dataPath = await resultPath[0].videoHd;
    cloneVideoElements.videoHd = dataPath.default;

    dataPath = await resultPath[0].videoSd;
    cloneVideoElements.videoSd = dataPath.default;

    dataPath = await resultPath[0].legenda;
    cloneVideoElements.legenda = dataPath.default;

    setVideoElements(cloneVideoElements);

    setInterativeElementsData(
      props.interativeElements.map((interativeElement, id) => {
        return {
          id: randomIds[id],
          actualVideoId: interativeElement.actualVideoId,
          gotoVideoId: interativeElement.gotoVideoId - 1,
          timeStart: interativeElement.timeStart,
          timeEnd: interativeElement.timeEnd,
          remaingTime: interativeElement.timeEnd - interativeElement.timeStart,
        };
      })
    );

    setRandomId(generateId());
    setLoad(true);
  }, [load]);

  useEffect(() => {
    if (interativeElementsData != false) {
      setRemaingTime(resetTimers(interativeElementsData));
    }
  }, [interativeElementsData, load]);

  useEffect(() => {
    if (interativeElementsData != false) {
      //reseta o timer toda vez que um elemento novo surge em tela
      setTimers(resetTimers(interativeElementsData));

      //seta os elementos clicaveis em tela
      setRandomIds(createRandomIds(props.interativeElements));
      setInterativeElements(
        props.interativeElements.map((interativeElement, id) => {
          return (
            <interativeElement.element
              ref={interativeElement.ref}
              type={interativeElement.element == "button" && "button"}
              key={id}
              id={randomIds[id]}
              className={`${
                interativeElement.className ? interativeElement.className : ""
              } interativeElement`}
              onClick={(e) => handleVideo(e)}
            >
              {interativeElement.content}
            </interativeElement.element>
          );
        })
      );
    }
  }, [interativeElementsData]);

  //controla a visibilidade dos elementos, conforme o tempo
  useEffect(() => {
    if (
      load &&
      interativeElementsData != false &&
      interativeElements != false
    ) {
      interativeElements.forEach((interativeElement, id) => {
        if (actualVideoId != interativeElementsData[id].actualVideoId - 1) {
          controlInOutElements("out", interativeElement);

          return;
        }
        if (interativeElementsData[id].timeStart == timeActual) {
          controlInOutElements("counter", interativeElement);

          controlInOutElements("in", interativeElement);
        }
        if (interativeElementsData[id].timeEnd <= timeActual) {
          controlInOutElements("out", interativeElement);
          setClassInCounter(false);
          setTimersVisible([]);
        }
      });
    }
  }, [
    timers,
    timeActual,
    interativeElementsData,
    interativeElements,
    load,
    actualVideoId,
  ]);

  //controla a exibicao dos contadores de cada elemento
  useEffect(() => {
    const cloneTimers = [...timers];

    const cloneTimersVisible = [];
    if (load) {
      if (interativeElementsData != false) {
        interativeElementsData.forEach((interativeElement, id) => {
          //mostra somente o counter da vez, e faz o seu decrécimo
          if (
            actualVideoId == interativeElement.actualVideoId - 1 &&
            interativeElement.timeStart <= timeActual &&
            interativeElement.timeEnd >= timeActual
          ) {
            cloneTimers[id] = cloneTimers[id] - 1;
            setTimers(cloneTimers);

            setCalcRemaingTime(
              Math.floor(calcRemaingTime - baseSizeCounter / remaingTime[id])
            );
            if (props.options.counter?.typeCounter == "bar") {
              cloneTimersVisible.push(
                <div
                  key={id}
                  className={`counterItem ${
                    classInCounter ? "classInCounter" : ""
                  }`}
                  style={{
                    width: `${calcRemaingTime < 0 ? 0 : calcRemaingTime}px`,
                  }}
                ></div>
              );
            }

            if (props.options.counter?.typeCounter == "time") {
              cloneTimersVisible.push(
                <p
                  key={id}
                  className={`counterItem time ${
                    classInCounter ? "classInCounter" : ""
                  }`}
                >
                  {`${timers[id]} segundos`}
                </p>
              );
            }

            if (props.options.counter?.typeCounter == "barAndTime") {
              cloneTimersVisible.push(
                <div className="barAndTime" key={id}>
                  <div
                    className={`counterItem ${
                      classInCounter ? "classInCounter" : ""
                    }`}
                    style={{
                      width: `${calcRemaingTime < 0 ? 0 : calcRemaingTime}px`,
                    }}
                  ></div>
                  <div
                    className={`counterItem time ${
                      classInCounter ? "classInCounter" : ""
                    }`}
                  >
                    <p> {`${timers[id]} segundos`}</p>
                  </div>
                </div>
              );
            }
            setTimersVisible(cloneTimersVisible);
          }

          //reseta caso de um replay no video
          if (
            actualVideoId == interativeElement.actualVideoId - 1 &&
            interativeElement.timeEnd <= timeActual
          ) {
            setTimers(resetTimers(interativeElementsData));
            setCalcRemaingTime(baseSizeCounter);
          }
        });
      }
    }
  }, [
    timeActual,
    load,
    interativeElementsData,
    actualVideoId,
    classInCounter,
    remaingTime,
  ]);

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on("timeupdate", function (evt) {
      setTimeActual(Math.floor(this.currentTime()));
    });
  };

  function handleVideo(e) {
    const video = e.currentTarget.getAttribute("id");
    let idItem;

    interativeElementsData.forEach((interativeElement, id) => {
      if (interativeElement.id == video) {
        idItem = interativeElement.gotoVideoId;
        setActualVideoId(interativeElement.gotoVideoId);
      }
    });
    setTimeActual(0);
    setClassInCounter(false);
    setTimersVisible([]);
    setTimers(resetTimers(interativeElementsData));
    setCalcRemaingTime(baseSizeCounter);

    playerRef.current.src([
      {
        src: dataHd[idItem],
        type: "video/mp4",
        label: "HD",
        selected: true,
      },
      {
        src: dataSd[idItem],
        type: "video/mp4",
        label: "SD",
      },
    ]);

    let oldTrack = playerRef.current.remoteTextTracks();
    playerRef.current.removeRemoteTextTrack(oldTrack[0]);
    playerRef.current.addRemoteTextTrack(
      {
        src: dataLeg[idItem],
        kind: "captions",
        srclang: "pt-br",
        label: "Português-Br",
      },
      true
    );

    playerRef.current.play();
  }

  // reseta os tempos dos contadores atuais
  function resetTimers(interativeElementsData) {
    return interativeElementsData.map((interativeElement, id) => {
      return interativeElement.remaingTime;
    });
  }

  //controla os efeitos de entrada e saida
  function controlInOutElements(type, interativeElement) {
    if (type == "counter") {
      setTimeout(() => {
        setClassInCounter(true);
      }, 250);
    }
    if (type == "in") {
      interativeElement.ref.current.style.display = "block";

      setTimeout(() => {
        interativeElement.ref.current.classList.add("inInterative");
        interativeElement.ref.current.classList.remove("outInterative");
      }, 250);
    }
    if (type == "out") {
      interativeElement.ref.current.classList.add("outInterative");
      interativeElement.ref.current.classList.remove("inInterative");

      setTimeout(() => {
        interativeElement.ref.current.style.display = "none";
      }, 250);
    }
  }

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

  function handleOver() {
    setShowReset(true);
  }
  function handleLeave() {
    setShowReset(false);
  }

  function handleReset() {
    interativeElements.forEach((interativeElement, id) => {
      controlInOutElements("out", interativeElement);
    });
    setActualVideoId(0);
    setTimeActual(0);
    setClassInCounter(false);
    setTimersVisible([]);
    setTimers(resetTimers(interativeElementsData));
    setCalcRemaingTime(baseSizeCounter);

    playerRef.current.src([
      {
        src: dataHd[0],
        type: "video/mp4",
        label: "HD",
        selected: true,
      },
      {
        src: dataSd[0],
        type: "video/mp4",
        label: "SD",
      },
    ]);

    let oldTrack = playerRef.current.remoteTextTracks();
    playerRef.current.removeRemoteTextTrack(oldTrack[0]);
    playerRef.current.addRemoteTextTrack(
      {
        src: dataLeg[0],
        kind: "captions",
        srclang: "pt-br",
        label: "Português-Br",
      },
      true
    );

    playerRef.current.play();
  }

  if (load == false) {
    return <div>Carregando</div>;
  } else {
    return (
      <Fragment>
        <Row className={`interativeChangeByVideo`}>
          <div
            className={`${iphoneClass ? "iphoneClass" : ""} ps-0 pe-0 video`}
            ref={elementsRef}
            onMouseEnter={
              props.options.resetButton &&
              props.options.resetButton.show == "hover" &&
              !isTouch
                ? handleOver
                : undefined
            }
            onMouseLeave={
              props.options.resetButton &&
              props.options.resetButton.show == "hover" &&
              !isTouch
                ? handleLeave
                : undefined
            }
          >
            {props.options.resetButton && actualVideoId != 0 && (
              <Btn
                className={`btn-padrao btn-rounded btn-border icoReiniciar ${
                  props.options.resetButton.position
                } ${
                  showReset || props.options.resetButton.show == "fixed"
                    ? "showReset"
                    : "hideReset"
                }`}
                size="md"
                onClick={handleReset}
              >
                Reiniciar
              </Btn>
            )}
            <div className="wrapperElements">
              {interativeElements}
              {props.options.counter && (
                <div className="counter">{timersVisible}</div>
              )}
            </div>

            <VideoJS
              id={randomId}
              className="mb-0 "
              videoElements={videoElements}
              isInteractive
              onReady={handlePlayerReady}
            />
          </div>
        </Row>
      </Fragment>
    );
  }
}

export default InterativeChangeByVideo;
