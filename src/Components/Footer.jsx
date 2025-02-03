import { Link } from "react-router-dom";
import Shield from '../images/Shield.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-brand-container">
          <img src={Shield} alt="Logo" className="logo" />
          <span className="logo-name">AssetHaven</span>
          </div>
          <p>“Your Trusted Partner in Asset Recovery”</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="footer-services">
          <h3>Our Services</h3>
          <ul>
            <li><Link to="/services/crypto">Crypto Asset Recovery</Link></li>
            <li><Link to="/services/fraud">Fraud Investigation</Link></li>
            <li><Link to="/services/wallet">Wallet Recovery</Link></li>
            <li><Link to="/services/scam-tracing">Scam Tracing</Link></li>
            <li><Link to="/services/consultation">Asset Consultation</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <p>123 Financial District, London, UK</p>
          <p>Email: <a href="mailto:support@assethaven.com">support@assethaven.com</a></p>
          <Link to="/contact" className="contact-btn">Contact</Link>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>AssetHaven © {new Date().getFullYear()}. All rights reserved</p>
        <div className="footer-bottom-links">
          <Link to="/terms">Terms & Conditions</Link>
          <span>|</span>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

