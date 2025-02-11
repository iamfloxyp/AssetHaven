import  { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faTimes } from "@fortawesome/free-solid-svg-icons"
import Shield from "../images/Shield.png"


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={Shield} alt="Logo" className="logo" />
        <span className="logo-name">AssetHaven</span>
      </div>

      <nav className={`nav-container ${menuOpen ? "active" : ""}`}>
        <div className="nav-links">
        <Link to="/" onClick={() =>setMenuOpen(false)}>Home</Link>
        <Link to ="/resources">Resources</Link>
        <Link to="/services">Services</Link>
        <Link to="/scam-tracing">Scam Tracing</Link>
        </div>
        <div className="button-container">
        <Link to ="/contact" className="cta-button">Contact Us</Link>
      </div>
      </nav>

      

      <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
    </header>
  );
};

export default Header;