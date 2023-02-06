function lottieFunctions(params) {
  return {
    ["handle1"]: function (params) {
      alert("crie uma função aqui");
    },
    ["handle2"]: function (params) {
      console.log(params);
    },
    ["clickPlayStop"]: function (ref) {
      const { animationState } = params;
      console.log(animationState);

      animationState.isStopped = !animationState.isStopped;
      if (animationState.isStopped) {
        ref.current._lottie.frameModifier = 0;
        ref.current._lottie.currentFrame = 0;
        ref.current._lottie.currentRawFrame = 0;
      } else {
        ref.current._lottie.frameModifier = animationState.frameModifier;
      }
    },
    ["clickChangeFile"]: function (ref) {
      const { animationState } = params;
      console.log(ref.current._lottie);
      ref.current._lottie.animationData = animationState.lotties[1];
      ref.current._lottie.renderer.data = animationState.lotties[1];
      console.log(ref.current._lottie.animationData);
      // animationState.isStopped = !animationState.isStopped;
      // if (animationState.isStopped) {
      //   ref.current._lottie.frameModifier = 0;
      //   ref.current._lottie.currentFrame = 0;
      //   ref.current._lottie.currentRawFrame = 0;
      // } else {
      //   ref.current._lottie.frameModifier = animationState.frameModifier;
      // }
    },
    ["clickPlayPause"]: function (ref) {
      const { animationState, setAnimationState } = params;
      ref.current.play();
      if (animationState.isPaused) {
        animationState.isPaused = false;
        ref.current.play();
      } else {
        ref.current.pause();
        animationState.isPaused = true;
      }
    },
    ["clickPlayStopReverse"]: function (ref) {
      console.log("clicou");
      console.log(params);

      const { animationState, setAnimationState } = params;
      ref.current.play();
      if (animationState.isStopped) {
        animationState.isStopped = false;

        ref.current.play();
        ref.current.setDirection(1);
      } else {
        ref.current.play();
        ref.current.setDirection(-1);
        animationState.isStopped = true;
        // ref.current.stop();
      }
    },
  };
}

export default lottieFunctions;
