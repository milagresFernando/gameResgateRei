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

//Functions
import debounceTimeOut from "globalFunctions/debounceTimeOut";
import generateId from "globalFunctions/generateId";
import GlobalState from "contexts/globalState";

function ChangeByVideo(props) {
  // hideOnClick esconde o menu quando o usuario clica
  // centerOnHide centraliza o video quando o menu é escondido
  // menuSide pode ser left ou right
  let initSelected = [];

  const { isIphone } = useContext(GlobalState);

  const [load, setLoad] = useState(false);
  const [dataHd, setDataHd] = useState([]);
  const [dataSd, setDataSd] = useState([]);
  const [dataLeg, setDataLeg] = useState([]);
  const [firstClickIosSafari, setFirstClickIosSafari] = useState(false);
  const [videoElements, setVideoElements] = useState({});
  const [selected, setSelected] = useState(initSelected);
  const [listVideos, setListVideos] = useState(false);
  const [show, setShow] = useState(true);
  const [overFlowBack, setOverFlowBack] = useState(false);
  const [randomId, setRandomId] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [iphoneClass, setIphoneClass] = useState(false);

  const elementsRef = useRef(null);
  const menuItemRef = useRef(null);
  const listRef = useRef(null);
  const playerRef = useRef(null);

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

    setListVideos(
      videos.map((video, id) => {
        return {
          className: `listItemVideo ${selected[id] ? "selected" : ""}`,
          content: <Fragment>{video.name}</Fragment>,
          attribute: video.video,
          id: id,
        };
      })
    );

    initSelected = videos.map(() => {
      return false;
    });

    setRandomId(generateId());
    setLoad(true);
  }, [load, selected]);

  // ajusta o align-items do flex caso tenha scroll para start
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
  };

  function handleVideo(e) {
    setFirstClickIosSafari(true);
    const video = e.currentTarget.getAttribute("attribute");
    let idItem;
    let newSelected = [...selected];

    listVideos.forEach((listItem, id) => {
      if (listItem.attribute == video) {
        idItem = listItem.id;
        newSelected[id] = true;
      } else {
        newSelected[id] = false;
      }
    });

    setSelected(newSelected);

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
    props.videoElements.hideOnClick && setShow(false);
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
          className={`playerChangeByVideo ${
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
                  listItens={listVideos}
                  onClick={(e) => handleVideo(e)}
                  className="listItemsVideo"
                />
              </div>
            </div>
          </div>
          <div className="ps-0 pe-0 video">
            <VideoJS
              id={randomId}
              className="mb-0 "
              videoElements={videoElements}
              onReady={handlePlayerReady}
              firstClickIosSafari={firstClickIosSafari}
            />
          </div>
        </Row>
      </Fragment>
    );
  }
}

export default ChangeByVideo;
