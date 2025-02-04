import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faShieldAlt, faLock, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";


const CybersecurityProtection = () => {
  return (
    <section className="cybersecurity-page">
      <div className="cybersecurity-container">
        <Link to="/resources" className="cybersecurity-back-link">
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Resources
        </Link>

        <h1 className="cybersecurity-title">Cybersecurity & Wallet Protection</h1>
        <p className="cybersecurity-subtitle">
          Protect your cryptocurrency assets from hacks, scams, and unauthorized access.
        </p>

        <div className="cybersecurity-content">
          <section className="cybersecurity-box">
            <h2><FontAwesomeIcon icon={faShieldAlt} /> Understanding Crypto Security</h2>
            <p>
              Cryptocurrency security involves protecting your assets from hackers, phishing scams, and
              unauthorized access. Strong security measures can help safeguard your funds.
            </p>
          </section>

          <section className="cybersecurity-box">
            <h2><FontAwesomeIcon icon={faLock} /> Best Practices for Wallet Security</h2>
            <ul>
              <li>✅ Use a *hardware wallet* for long-term storage.</li>
              <li>✅ Enable *two-factor authentication (2FA)* on all crypto accounts.</li>
              <li>✅ Never *share your private keys* or seed phrases.</li>
              <li>✅ Regularly *update your wallet software* for security patches.</li>
            </ul>
          </section>

          <section className="cybersecurity-box">
            <h2><FontAwesomeIcon icon={faUserShield} /> Recognizing Common Crypto Scams</h2>
            <ul>
              <li>❌ Phishing Emails – Fake emails tricking users into revealing private keys.</li>
              <li>❌ Ponzi Schemes – Fake investment platforms promising high returns.</li>
              <li>❌ Fake Airdrops – Scammers ask for wallet details in exchange for free tokens.</li>
              <li>❌ Imposter Support Teams – Fraudsters pretending to be exchange support staff.</li>
            </ul>
          </section>

          <section className="cybersecurity-box">
            <h2>🔐 Advanced Security Tips</h2>
            <ul>
              <li>🔹 Use a VPN when accessing crypto platforms.</li>
              <li>🔹 Store backups of seed phrases in a secure *offline location*.</li>
              <li>🔹 Avoid clicking unknown links or downloading files from unknown sources.</li>
            </ul>
          </section>

          
        </div>
        <div className="cybersecurity-cta">
            <h3>Need help securing your crypto assets?</h3>
            <Link to="/contact" className="cybersecurity-button">Contact Us</Link>
          </div>
      </div>

      <Footer />
    </section>
  );
};

export default CybersecurityProtection;