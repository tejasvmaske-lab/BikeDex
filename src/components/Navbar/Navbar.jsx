import Navbar_Button from "../Navbar_Button/Navbar_Button.jsx";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-pill">
        <div className="logo">
            <Navbar_Button />
        </div>
        <div className="mobile-menu">
          ☰
        </div>
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