import React from "react";

export default function HexagonAlone({ img, hexdim, nrows, ncols }) {
  return (
    <div
      className="hex-container-alone"
      style={{
        "--hex-dim-alone": hexdim,
        "--n-rows-alone": nrows,
        "--n-cols-alone": ncols,
      }}
    >
      <div className="hex-cell-alone">
        <img src={img} alt="avatar de Sébastien Puigrenier" />
      </div>
    </div>
  );
}
