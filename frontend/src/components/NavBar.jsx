import React from "react";

import "@styles/NavBar.css";

function NavBar() {
  return (
    <nav>
      <div className="navbar">
        <div>
          <h1>S. Puigrenier</h1>
        </div>
        <ul>
          <li>
            <h2>Home</h2>
          </li>
          <li>
            <h2>Contact</h2>
          </li>
        </ul>
      </div>
      <hr />
    </nav>
  );
}

export default NavBar;
