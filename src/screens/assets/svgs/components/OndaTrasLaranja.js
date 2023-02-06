import * as React from "react";

function OndaTrasLaranja(props) {
  return (
    <svg viewBox="0 0 2246.03 800">
      <defs>
        <linearGradient
          id="OndaTrasLaranjaId"
          x1={1123.02}
          y1={821.97}
          x2={1123.02}
          y2={-700.91}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.05} stopColor="#ffcec7" stopOpacity={0} />
          <stop offset={0.2} stopColor="#ffcec7" stopOpacity={0.24} />
          <stop offset={0.49} stopColor="#ffcec7" stopOpacity={0.64} />
          <stop offset={0.68} stopColor="#ffcec7" stopOpacity={0.9} />
          <stop offset={0.78} stopColor="#ffcec7" />
        </linearGradient>
      </defs>
      <path
        d="M0 2v797.05h2246.03V26.38c-164.99 79.64-280.3 34.27-427.65-4.36-61.76-16.19-145.17-22.36-221.91 19.77-175.24 96.2-256.31 65.73-344.87 35.27-47.47-16.33-97.1-32.66-164.53-29.48-119.29 5.62-196.7 51.76-266.65 94.81-114.5 70.45-208.93 132.59-434.06-5.02 0 0 0-.02-.02 0C208.49 28.65 93.8.95 23.08.95 14.8.95 7.11 1.33 0 2"
        fill="url(#OndaTrasLaranjaId)"
      />
    </svg>
  );
}

const MemoOndaTrasLaranja = React.memo(OndaTrasLaranja);
export default MemoOndaTrasLaranja;
