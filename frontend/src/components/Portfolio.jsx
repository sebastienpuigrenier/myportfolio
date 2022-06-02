import React from "react";

import HexagonImg from "@components/HexagonImg";

import "@styles/Portfolio.css";

function Portfolio() {
  return (
    <section className="main-container portfolio">
      <h2 className="section-title">Porfolio</h2>
      <div className="grid">
        <ul id="hexGrid">
          <li>
            <HexagonImg
              title="Sébastien Puigrenier"
              desc="Développeur Web"
              link=""
              imgBackgroundURL="../src/assets/HandyOldZ.png"
            />
          </li>
          <li>
            <HexagonImg
              title="Sébastien Puigrenier"
              desc="Développeur Web"
              link=""
              imgBackgroundURL="../src/assets/HandyOldZ.png"
            />
          </li>
          <li>
            <HexagonImg
              title="Sébastien Puigrenier"
              desc="Développeur Web"
              link=""
              imgBackgroundURL="../src/assets/HandyOldZ.png"
            />
          </li>
          <li>
            <HexagonImg
              title="Sébastien Puigrenier"
              desc="Développeur Web"
              link=""
              imgBackgroundURL="../src/assets/HandyOldZ.png"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
