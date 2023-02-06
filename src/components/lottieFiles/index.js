// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment, useEffect, useRef } from "react";

// Components
import React from "react";
import "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";

function LottieTae(props) {
  const [load, setLoad] = useState(false);
  const [acessoLottie, setAcessoLottie] = useState(false);

  const [options, setOptions] = useState({});

  const [interactivity, setInteractivity] = useState(false);
  const [change, setChange] = useState(false);

  const [countToAdvance, setCountToAdvance] = useState(1);

  const [animationState, setAnimationState] = useState({
    frameModifier: 0.03,
  });

  let cloneOptions;

  const lottieTae = useRef();

  useEffect(() => {
    if (lottieTae && lottieTae.current) {
      if (options.event == "noLoopAutoPlay") {
        lottieTae.current.removeAttribute("loop");
        lottieTae.current.removeAttribute("autoplay");
      }
      //interacao custom de chain
      //interacao Complete
      if (options && options.event == "complete") {
        let watchComplete = setInterval(() => {
          if (lottieTae.current && lottieTae.current._lottie) {
            let totalFrames = lottieTae.current._lottie.totalFrames;
            if (
              Math.ceil(lottieTae.current._lottie.currentFrame) ==
              totalFrames - 1
            ) {
              handleEvent();
              clearInterval(watchComplete);
            }
          }
        }, 1);
      }
    }
  }, [lottieTae, options, props.counter]);

  //caso possua as interacoes padrao do lottie ele seta aqui
  useEffect(() => {
    if (load) {
      if (props.interactivity) {
        setInteractivity(props.interactivity);
      }
    }
  }, [load]);

  useEffect(() => {
    //console.log(interactivity);
    setTimeout(() => {
      interactivity && create(interactivity);
    }, 40);
  }, [interactivity]);

  useEffect(() => {
    let interAcesso = setInterval(() => {
      if (lottieTae.current?._lottie != undefined) {
        // console.log("nao é undefined");

        clearInterval(interAcesso);
        setAcessoLottie(true);
      }
    }, 40);
  }, []);

  useEffect(() => {
    if (acessoLottie) {
      //controles de loop e autoplay
      if (
        options.event != "noLoopAutoPlay" &&
        options.event != "complete" &&
        options.event != "click" &&
        options.event != "loopCustom"
      ) {
        lottieTae.current._lottie.frameModifier = 0;
        lottieTae.current._lottie.currentFrame = 0;
        lottieTae.current._lottie.currentRawFrame = 0;
      }
    }
  }, [acessoLottie]);

  //seta os lotties JSON e todos os itens passados via props
  useEffect(() => {
    cloneOptions = { ...props.options };
    cloneOptions.animationData = JSON.stringify(props.options.animationData);
    setOptions(cloneOptions);
    props.options.randomId && setLoad(true);
  }, [props.options.randomId, props.counter]);

  // atualiza o contador de interacoes textual, pode ser apagadado caso, nao queira exibir um contador
  useEffect(() => {
    if (countToAdvance != 1) {
      props.setChange && props.setChange((oldchange) => !oldchange);
    }
  }, [countToAdvance]);

  function intervalHover() {
    if (
      options &&
      options.event == "hover" &&
      options.typeEvent != "countToAdvance"
    ) {
      let watchComplete = setInterval(() => {
        if (lottieTae.current && lottieTae.current._lottie) {
          let totalFrames = lottieTae.current._lottie.totalFrames;
          if (
            Math.ceil(lottieTae.current._lottie.currentFrame) ==
            totalFrames - 1
          ) {
            hoverOut();
            handleEvent();
            clearInterval(watchComplete);
          }
        }
      }, 1);
    }
  }

  function intervalHoverCounter() {
    if (
      options &&
      options.event == "hover" &&
      options.typeEvent == "countToAdvance"
    ) {
      let watchComplete = setInterval(() => {
        if (lottieTae.current && lottieTae.current._lottie) {
          let totalFrames = lottieTae.current._lottie.totalFrames;
          if (
            Math.ceil(lottieTae.current._lottie.currentFrame) ==
            totalFrames - 1
          ) {
            lottieTae.current.setAttribute("loop", false);
            lottieTae.current._lottie.frameModifier = 0;

            checkCountToAdvance();

            clearInterval(watchComplete);
          }
        }
      }, 1);
    }
  }

  function hoverOn() {
    if (lottieTae.current && lottieTae.current._lottie) {
      if (options.typeEvent == "countToAdvance") {
        lottieTae.current.setAttribute("loop", true);

        lottieTae.current._lottie.frameModifier = animationState.frameModifier;
        lottieTae.current._lottie.currentFrame = 0;
        lottieTae.current._lottie.currentRawFrame = 0;

        intervalHoverCounter();
      }
      lottieTae.current._lottie.frameModifier = animationState.frameModifier;
      lottieTae.current.setAttribute("autoplay", true);
      lottieTae.current._lottie.isPaused = false;
      lottieTae.current._lottie.autoplay = true;

      intervalHover();

      setChange(!change);
    }
  }
  function hoverOut() {
    if (lottieTae.current && lottieTae.current._lottie) {
      if (options.typeEvent != "countToAdvance") {
        lottieTae.current._lottie.isPaused = true;
        lottieTae.current._lottie.autoplay = false;
      }

      setChange(!change);
    }
  }
  function checkCountToAdvance() {
    //aguarda o numero de interacoes necessarios para avancar
    setCountToAdvance(countToAdvance + 1);
    if (options.count == countToAdvance) {
      props.setCounter(props.counter + 1);
    }
  }
  function handleEvent() {
    if (options.typeEvent != "countToAdvance") {
      props.setCounter(props.counter + 1);
    } else {
      checkCountToAdvance();
    }

    //verifica se ao chegar ao final, vai voltar para o primeiro lottie
    if (props.resetOnEnd && props.counter == props.totalItems - 1) {
      props.setCounter(0);
    }
  }

  if (!load) {
    return <div>carregando</div>;
  } else {
    return (
      <lottie-player
        onClick={options.event == "click" ? () => handleEvent() : undefined}
        onMouseEnter={options.event == "hover" ? () => hoverOn() : undefined}
        onMouseLeave={options.event == "hover" ? () => hoverOut() : undefined}
        ref={lottieTae} // 2. set the reference for the player
        id={options.randomId}
        mode="normal"
        loop
        autoplay
        src={options.animationData}
        class={`${options.className ? options.className : ""} itemLottie`}
      ></lottie-player>
    );
  }
}

export default LottieTae;
