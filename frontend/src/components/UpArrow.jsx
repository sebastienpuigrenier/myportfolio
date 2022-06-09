import React from "react";

import "@styles/UpArrow.css"

function UpArrow() {
  const handleOnClick = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <div onClick={() => handleOnClick()} aria-hidden="true">
      <svg id="more-arrows">
        <polygon
          className="arrow-top"
          points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
        />
        <polygon
          className="arrow-middle"
          points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
        />
        <polygon
          className="arrow-bottom"
          points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
        />
      </svg>
    </div>
  );
}

export default UpArrow;
