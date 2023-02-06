import * as React from "react";

function InterativoVideoSvg_01(props) {
  return (
    <svg
      id="prefix__InterativoVideoSvg_01"
      viewBox="0 0 1280 720"
      className={props.svgFullScreenControl ? "w100h100" : ""}
    >
      <defs>
        <style>
          {"#prefix__InterativoVideoSvg_01 .prefix__cls-1{fill:#fff}"}
        </style>
      </defs>
      <circle
        className="prefix__cls-1 botao"
        cx={310.75}
        cy={134.29}
        r={83.89}
        onClick={props.isTouch ? undefined : () => props.svgClick(1)}
        onTouchEnd={() => props.svgClick(1)}
      />
      <circle
        className="prefix__cls-1 botao"
        cx={226.86}
        cy={520.06}
        r={83.89}
        onClick={props.isTouch ? undefined : () => props.svgClick(3)}
        onTouchEnd={() => props.svgClick(3)}
      />
      <circle
        className="prefix__cls-1 botao"
        cx={1027.95}
        cy={140.89}
        r={112}
        onClick={props.isTouch ? undefined : () => props.svgClick(2)}
        onTouchEnd={() => props.svgClick(2)}
      />
      <circle
        className="prefix__cls-1 botao"
        cx={957.03}
        cy={571.01}
        r={112}
        onClick={props.isTouch ? undefined : () => props.svgClick(4)}
        onTouchEnd={() => props.svgClick(4)}
      />
    </svg>
  );
}

const MemoInterativoVideoSvg_01 = React.memo(InterativoVideoSvg_01);
export default MemoInterativoVideoSvg_01;
