import React from "react";

export default function HexagonImg({ title, desc, link, imgBackgroundURL }) {
  return (
    <div className="hex">
      <div className="hexIn">
        <a className="hexLink" href={link}>
          <div
            className="img"
            style={{
              backgroundImage: `url(${imgBackgroundURL})`,
            }}
          />
          <h1 id="demo1">{title}</h1>
          <p id="demo2">{desc}</p>
        </a>
      </div>
    </div>
  );
}
