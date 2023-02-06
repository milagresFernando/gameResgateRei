import * as React from "react";

function TresBolasAmarelo(props) {
  return (
    <svg data-name="TresBolasAmarelo" viewBox="0 0 155 136">
      <circle
        data-name="Elipse 100"
        cx={14.13}
        cy={57.49}
        r={12.99}
        fill="#ffbb3c"
      />
    </svg>
  );
}

const MemoTresBolasAmarelo = React.memo(TresBolasAmarelo);
export default MemoTresBolasAmarelo;
