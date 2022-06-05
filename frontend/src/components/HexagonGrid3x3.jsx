import React from "react";
import Trombinoscope from "@assets/trombinoscope.PNG";
import Moviz from "@assets/moviz.PNG";
import Hackathon from "@assets/hackathon.PNG";
import InProgress from "@assets/work_in_progress.png";

export default function HexagonImg({ hexdim, nrows, ncols }) {
  return (
    <div
      className="hex-container"
      style={{
        "--hex-dim-multi": hexdim,
        "--n-rows": nrows,
        "--n-cols": ncols,
      }}
    >
      <div className="hex-cell">
        <img src={Trombinoscope} alt="page d'accueil du trombinoscope" />
        <div>
          <h1 id="demo1">
            Trombinoscope <br /> HTML - CSS
          </h1>
        </div>
        <div>
          <p id="demo2">
            <a
              href="https://github.com/bebaile/projet1-group3-outsiders"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            -{" "}
            <a
              href="https://sebastienpuigrenier.github.io/projet1-group3-outsiders/"
              target="_blank"
              rel="noreferrer"
            >
              Liens
            </a>
          </p>
        </div>
      </div>
      <div className="hex-cell">
        <img src={Moviz} alt="page d'accueil du quiz cinéma" />
        <div>
          <h1 id="demo1">
            Quiz Cinéma <br /> React - API REST - Backend
          </h1>
        </div>
        <div>
          <p id="demo2">
            <a
              href="https://github.com/WildCodeSchool/2022-03-JS-RemoteFR-Outsiders-P2-Team-Kraken"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            - Liens (en cours)
          </p>
        </div>
      </div>
      <div className="hex-cell">
        <img src={InProgress} alt="work in progress" />
        <div>
          <h1 id="demo1">
            Projet Client réel <br /> ReactJS - NodeJS
          </h1>
        </div>
        <div>
          <p id="demo2"> Réalisation en cours </p>
        </div>
      </div>
      <div className="hex-cell">
        <img src={Trombinoscope} alt="page d'accueil du trombinoscope" />
        <div>
          <h1 id="demo1">
            Trombinoscope React <br /> React
          </h1>
        </div>
        <div>
          <p id="demo2">
            <a
              href="https://github.com/bebaile/projet1-group3-outsiders"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            -{" "}
            <a
              href="https://sebastienpuigrenier.github.io/projet1-group3-outsiders/"
              target="_blank"
              rel="noreferrer"
            >
              Liens
            </a>
          </p>
        </div>
      </div>
      <div className="hex-cell">
        <img src={Hackathon} alt="page d'accueil du hackathon" />
        <div>
          <h1 id="demo1">
            Hackathon - Save Ourselves <br /> 36h - React
          </h1>
        </div>
        <div>
          <p id="demo2">
            <a
              href="https://github.com/KevinLavigne/hackathon"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            - Pas de lien disponible
          </p>
        </div>
      </div>
    </div>
  );
}
