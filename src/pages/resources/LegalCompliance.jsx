import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBalanceScale, faGavel, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";

const LegalCompliance = () => {
  return (
    <section className="legal-compliance-page">
      <div className="legal-compliance-container">
        <Link to="/resources" className="legal-compliance-back-link">
          ← Back to Resources
        </Link>

        <h1 className="legal-compliance-title">Legal & Regulatory Compliance</h1>
        <p className="legal-compliance-subtitle">
          Learn about the latest legal and regulatory policies affecting crypto asset recovery.
        </p>

        <div className="legal-compliance-content">
          <div className="legal-compliance-box">
            <h2><FontAwesomeIcon icon={faBalanceScale} /> Crypto Regulations</h2>
            <p>
              Understanding local and international cryptocurrency regulations is crucial. These policies impact asset recovery and compliance with anti-money laundering (AML) laws.
            </p>
            <ul>
              <li>📜 <strong>AML & KYC Compliance</strong> - Ensures identity verification and prevents illicit transactions.</li>
              <li>🌍 <strong>Global Crypto Regulations</strong> - Varies across countries with different legal frameworks.</li>
              <li>💰 <strong>Taxation Laws</strong> - How crypto gains and losses are taxed in different regions.</li>
            </ul>
          </div>

          <div className="legal-compliance-box">
            <h2><FontAwesomeIcon icon={faGavel} /> Fraud & Asset Protection Laws</h2>
            <p>
              Legal measures exist to protect users from fraudulent activities in the crypto space. Awareness of these laws can help prevent losses.
            </p>
            <ul>
              <li>⚖️ <strong>Consumer Protection Acts</strong> - Legal recourse against fraudulent exchanges and scams.</li>
              <li>🔍 <strong>Asset Recovery Laws</strong> - Guidelines for retrieving stolen crypto assets.</li>
              <li>📑 <strong>Data Privacy Policies</strong> - Protection of personal and financial information in digital transactions.</li>
            </ul>
          </div>

          <div className="legal-compliance-box">
            <h2><FontAwesomeIcon icon={faShieldAlt} /> Compliance Best Practices</h2>
            <p>
              Following best practices ensures adherence to legal frameworks, reducing risks associated with crypto transactions.
            </p>
            <ul>
              <li>🔐 <strong>Secure Transactions</strong> - Use legally compliant exchanges and wallets.</li>
              <li>✅ <strong>Audits & Record Keeping</strong> - Maintain transaction history for taxation and legal verification.</li>
              <li>🛡️ <strong>Legal Consultation</strong> - Seek professional advice for high-value crypto transactions.</li>
            </ul>
          </div>
        </div>

        <div className="legal-compliance-cta">
          <h3>Need legal guidance for crypto compliance?</h3>
          <Link to="/contact" className="legal-compliance-button">Contact Us</Link>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default LegalCompliance;