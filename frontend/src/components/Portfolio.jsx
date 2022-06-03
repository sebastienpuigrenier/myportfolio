import React from "react";

import HexagonImg from "@components/HexagonImg";

import "@styles/Portfolio.css";

function Portfolio() {
  return (
    <section className="main-container portfolio">
      <h2 className="section-title">Porfolio</h2>
      <div className="grid portfolio-container">
        <ul id="hexGrid">
          <li>
            <HexagonImg
              title="Site 1"
              desc="description"
              link=""
              imgBackgroundURL="../src/assets/HandyOldZ.png"
            />
          </li>
          <li>
            <HexagonImg
              title="Site 2"
              desc="description"
              link=""
              imgBackgroundURL="../src/assets/HandyOldZ.png"
            />
          </li>
          <li>
            <HexagonImg
              title="Site 3"
              desc="description"
              link=""
              imgBackgroundURL="../src/assets/HandyOldZ.png"
            />
          </li>
          <li>
            <HexagonImg
              title="Site 4"
              desc="description"
              link=""
              imgBackgroundURL="../src/assets/HandyOldZ.png"
            />
          </li>
          <li>
            <HexagonImg
              title="Site 5"
              desc="description"
              link=""
              imgBackgroundURL="../src/assets/HandyOldZ.png"
            />
          </li>
          <li>
            <HexagonImg
              title="Site 6"
              desc="description"
              link=""
              imgBackgroundURL="../src/assets/HandyOldZ.png"
            />
          </li>
          <li>
            <HexagonImg
              title="Site 7"
              desc="description"
              link=""
              imgBackgroundURL="../src/assets/HandyOldZ.png"
            />
          </li>
          <li>
            <HexagonImg
              title="Site 8"
              desc="description"
              link=""
              imgBackgroundURL="../src/assets/HandyOldZ.png"
            />
          </li>
          <li>
            <HexagonImg
              title="Site 9"
              desc="description"
              link=""
              imgBackgroundURL="../src/assets/HandyOldZ.png"
            />
          </li>
          <li>
            <HexagonImg
              title="Site 10"
              desc="description"
              link=""
              imgBackgroundURL="../src/assets/HandyOldZ.png"
            />
          </li>
          <li>
            <HexagonImg
              title="Site 11"
              desc="description"
              link=""
              imgBackgroundURL="../src/assets/HandyOldZ.png"
            />
          </li>
          <li>
            <HexagonImg
              title="Site 12"
              desc="description"
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
