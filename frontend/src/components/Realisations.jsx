import React from "react";
import realisationJSON from "@assets/realisations.json";

import HexagonGrid from "@components/HexagonGrid";

import "@styles/Realisations.css";

function Realisations() {
  return (
    <section className="main-container Realisations">
      <h2 className="section-title">Réalisations</h2>
      <HexagonGrid hexdim="15rem" stringncols="3" jsonFile={realisationJSON} />
    </section>
  );
}

export default Realisations;
