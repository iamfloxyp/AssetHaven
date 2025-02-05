import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";

const CryptoRecoveryGuide = () => {
  return (
    <section className="crypto-recovery-guide">
      <div className="container">
        <Link to="/resources" className="back-link">
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Resources
        </Link>

        <h1 className="page-title">Beginner’s Guide to Crypto Recovery</h1>
        <p className="page-subtitle">
          Learn what to do if you’ve lost access to your crypto assets.
        </p>

        <div className="content">
          <section className="info-box">
            <h2>🔹 What is Crypto Recovery?</h2>
            <p>
              Crypto recovery refers to the process of regaining access to lost or inaccessible
              cryptocurrency wallets.
            </p>
          </section>

          <section className="info-box">
            <h2>🔍 Common Reasons for Lost Crypto</h2>
            <ul>
              <li>🔑 Forgotten passwords</li>
              <li>📜 Lost seed phrases</li>
              <li>🎭 Phishing attacks</li>
              <li>🚨 Hacked wallets</li>
            </ul>
          </section>

          <section className="info-box">
            <h2>🛠 Steps to Recover Lost Crypto</h2>
            <ul>
              <li>🔍 <strong>Check Your Backup & Security Settings:</strong> Look for any saved passwords or stored keys.</li>
              <li>🛡 <strong>Use Blockchain Explorer:</strong> Track your transactions to find movement of funds.</li>
              <li>🏦 <strong>Contact the Exchange:</strong> If your assets are on an exchange, they may assist in account recovery.</li>
              <li>👨‍💻 <strong>Seek Professional Help:</strong> If all else fails, AssetHaven specializes in crypto recovery.</li>
            </ul>
          </section>

          <section className="info-box">
            <h2>🚀 Best Practices to Avoid Crypto Loss</h2>
            <ul>
              <li>✅ Enable two-factor authentication (2FA).</li>
              <li>✅ Store seed phrases in a secure offline location.</li>
              <li>✅ Avoid clicking on suspicious links or emails.</li>
              <li>✅ Use a <strong>“hardware wallet”</strong> for extra security.</li>
            </ul>
          </section>

         
        </div>
        <div className="cta-box">
            <h3>Need help recovering your lost crypto?</h3>
            <Link to="/contact" className="crypto-button">Contact Us</Link>
          </div>
      </div>

      <Footer />
    </section>
  );
};

export default CryptoRecoveryGuide;