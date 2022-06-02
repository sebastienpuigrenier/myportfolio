import React from "react";

import HexagonImg from "@components/HexagonImg";

import "@styles/Presentation.css";

function Presentation() {
  return (
    <header>
      <div className="main-container header-content">
        <HexagonImg
          title="Sébastien Puigrenier"
          desc="Développeur Web"
          link=""
          imgBackgroundURL="../src/assets/HandyOldZ.png"
        />
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
          <div className="header-buttons">
            <p>Télécharger mon CV</p>
            <p>Me Contacter</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Presentation;
