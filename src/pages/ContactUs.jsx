import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faShieldAlt, faHandshake } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FAQ from "../Components/FAQ";

const countryPhoneCodes = {
  "United States": "+1",
  "United Kingdom": "+44",
  "Canada": "+1",
  "Australia": "+61",
  "Germany": "+49",
  "France": "+33",
  "India": "+91",
  "Nigeria": "+234",
  "South Africa": "+27",
  "China": "+86",
  "Japan": "+81",
  "Brazil": "+55",
  "Mexico": "+52",
  "Russia": "+7",
  "United Arab Emirates": "+971",
  "Italy": "+39",
  "Netherlands": "+31",
  "Switzerland": "+41",
  "Sweden": "+46",
  "Singapore": "+65",
  "Other": "",
};

const recoveryTypes = [
  "Crypto Asset Recovery",
  "Fraud Investigation",
  "Wallet Security & Protection",
  "Blockchain Transaction Tracing",
  "Legal & Regulatory Compliance",
  "Financial Advisory",
  "Money Recovery",
  "Other"
];

const walletTypes = [
  "Hardware Wallet",
  "Software Wallet",
  "Exchange Wallet",
  "Cold Storage",
  "Other"
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    phone: "",
    email: "",
    recoveryType: "",
    walletType: "",
    walletValue: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submittedEmails, setSubmittedEmails] = useState(new Set());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData)=>({...prevData,
      [name]:value,
    }))

    if (name === "country") {
      const phoneCode = countryPhoneCodes[value] || "";
      setFormData({
        ...formData,
        country: value,
        phone: phoneCode,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (submittedEmails.has(formData.email)) {
      toast.error("❌ This email has already submitted a request!", { autoClose: 30000 });
      setLoading(false);
      return;
    }

    try {
      await axios.post("https://assethaven.onrender.com/api/contact", formData);
      toast.success("✅ Form submitted successfully!", { autoClose: 30000 });

      setSubmittedEmails((prev) => new Set(prev).add(formData.email));

      setFormData({
        firstName: "",
        lastName: "",
        country: "",
        phone: "",
        email: "",
        recoveryType: "",
        walletType: "",
        walletValue: "",
        message: "",
      });

    } catch (error) {
      console.error("❌ Error submitting form:", error);
      toast.error("❌ There was an error submitting the form. Please try again.", { autoClose: 30000 });
    }

    setLoading(false);
  };

  return (
    <>
      <Header />
      <ToastContainer />

      {/* Contact Section */}
      <section className="contact-us">
        <section className="contact-hero">
          <div className="container">
            <h1>Talk to Our Support Team</h1>
            <p>Contact us to recover lost funds, secure your assets, or get financial advice.</p>
          </div>
        </section>

        {/* Contact Wrapper */}
        <section className="contact-container">
          <div className="contact-wrapper">
            
            {/* Contact Information */}
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

            {/* Contact Form */}
            <div className="contact-form-box">
              <h2>Submit Your Request</h2>
              <p>Fill in your details below, and our team will reach out to you shortly.</p>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label>Country</label>
                  <select name="country" value={formData.country} onChange={handleChange} required>
                    <option value="">Select Country</option>
                    {Object.keys(countryPhoneCodes).map((country, index) => (
                      <option key={index} value={country}>{country}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label>Recovery Type</label>
                  <select name="recoveryType" value={formData.recoveryType} onChange={handleChange} required>
                  <option value="">Select Recovery Type</option>
                    {recoveryTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Wallet Type</label>
                  <select name="walletType" value={formData.walletType} onChange={handleChange} required>
                    <option value="">Select Wallet Type</option>
                    {walletTypes.map((wallet, index) => (
                      <option key={index} value={wallet}>{wallet}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Wallet Value (USD)</label>
                  <input type="number" name="walletValue" value={formData.walletValue} onChange={handleChange} required />
                </div>
                <div className="scam-form-group">
                <label>Additional Message (Optional)</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Enter your message" required />
              </div>

                <button type="submit" className="contact-submit-btn" disabled={loading}>
                  {loading ? "Submitting..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </section>

      <FAQ />
      <Footer />
    </>
  );
};

export default ContactUs;

