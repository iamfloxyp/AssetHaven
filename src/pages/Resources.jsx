import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faShieldAlt,
  faUserShield,
  faFileContract,
  faBook,
  faClipboardCheck,
  faUserSecret,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FAQ from "../Components/FAQ";

const ResourcesPage = () => {
  return (
    <>
      <Header />
      <section className="resources-container">
        <h1 className="resources-title">Resource Center</h1>
        <p className="resources-subtext">
          Get expert insights, security tips, and the latest updates on crypto asset recovery.
        </p>

        <div className="resources-grid">
          <Link to="/resources/crypto-recovery-guide" className="resource-card">
            <FontAwesomeIcon icon={faUserShield} className="resource-icon" />
            <h3>Beginner’s Guide to Crypto Recovery</h3>
            <p>Learn what happens when crypto assets are lost and how recovery works.</p>
          </Link>

          <Link to="/resources/cyber-security-protection" className="resource-card">
            <FontAwesomeIcon icon={faLock} className="resource-icon" />
            <h3>Cybersecurity & Wallet Protection</h3>
            <p>Secure your wallet, recognize scams, and prevent unauthorized access.</p>
          </Link>

          <Link to="/resources/crypto-scam-alerts" className="resource-card">
            <FontAwesomeIcon icon={faShieldAlt} className="resource-icon" />
            <h3>Crypto Scam Alerts</h3>
            <p>Stay updated on the latest scams and fraud schemes targeting crypto users.</p>
          </Link>

          <Link to="/resources/blockchain-tracing" className="resource-card">
            <FontAwesomeIcon icon={faClipboardCheck} className="resource-icon" />
            <h3>Blockchain & Transaction Tracing</h3>
            <p>Understand how transactions are traced and how lost assets are recovered.</p>
          </Link>

          <Link to="/resources/legal-compliance" className="resource-card">
            <FontAwesomeIcon icon={faFileContract} className="resource-icon" />
            <h3>Legal & Regulatory Compliance</h3>
            <p>Learn about the legal aspects of crypto recovery and fraud prevention.</p>
          </Link>

          <Link to="/resources/recommended-tools" className="resource-card">
            <FontAwesomeIcon icon={faUserSecret} className="resource-icon" />
            <h3>Recommended Tools</h3>
            <p>Discover tools to enhance your crypto security and recovery process.</p>
          </Link>

          <Link to="/resources/updates" className="resource-card">
            <FontAwesomeIcon icon={faInfoCircle} className="resource-icon" />
            <h3>Latest Updates & Blog</h3>
            <p>Stay informed with expert articles on crypto asset recovery and security.</p>
          </Link>
        </div>

        <div className="faq-section">
          <FAQ pageVariant="resources"/>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ResourcesPage;