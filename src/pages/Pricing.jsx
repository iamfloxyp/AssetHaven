import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Pricing = () => {
  return (
    <>
      <Header />

      <section className="pricing-container">
        <h1 className="pricing-title">Transparent Pricing for Asset Recovery & Scam Investigation</h1>
        <p className="pricing-subtext">
          Get a clear breakdown of our pricing structure. Whether you're recovering lost assets or investigating fraudulent transactions, 
          we ensure a fair, success-driven pricing model. Contact us today for a free consultation.
        </p>

        <div className="pricing-grid">
          {/* Wallet Recovery Section */}
          <div className="pricing-box">
            <h2>Wallet Recovery</h2>
            <p className="pricing-desc">
              Our wallet recovery service is designed to help you regain access to locked or lost cryptocurrency wallets.
            </p>
            <span className="pricing-amount">20% <small>of recovered assets</small></span>

            <ul className="pricing-features">
              <li>✔ Personalized recovery assistance</li>
              <li>✔ 24/7 support from experts</li>
              <li>✔ Unlimited decryption attempts</li>
              <li>✔ Optional consultation via secure channels</li>
              <li>✔ Highly secure processing environment</li>
              <li>✔ No upfront fees – pay only for success</li>
              <li>✔ Advanced forensic techniques</li>
              <li>✔ Audit report upon completion</li>
              <li>✔ Premium security advisory</li>
              <li>✔ Tailored recovery strategies</li>
            </ul>

            <Link to="/contact" className="pricing-button">Get Assistance</Link>
          </div>

          {/* Fraud Investigation Section */}
          <div className="pricing-box">
            <h2>Fraud & Scam Investigation</h2>
            <p className="pricing-desc">
              We trace fraudulent activities, track stolen assets, and assist in legal action.
            </p>
            <span className="pricing-amount">$475 <small>starting fee</small></span>

            <ul className="pricing-features">
              <li>✔ Dedicated case investigator</li>
              <li>✔ 24/7 case tracking</li>
              <li>✔ High-level forensic analysis</li>
              <li>✔ Secure communication channels</li>
              <li>✔ Legal assistance & documentation</li>
              <li>✔ Investigative reporting with blockchain evidence</li>
              <li>✔ Assistance with law enforcement</li>
              <li>✔ Case progress updates</li>
              <li>❌ Recovery of funds is not guaranteed</li>
            </ul>

            <Link to="/contact" className="pricing-button">Report a Case</Link>
          </div>
        </div>

        {/* Understanding Pricing Section */}
        <div className="pricing-info">
          <h2>How Our Pricing Works</h2>
          <p>
            At AssetHaven, we understand that asset recovery is a critical and sensitive matter. Our pricing model is 
            structured to ensure fairness and transparency, allowing you to seek help without financial risks.
          </p>
          <p>
            Our wallet recovery service operates on a *success-fee basis*, meaning you only pay if we recover your assets. 
            We charge *20% of successfully recovered funds*, covering the expertise and resources required.
          </p>
          <p>
            Fraud investigation services require an initial *$425 starting fee*, which covers forensic research, case analysis, 
            and report generation. This fee ensures we can provide in-depth investigative support and assist in tracking fraudulent transactions.
          </p>
          <p>
            We prioritize security, confidentiality, and efficiency, ensuring that every client gets professional handling from start to finish.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Pricing;