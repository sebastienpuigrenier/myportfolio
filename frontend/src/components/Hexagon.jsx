import React from "react";

export default function Hexagon({ dim, l, ri, objectJSON, isfirstoddrow }) {
  const imgDynamicStyle = {
    height: dim.join(""),
    width: dim.join(""),
  };

  const hexTitleDynamicStyle = {
    width: `${1.85 * l}${dim[1]}`,
    fontSize: `${0.15 * l}${dim[1]}`,
    left: `${-1.3 * ri}${dim[1]}`,
  };

  const hexTextDynamicStyle = {
    left: `${-1.9 * ri}${dim[1]}`,
    width: `${1.85 * l}${dim[1]}`,
    fontSize: `${0.1 * l}${dim[1]}`,
  };

  return (
    <div
      className="hex-cell"
      style={isfirstoddrow ? { gridColumnStart: 2 } : {}}
    >
      {objectJSON.islink ? (
        <a href={objectJSON.link} target="_blank" rel="noreferrer">
          <img
            src={objectJSON.img}
            alt={objectJSON.title}
            style={imgDynamicStyle}
          />
        </a>
      ) : (
        <img
          src={objectJSON.img}
          alt={objectJSON.title}
          style={imgDynamicStyle}
        />
      )}
      <div>
        {objectJSON.islink ? (
          <a href={objectJSON.link} target="_blank" rel="noreferrer">
            <h1 className="hex-title" style={hexTitleDynamicStyle}>
              {objectJSON.title}
              <br /> {objectJSON.techno}
            </h1>
          </a>
        ) : (
          <h1 className="hex-title" style={hexTitleDynamicStyle}>
            {objectJSON.title}
            <br /> {objectJSON.techno}
          </h1>
        )}
      </div>
      <div>
        <p className="hex-text" style={hexTextDynamicStyle}>
          <span
            style={
              objectJSON.isgithublink
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <a href={objectJSON.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </span>
          <span
            style={
              objectJSON.islink && objectJSON.isgithublink
                ? { display: "block" }
                : { display: "none" }
            }
          >
            &nbsp;-&nbsp;
          </span>
          <span
            style={
              objectJSON.islink ? { display: "block" } : { display: "none" }
            }
          >
            <a href={objectJSON.link} target="_blank" rel="noreferrer">
              Lien
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
