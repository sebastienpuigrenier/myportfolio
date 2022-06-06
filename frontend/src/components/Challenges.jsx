import React from "react";

import HexagonGrid from "@components/HexagonGrid";
import challengesJSON from "@assets/challenges.json";

import "@styles/Challenges.css";

function Challenges() {
  return (
    <section className="main-container Challenges">
      <h2 className="section-title">Challenges</h2>
      <HexagonGrid hexdim="15rem" stringncols="2" jsonFile={challengesJSON} />
    </section>
  );
}

export default Challenges;
