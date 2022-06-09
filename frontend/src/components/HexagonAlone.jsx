import React from "react";

export default function HexagonAlone({ img, hexdim }) {
  return (
    <div
      className="hex-container-alone"
      style={{
        "--hex-dim-alone": hexdim,
      }}
    >
      <div className="hex-cell-alone">
        <img src={img} alt="avatar de Sébastien Puigrenier" />
      </div>
    </div>
  );
}
