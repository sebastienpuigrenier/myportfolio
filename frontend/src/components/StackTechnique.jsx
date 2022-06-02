import React from "react";

import { FaHtml5, FaCss3, FaJsSquare, FaReact, FaNode } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

import "@styles/StackTechnique.css";

function StackTechnique() {
  return (
    <section className="main-container stack-technique">
      <h2 className="section-title">Stack Technique</h2>
      <FaHtml5 className="stack-icon" /> <FaCss3 className="stack-icon" />{" "}
      <FaJsSquare className="stack-icon" /> <FaReact className="stack-icon" />{" "}
      <FaNode className="stack-icon" /> <SiMysql className="stack-icon" />
    </section>
  );
}

export default StackTechnique;
