import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlockAlt, faKey, faWallet, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const Support = () => {
  return (
    <section className="support-section">
      <h2>How We Can Help</h2>
      <p>
        We understand that losing access to your digital assets can be frustrating.  
        Our expert team is here to assist you in recovering what’s rightfully yours.
      </p>
      <div className="support-grid">
        <div className="support-item">
          <FontAwesomeIcon icon={faUnlockAlt} className="support-icon" />
          <h3>Forgotten Password</h3>
          <p>
            Can't access your account? We help you reset and recover your wallet 
            with secure password recovery solutions.
          </p>
          <Link to="/contact" className="support-link">Recover My Password →</Link>
        </div>
        <div className="support-item">
          <FontAwesomeIcon icon={faKey} className="support-icon" />
          <h3>Lost Recovery Phrase</h3>
          <p>
            If you have a partial or misplaced recovery phrase,  
            our experts assist in reconstructing and regaining access.
          </p>
          <Link to="/contact" className="support-link">Retrieve My Recovery Phrase →</Link>
        </div>
        <div className="support-item">
          <FontAwesomeIcon icon={faWallet} className="support-icon" />
          <h3>Lost Access to Wallet</h3>
          <p>
            Whether it's a forgotten login or a blocked wallet,  
            we provide proven recovery strategies to restore your funds.
          </p>
          <Link to="/contact" className="support-link">Recover My Wallet →</Link>
        </div>
        <div className="support-item">
          <FontAwesomeIcon icon={faExclamationTriangle} className="support-icon" />
          <h3>Scam & Fraud Assistance</h3>
          <p>
            If you've been scammed, we provide tracing and recovery strategies  
            to help you track your lost funds.
          </p>
          <Link to="/contact" className="support-link">Get Fraud Assistance →</Link>
        </div>
      </div>
    </section>
  );
};

export default Support;