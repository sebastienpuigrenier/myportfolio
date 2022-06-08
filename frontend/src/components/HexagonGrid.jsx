import React from "react";

import Hexagon from "@components/Hexagon";

export default function HexagonGrid({ hexdim, stringncols, jsonFile }) {
  let dim = [];
  if (hexdim.slice(-3) === "rem") {
    dim = [hexdim.slice(0, hexdim.length - 3), "rem"];
  } else if (hexdim.slice(-2) === "vw") {
    dim = [hexdim.slice(0, hexdim.length - 2), "vw"];
  }
  const l = dim[0] / 2;
  const ri = Number(l * Math.sqrt(3));

  const { innerWidth: width } = window;
  let ncols = 1;
  for (let i = parseInt(stringncols, 10); i > 0; i -= 1) {
    if (width / 16 / dim[0] - 2 > i && ncols === 1) {
      ncols = i;
    }
  }

  const nrows =
    ncols === 1
      ? jsonFile.length
      : Math.ceil(2 * (jsonFile.length / (ncols * 2 - 1)));

  const hexContainerDynamicStyle = {
    gridTemplateRows: `repeat(${nrows}, ${ri}${dim[1]})`,
    gridTemplateColumns: `repeat(${ncols * 2 + 1}, ${l}${dim[1]})`,
    paddingTop: `${l * 0.4}`,
  };

  return (
    <div className="hex-container" style={hexContainerDynamicStyle}>
      {jsonFile.map((e, i) => {
        let isfirstoddrow = false;
        switch (true) {
          case i === ncols:
            isfirstoddrow = true;
            break;
          case ncols === 1 && i % 2 !== 0:
            isfirstoddrow = true;
            break;
          case ncols !== 1 && i > ncols && ((i - ncols) % 2) * ncols - 1 === 0:
            isfirstoddrow = true;
            break;
          default:
            isfirstoddrow = false;
        }

        return (
          <Hexagon
            dim={dim}
            l={l}
            ri={ri}
            objectJSON={e}
            isfirstoddrow={isfirstoddrow}
          />
        );
      })}
    </div>
  );
}
