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
            <a href="mailto:sebastien.puigrenier@gmail.com?subject=Contact suite à la visite du portfolio ">
              <h2>Contact</h2>
            </a>
          </li>
        </ul>
      </div>
      <hr />
    </nav>
  );
}

export default NavBar;
