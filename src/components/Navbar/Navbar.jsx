import Navbar_Button from "../Navbar_Button/Navbar_Button.jsx";
import BubbleMenu from "../Navbar/BubbleMenu/BubbleMenu.jsx";
import "./Navbar.css";
import { useState } from "react";

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-pill">
        <div className="logo">
            <Navbar_Button />
        </div>
        <div
  className="mobile-menu"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
>
  {isMenuOpen ? "✕" : "☰"}
</div>

<BubbleMenu isMenuOpen={isMenuOpen} />
        <div className="nav-links">
          <a href="#">Discover</a>
          <a href="#">Compare</a>
          <a href="#">About</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;