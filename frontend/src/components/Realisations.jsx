import React from "react";

import HexagonGrid3x3 from "@components/HexagonGrid3x3";

import "@styles/Realisations.css";

function Realisations() {
  return (
    <section className="main-container Realisations">
      <h2 className="section-title">Réalisations</h2>
      <HexagonGrid3x3 hexdim="20vw" nrows="3" ncols="3" />
    </section>
  );
}

export default Realisations;
