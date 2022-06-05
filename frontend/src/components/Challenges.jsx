import React from "react";

import HexagonGrid3x3 from "@components/HexagonGrid3x3";

import "@styles/Challenges.css";

function Challenges() {
  return (
    <section className="main-container Challenges">
      <h2 className="section-title">Challenges</h2>
      <HexagonGrid3x3 hexdim="15rem" nrows="3" ncols="3" />
    </section>
  );
}

export default Challenges;
