import * as React from "react";

function TresBolasAzul(props) {
  return (
    <svg data-name="TresBolasAzul" viewBox="0 0 155 136">
      <circle
        data-name="Elipse 101"
        cx={135.22}
        cy={116.83}
        r={18.65}
        fill="#00b1ed"
      />
    </svg>
  );
}

const MemoTresBolasAzul = React.memo(TresBolasAzul);
export default MemoTresBolasAzul;
