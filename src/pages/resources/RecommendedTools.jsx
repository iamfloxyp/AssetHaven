import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faSearch, faLock, faTools } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";

const RecommendedTools = () => {
  return (
    <section className="recommended-tools-page">
      <div className="recommended-tools-container">
        <Link to="/resources" className="recommended-tools-back-link">
          ← Back to Resources
        </Link>

        <h1 className="recommended-tools-title">Recommended Tools</h1>
        <p className="recommended-tools-subtitle">
          Explore trusted tools to enhance your crypto security and asset recovery process.
        </p>

        <div className="recommended-tools-content">
          <div className="recommended-tools-box">
            <h2><FontAwesomeIcon icon={faLock} /> Crypto Security Tools</h2>
            <ul>
              <li>🔐 <strong>Ledger & Trezor</strong> - Secure hardware wallets for offline storage.</li>
              <li>🛡️ <strong>MetaMask & Trust Wallet</strong> - Reliable software wallets with fraud detection.</li>
              <li>🔑 <strong>1Password & LastPass</strong> - Safe password managers for securing private keys.</li>
            </ul>
          </div>

          <div className="recommended-tools-box">
            <h2><FontAwesomeIcon icon={faSearch} /> Blockchain Recovery & Tracing</h2>
            <ul>
              <li>🔍 <strong>Etherscan & Blockchain Explorer</strong> - Track transactions & investigate lost funds.</li>
              <li>🕵️ <strong>Chainalysis & CipherTrace</strong> - Advanced fraud detection & forensic tools.</li>
              <li>💳 <strong>Wallet Recovery Services</strong> - Helps recover lost passwords and seed phrases.</li>
            </ul>
          </div>

          <div className="recommended-tools-box">
            <h2><FontAwesomeIcon icon={faShieldAlt} /> Anti-Scam & Fraud Detection</h2>
            <ul>
              <li>⚠️ <strong>Scam Sniffer & PhishFort</strong> - Detect fake websites & phishing scams.</li>
              <li>🚫 <strong>Revoke.cash</strong> - Check & remove unauthorized contract approvals.</li>
              <li>🔎 <strong>Elliptic & Crystal Blockchain</strong> - Law enforcement-grade crypto forensic tools.</li>
            </ul>
          </div>
        </div>

        <div className="recommended-tools-cta">
          <h3>Need help securing your crypto assets?</h3>
          <Link to="/contact" className="recommended-tools-button">Contact Us</Link>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default RecommendedTools;