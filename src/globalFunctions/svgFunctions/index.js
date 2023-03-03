import { eventWrapper } from "@testing-library/user-event/dist/utils";

function svgFunctions(params) {
  return {
    ["handle1"]: function (params) {
      alert("crie uma função aqui");
    },
    ["clickButtonShowOneItem"]: function (botaoAtivoNum) {
      const { botoes, setAtivo } = params;
      const botoesClone = [...botoes];
      botoesClone.forEach((ativo, index) => {
        if (botaoAtivoNum === index) {
          botoesClone[index].check = true;
          botoesClone[index].isAtivo = true;
        } else {
          botoesClone[index].isAtivo = false;
        }
      });
      setAtivo(botoesClone);
    },
    ["clickButtonShow"]: function (botaoAtivoNum) {
      console.log(params);

      const { botoes, setAtivo } = params;
      const botoesClone = [...botoes];
      botoesClone[botaoAtivoNum].check = true;
      botoesClone[botaoAtivoNum].isAtivo = true;
      setAtivo(botoesClone);
    },
    ["loadVideo"]: function (botaoAtivoNum) {
      const {
        interativeElementsData,
        setActualVideoId,
        setTimeActual,
        setClassInCounter,
        setTimersVisible,
        setTimers,
        resetTimers,
        setCalcRemaingTime,
        baseSizeCounter,
        dataHd,
        playerRef,
        dataLeg,
        randomId,
        setIsEnd,
        setLastVideo,
      } = params;
      let idItem;
      interativeElementsData.forEach((interativeElement, id) => {
        interativeElement.gotoVideoId.forEach((goToVideoObj, id) => {
          if (goToVideoObj.gotoVideoId == botaoAtivoNum) {
            idItem = goToVideoObj.gotoVideoId - 1;
            setActualVideoId(goToVideoObj.gotoVideoId - 1);
          }
        });
      });

      setIsEnd(false);
      setTimeActual(0);
      setClassInCounter(false);
      setTimersVisible([]);
      setTimers(resetTimers(interativeElementsData));
      setCalcRemaingTime(baseSizeCounter);

      interativeElementsData[idItem].lastVideo && setLastVideo(true);

      const controlBar = document.querySelector(
        `#${randomId} .vjs-control-bar`
      );

      const subTitleBtn = controlBar.querySelector(".vjs-subs-caps-button");
      const qualityBtn = controlBar.querySelector(".vjs-quality-selector");

      qualityBtn.style.pointerEvents = "auto";
      subTitleBtn.style.pointerEvents = "auto";
      playerRef.current.src([
        {
          src: dataHd[idItem],
          type: "video/mp4",
          label: "HD",
          selected: true,
        },
        // {
        //   src: dataSd[idItem],
        //   type: "video/mp4",
        //   label: "SD",
        // },
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
    },
  };
}

export default svgFunctions;
