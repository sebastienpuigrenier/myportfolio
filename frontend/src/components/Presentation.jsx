import React from "react";

import avatar from "@assets/avatar.png";
import HexagonAlone from "@components/HexagonAlone";

import "@styles/Presentation.css";

function Presentation() {
  return (
    <header>
      <div className="main-container header-content">
        <div className="avatar">
          <HexagonAlone hexdim="15rem" img={avatar} />
        </div>
        <div className="header-text">
          <h2>Developpeur Web et web mobile</h2>
          <h1>Sébastien Puigrenier</h1>
          <p>
            Bonjour, je suis Sébastien, développeur basé non loin de Nantes.
          </p>
          <p>
            Ma passion pour le code m'a conduit à entreprendre une reconversion
            professionnelle. Après plus de 10 ans en tant que chargé de projet,
            me voilà prêt pour une nouvelle aventure.
          </p>
          <p>
            Grâce à la formation prodiguée par la Wild Code School, j'ai
            maintenant des bases solides en ReactJS et ExpressJS qui me
            permettent de créer des sites complets.
          </p>
        </div>
        <div className="header-buttons">
          <a href="./src/assets/CV_-_Sebastien_Puigrenier.pdf" target="_blank">
            <div className="hex-button">
              <div className="hex-button-hex">
                <div />
                <div>
                  <p>Télécharger mon CV</p>
                </div>
                <div />
              </div>
              <div className="hex-button-hex">
                <div />
                <div />
                <div />
              </div>
            </div>
          </a>
          <a href="mailto:sebastien.puigrenier@gmail.com?subject=Contact suite à la visite du portfolio ">
            <div className="hex-button second">
              <div className="hex-button-hex">
                <div />
                <div>
                  <p>Me contacter</p>
                </div>
                <div />
              </div>
              <div className="hex-button-hex">
                <div />
                <div />
                <div />
              </div>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Presentation;
