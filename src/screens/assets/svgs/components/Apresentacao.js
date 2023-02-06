import * as React from "react";

function Apresentacao(props) {
  return (
    <svg
      viewBox="0 0 1920 1080"
      className={props.svgFullScreenControl ? "w100h100" : ""}
    >
      <rect
        className="botao"
        x={621}
        y={190}
        width={678}
        height={107}
        rx={5.55}
        ry={5.55}
        onClick={props.isTouch ? undefined : () => props.svgClick(2)}
        onTouchEnd={() => props.svgClick(2)}
      />
      <rect
        className="botao"
        x={621}
        y={448}
        width={678}
        height={107}
        rx={4.93}
        ry={4.93}
        onClick={props.isTouch ? undefined : () => props.svgClick(3)}
        onTouchEnd={() => props.svgClick(3)}
      />
      <rect
        className="botao"
        x={621}
        y={726}
        width={678}
        height={107}
        rx={6.87}
        ry={6.87}
        onClick={props.isTouch ? undefined : () => props.svgClick(4)}
        onTouchEnd={() => props.svgClick(4)}
      />
    </svg>
  );
}

const MemoApresentacao = React.memo(Apresentacao);
export default MemoApresentacao;
