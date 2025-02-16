import { useState, useRef } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faSearch, faBuilding } from "@fortawesome/free-solid-svg-icons";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import WomanLaptop from "../images/WomanLaptop.avif";
import Uspolice from "../images/Uspolice.jpg";

const ScamTracing = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    lostAmount: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Store in MongoDB & Send Email via Resend API
      await axios.post("https://assethaven.onrender.com/api/scam-tracing", formData);

      setMessage("✅ Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        lostAmount: "",
      });
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      setMessage("❌ There was an error submitting the form. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="scam-tracing-hero">
        <div className="scam-tracing-container">
          <div className="scam-tracing-text">
            <h1>Track Down Your Scammed Crypto</h1>
            <p>Our experts will track your stolen crypto and attempt to link the scammer to a real-world entity.</p>
            <button onClick={scrollToForm} className="scam-tracing-btn">
              Begin Your Free Consultation
            </button>
            <ul className="scam-tracing-benefits">
              <li>✔️ 24/7 Support</li>
              <li>✔️ Personalized guidance on recovery steps</li>
            </ul>
          </div>
          <div className="scam-tracing-image">
            <img src={WomanLaptop} alt="Crypto Scam Tracing" />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="scam-tracing-mission">
        <div className="scam-tracing-container">
          <div className="scam-tracing-mission-image">
            <img src={Uspolice} alt="Law Enforcement" />
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
            <p>Track cryptocurrency scams, disrupt criminal operations, and help law enforcement recover your funds.</p>
          </div>
          <div className="scam-benefit-box">
            <FontAwesomeIcon icon={faSearch} className="scam-icon" />
            <h3>Accelerate Your Case</h3>
            <p>Utilize blockchain analysis and event reporting for a faster, more efficient scam investigation process.</p>
          </div>
          <div className="scam-benefit-box">
            <FontAwesomeIcon icon={faBuilding} className="scam-icon" />
            <h3>Build Your Case</h3>
            <p>Provide blockchain-based forensic evidence to strengthen your case for legal and civil actions.</p>
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
            {message && <p className="form-message">{message}</p>}
            <form onSubmit={handleSubmit}>
              <div className="scam-form-group">
                <label>First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
              </div>
              <div className="scam-form-group">
                <label>Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
              </div>
              <div className="scam-form-group">
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="scam-form-group">
                <label>Phone Number</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="scam-form-group">
                <label>Country</label>
                <input type="text" name="country" value={formData.country} onChange={handleChange} required />
              </div>
              <div className="scam-form-group">
                <label>Estimated Lost Amount (USD)</label>
                <input type="number" name="lostAmount" value={formData.lostAmount} onChange={handleChange} required />
              </div>
              <div className="scam-form-group">
              <label>Additional Message (Optional)</label>
               <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Provide any extra details about the scam incident..."
               />
            </div>
              <button type="submit" className="scam-tracing-submit-btn" disabled={loading}>
                {loading ? "Submitting..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ScamTracing;