import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSearch, faNetworkWired, faFileContract, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../Components/Footer";

const BlockchainTracing = () => {
  return (
    <div className="blockchain-tracing-page">
      <div className="blockchain-tracing-container">
        <Link to="/resources" className="blockchain-back-link">
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Resources
        </Link>

        <h1 className="blockchain-title">Blockchain & Transaction Tracing</h1>
        <p className="blockchain-subtitle">
          Understand how transactions are traced and how lost assets are recovered.
        </p>

        <div className="blockchain-content">
          <div className="blockchain-box">
            <h2><FontAwesomeIcon icon={faSearch} /> What is Blockchain Tracing?</h2>
            <p>Blockchain tracing refers to the process of analyzing public ledger transactions to track funds and investigate suspicious activity.</p>
          </div>

          <div className="blockchain-box">
            <h2><FontAwesomeIcon icon={faNetworkWired} /> How Transactions Are Tracked</h2>
            <ul>
              <li>🔹 *Blockchain Explorers* - View and trace transactions using tools like Etherscan or Blockchain.info.</li>
              <li>🔹 *Address Mapping* - Link wallet addresses to real-world identities through investigative methods.</li>
              <li>🔹 *Forensic Analysis* - Use advanced algorithms to detect patterns and money flows.</li>
            </ul>
          </div>

          <div className="blockchain-box">
            <h2><FontAwesomeIcon icon={faFileContract} /> Legal and Compliance Aspects</h2>
            <p>Governments and law enforcement agencies use blockchain tracing for regulatory compliance and fraud investigations.</p>
          </div>

          <div className="blockchain-box">
            <h2><FontAwesomeIcon icon={faShieldAlt} /> Best Practices for Security</h2>
            <ul>
              <li>✅ *Use reputable exchanges* with strong compliance measures.</li>
              <li>✅ *Enable transaction monitoring* to detect suspicious activities.</li>
              <li>✅ *Report fraudulent activities* immediately.</li>
            </ul>
          </div>
        </div>

        <div className="blockchain-cta">
          <h3>Need help tracking lost transactions?</h3>
          <Link to="/contact" className="blockchain-button">Contact Us</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlockchainTracing;