import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../Components/Footer";

const CryptoScamAlerts = () => {
  return (
    <div className="crypto-scam-alerts-container">
      <div className="crypto-scam-alerts-content">
        <Link to="/resources" className="crypto-scam-alerts-back-link">
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Resources
        </Link>

        <h1 className="crypto-scam-alerts-title">Crypto Scam Alerts</h1>
        <p className="crypto-scam-alerts-subtitle">Stay informed on the latest crypto frauds and scams.</p>

        <div className="crypto-scam-alerts-grid">
          <div className="crypto-scam-alerts-box">
            <h2><FontAwesomeIcon icon={faShieldAlt} /> Common Crypto Scams</h2>
            <p>Scammers are constantly evolving. Here are some of the most common crypto scams:</p>
            <ul>
              <li>🚨 Phishing attacks via fake emails & websites</li>
              <li>⚠️ Ponzi & pyramid schemes promising high returns</li>
              <li>🔍 Fake investment platforms & fraudulent ICOs</li>
              <li>🛑 Impersonation of legitimate companies & influencers</li>
            </ul>
          </div>

          <div className="crypto-scam-alerts-box">
            <h2>How to Identify a Scam</h2>
            <p>Recognizing the red flags can save you from financial loss:</p>
            <ul>
              <li>💰 If it sounds too good to be true, it probably is.</li>
              <li>📧 Emails asking for private keys or login details.</li>
              <li>🔗 Suspicious links leading to unknown websites.</li>
              <li>🙅‍♂️ Pressure tactics urging immediate investments.</li>
            </ul>
          </div>

          <div className="crypto-scam-alerts-box">
            <h2>Steps to Take If You’re Scammed</h2>
            <p>If you suspect you've been scammed, follow these steps:</p>
            <ul>
              <li>🛡️ Report the scam to relevant authorities.</li>
              <li>💼 Contact your crypto exchange for assistance.</li>
              <li>🔍 Use blockchain explorers to track stolen funds.</li>
              <li>📞 Reach out to professionals like AssetHaven for recovery.</li>
            </ul>
          </div>
        </div>

      </div>
      <div className="crypto-scam-alerts-cta">
          <h3>Need help recovering lost funds?</h3>
          <Link to="/contact" className="crypto-scam-alerts-button">Contact Us</Link>
        </div>

      <Footer />
    </div>
  );
};

export default CryptoScamAlerts;