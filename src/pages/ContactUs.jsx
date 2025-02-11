import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faShieldAlt, faHandshake } from "@fortawesome/free-solid-svg-icons";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FAQ from "../Components/FAQ"; // ✅ Import FAQ only once

const countries = [
  "United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "India",
  "Nigeria", "South Africa", "China", "Japan", "Brazil", "Mexico", "Russia", "United Arab Emirates",
  "Italy", "Netherlands", "Switzerland", "Sweden", "Singapore", "Other"
];

const recoveryTypes = [
  "Crypto Asset Recovery",
  "Fraud Investigation",
  "Wallet Security & Protection",
  "Blockchain Transaction Tracing",
  "Legal & Regulatory Compliance",
  "Money Recovery",
  "Financial Advisory Services",
  "Other"
];

const walletTypes = [
  "Hardware Wallet",
  "Exchange Wallet",
  "Software Wallet",
  "Paper Wallet",
  "Other"
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    email: "",
    phone: "",
    recoveryType: "",
    walletType: "",
    walletValue: "",
    privacyPolicy: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      setMessage("✅ Form submitted successfully!");
      setFormData({
        firstName: "", lastName: "", country: "", email: "", phone: "",
        recoveryType: "", walletType: "", walletValue: "", privacyPolicy: false,
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
      <section className="contact-us">
        <section className="contact-hero">
          <div className="container">
            <h1>Talk to Our Support Team</h1>
            <p>Contact us to recover lost funds, secure your assets, or get financial advice.</p>
          </div>
        </section>

        <section className="contact-container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <div className="info-box">
                <FontAwesomeIcon icon={faLock} className="contact-icon" />
                <h3>Trusted Asset Recovery</h3>
                <p>Providing secure and verified asset recovery solutions since 2023.</p>
              </div>
              <div className="info-box">
                <FontAwesomeIcon icon={faShieldAlt} className="contact-icon" />
                <h3>Military-Grade Encryption</h3>
                <p>We store your data on offline, air-gapped servers for maximum security.</p>
              </div>
              <div className="info-box">
                <FontAwesomeIcon icon={faHandshake} className="contact-icon" />
                <h3>No Recovery, No Fee</h3>
                <p>You only pay if we successfully recover your assets.</p>
              </div>
            </div>

            <div className="contact-form-box">
              <h2>Submit Your Request</h2>
              <p>Fill in your details below, and our team will reach out to you shortly.</p>

              {message && <p className="message">{message}</p>}

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Country</label>
                  <select name="country" value={formData.country} onChange={handleChange} required>
                    <option value="">Select Country</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>{country}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label>Choose Your Recovery Type</label>
                  <select name="recoveryType" value={formData.recoveryType} onChange={handleChange} required>
                    <option value="">Select Recovery Type</option>
                    {recoveryTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Choose Your Wallet Type</label>
                  <select name="walletType" value={formData.walletType} onChange={handleChange} required>
                    <option value="">Select Wallet Type</option>
                    {walletTypes.map((wallet, index) => (
                      <option key={index} value={wallet}>{wallet}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Estimated Wallet Value (USD)</label>
                  <input type="number" name="walletValue" value={formData.walletValue} onChange={handleChange} required />
                </div>

                <div className="form-group privacy-checkbox">
                  <input type="checkbox" name="privacyPolicy" checked={formData.privacyPolicy} onChange={handleChange} required />
                  <label> I agree to the <a href="/privacy-policy">privacy policy</a>.</label>
                </div>

                <button type="submit" className="contact-submit-btn" disabled={loading}>
                  {loading ? "Submitting..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </section>

      <FAQ /> {/* ✅ Include FAQ */}
      <Footer />
    </>
  );
};

export default ContactUs;
