import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faSearch, faBuilding } from "@fortawesome/free-solid-svg-icons";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Laptop from "../images/Laptop.jpg";
import Police from "../images/Police.jpg";

const ScamTracing = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="scam-tracing-hero">
        <div className="scam-tracing-container">
          <div className="scam-tracing-text">
            <h1>Track Down Your Scammed Crypto</h1>
            <p>
              Our experts will track your stolen crypto and attempt to link the scammer to a real-world entity.
            </p>
            <button onClick={scrollToForm} className="scam-tracing-btn">
              Begin Your Free Consultation
            </button>
            <ul className="scam-tracing-benefits">
              <li>✔️ 24/7 Support</li>
              <li>✔️ Personalized guidance on recovery steps</li>
            </ul>
          </div>
          <div className="scam-tracing-image">
            <img src={Laptop} alt="Crypto Scam Tracing" />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="scam-tracing-mission">
        <div className="scam-tracing-container">
          <div className="scam-tracing-mission-image">
            <img src={Police} alt="Law Enforcement" />
          </div>
          <div className="scam-tracing-mission-text">
            <h2>Combatting Sophisticated Scammers</h2>
            <p>
              As crypto scams become more common, bad actors use advanced techniques to hide from law enforcement.
              Our specialists utilize blockchain forensics to trace stolen assets and provide law enforcement with
              actionable intelligence.
            </p>
            <p>
              We partner with regulatory agencies and use cutting-edge tools to expose fraudulent activities and
              assist victims in recovering their funds.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="scam-tracing-benefits-section">
        <div className="scam-tracing-container">
          <div className="scam-benefit-box">
            <FontAwesomeIcon icon={faShieldAlt} className="scam-icon" />
            <h3>Higher Solve Rate</h3>
            <p>
              Track cryptocurrency scams, disrupt criminal operations, and help law enforcement recover your funds.
            </p>
          </div>
          <div className="scam-benefit-box">
            <FontAwesomeIcon icon={faSearch} className="scam-icon" />
            <h3>Accelerate Your Case</h3>
            <p>
              Utilize blockchain analysis and event reporting for a faster, more efficient scam investigation process.
            </p>
          </div>
          <div className="scam-benefit-box">
            <FontAwesomeIcon icon={faBuilding} className="scam-icon" />
            <h3>Build Your Case</h3>
            <p>
              Provide blockchain-based forensic evidence to strengthen your case for legal and civil actions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="scam-tracing-form" ref={formRef}>
        <div className="scam-tracing-container">
          <div className="scam-tracing-form-text">
            <h2>Work with Trusted Crypto Investigators</h2>
            <p>
              Our team works around the clock to assist scam victims in recovering their stolen funds.
              Start your case today by filling out the form below.
            </p>
          </div>
          <div className="scam-tracing-form-box">
            <h3>Request Investigation Assistance</h3>
            <form action="mailto:support@assethaven.com" method="POST">
              <div className="scam-form-group">
                <label>First Name</label>
                <input type="text" name="firstName" required />
              </div>
              <div className="scam-form-group">
                <label>Last Name</label>
                <input type="text" name="lastName" required />
              </div>
              <div className="scam-form-group">
                <label>Email</label>
                <input type="email" name="email" required />
              </div>
              <div className="scam-form-group">
                <label>Phone Number</label>
                <input type="text" name="phone" required />
              </div>
              <div className="scam-form-group">
                <label>Country</label>
                <input type="text" name="country" required />
              </div>
              <div className="scam-form-group">
                <label>Estimated Lost Amount (USD)</label>
                <input type="number" name="lostAmount" required />
              </div>
              <button type="submit" className="scam-tracing-submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ScamTracing;