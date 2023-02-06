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

// Components
import { Container, Row, Col } from "react-bootstrap";
import List from "components/texts/lists";
import VideoJS from "components/video/videoJs";
import Btn from "components/buttons";

//Services
import VideosMenu from "services/videosMenu";

// Functions
import debounceTimeOut from "globalFunctions/debounceTimeOut";
import generateId from "globalFunctions/generateId";
import GlobalState from "contexts/globalState";

function ChangeByTime(props) {
  // hideOnClick esconde o menu quando o usuario clica
  // centerOnHide centraliza o video quando o menu é escondido
  // menuSide pode ser left ou right
  let initSelected = [];

  const { isIphone, isSafari } = useContext(GlobalState);

  const [selected, setSelected] = useState(initSelected);
  const [listItemsVideos, setlistItemsVideos] = useState(false);
  const [load, setLoad] = useState(false);
  const [show, setShow] = useState(true);
  const [overFlowBack, setOverFlowBack] = useState(false);
  const [firstClickIosSafari, setFirstClickIosSafari] = useState(false);
  const [randomId, setRandomId] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [iphoneClass, setIphoneClass] = useState(false);

  const elementsRef = useRef(null);
  const menuItemRef = useRef(null);
  const listRef = useRef(null);
  const playerRef = useRef(null);

  async function loadData() {
    const data = await VideosMenu.getVideoByTime(
      props.videoElements.capitulosFile
    );
    const videoData = data.chapters;
    return videoData;
  }

  useEffect(async () => {
    const videosChapters = await loadData();

    setlistItemsVideos(
      videosChapters.map((video, id) => {
        return {
          className: `listItemVideo ${selected[id] ? "selected" : ""}`,
          content: <Fragment>{video.name}</Fragment>,
          attribute: video.time,
        };
      })
    );

    initSelected = videosChapters.map(() => {
      return false;
    });
    setRandomId(generateId());
    setLoad(true);
  }, [selected]);

  //ajusta o align-items do flex caso tenha scroll para start
  useEffect(() => {
    if (load) {
      setTimeout(() => {
        setOverFlowBack(hasScroll());
      }, 600);
    }
  }, [load, show, isFullScreen]);

  useEffect(() => {
    const debouncedHandleResize = debounceTimeOut(function handleResize() {
      setOverFlowBack(hasScroll());
    }, 500);

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

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
          setIsFullScreen(!isFullScreen);
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
  ////////////////////////////////////////////////////////////

  function hasScroll() {
    if (listRef.current.clientHeight > menuItemRef.current.clientHeight) {
      return true;
    } else {
      return false;
    }
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on("timeupdate", function (evt) {
      let newSelected = [...selected];
      const tempoVideo = Math.floor(this.currentTime());
      listItemsVideos.forEach((chapter, id) => {
        //verifica se esta no ultimo item do video e aplica o selected
        if (
          id == listItemsVideos.length - 1 &&
          tempoVideo >= chapter.attribute
        ) {
          newSelected[id] = true;
          //caso nao esteja no ultimo, vai comparando se esta entre o atual e o proximo e aplica o select
        } else if (
          tempoVideo >= chapter.attribute &&
          tempoVideo < listItemsVideos[id + 1].attribute
        ) {
          newSelected[id] = true;
        }
      });
      setSelected(newSelected);
    });
  };

  function handleChapter(e) {
    if (isSafari || isIphone) {
      if (!firstClickIosSafari) {
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
      }
    }

    const time = e.currentTarget.getAttribute("attribute");
    let newSelected = [...selected];

    listItemsVideos.forEach((chapter, id) => {
      if (time == chapter.attribute) {
        newSelected[id] = true;
      }
    });

    setSelected(newSelected);
    playerRef.current.play();
    playerRef.current.currentTime(time);
    props.videoElements.hideOnClick && setShow(false);

    setFirstClickIosSafari(true);
  }

  function handleClose() {
    setShow(!show);
  }

  if (load == false) {
    return <div>Carregando</div>;
  } else {
    return (
      <Fragment>
        <Row
          className={`playerChangeByTime ${
            props.menuSide == "right" ? "right" : "left"
          } ${props.videoElements.centerOnHide ? "centerOnHide" : ""} ${
            show ? "opened" : "closed"
          } ${iphoneClass ? "iphoneClass" : ""}`}
          ref={elementsRef}
        >
          <Btn
            className={`closeButton ${show ? "opened" : "closed"}`}
            onClick={() => handleClose()}
          >
            <span></span>
            <div className="leitorTela">{`${show ? "Abrir" : "Fechar"}`}</div>
          </Btn>

          <div className={`menu ${show ? "opened" : "closed"}`}>
            <div
              className={`menuChapter ${overFlowBack ? "oveflowOn" : ""} ${
                isIphone ? "iphoneClassMenuChapter" : ""
              }`}
              ref={menuItemRef}
            >
              <div
                ref={listRef}
                className={`${isIphone ? "iphoneClassList" : ""}`}
              >
                <List
                  tagElement="ol"
                  listItens={listItemsVideos}
                  onClick={(e) => handleChapter(e)}
                  className="listItemsVideo"
                />
              </div>
            </div>
          </div>
          <div className="ps-0 pe-0 video">
            <VideoJS
              id={randomId}
              className="mb-0 "
              videoElements={props.videoElements}
              onReady={handlePlayerReady}
              firstClickIosSafari={firstClickIosSafari}
            />
          </div>
        </Row>
      </Fragment>
    );
  }
}

export default ChangeByTime;
