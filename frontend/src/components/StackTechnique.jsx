import React from "react";

import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaNode,
  FaGithub,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";

import "@styles/StackTechnique.css";

function StackTechnique() {
  return (
    <section className="main-container stack-technique">
      <h2 className="section-title">Stack Technique</h2>
      <div>
        <div className="stack-icon">
          <FaHtml5 />
        </div>
        <div className="stack-icon">
          <FaCss3 />
        </div>
        <div className="stack-icon">
          <FaJsSquare />
        </div>
        <div className="stack-icon">
          <FaReact />
        </div>
        <div className="stack-icon">
          <FaGithub />
        </div>
        <div className="stack-icon">
          <FaNode />
        </div>
        <div className="stack-icon">
          <SiMysql />
        </div>
      </div>
    </section>
  );
}

export default StackTechnique;
