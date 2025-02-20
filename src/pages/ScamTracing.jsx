import { useState, useRef } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faSearch, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import WomanLaptop from "../images/WomanLaptop.avif";
import Uspolice from "../images/Uspolice.jpg";

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

const countryPhoneLengths = {
  "United States": 10,
  "United Kingdom": 10,
  "Canada": 10,
  "Australia": 9,
  "Germany": 11,
  "France": 9,
  "India": 10,
  "Nigeria": 11, // ✅ Nigeria allows 11 digits
  "South Africa": 9,
  "China": 11,
  "Japan": 10,
  "Brazil": 11,
  "Mexico": 10,
  "Russia": 10,
  "United Arab Emirates": 9,
  "Italy": 10,
  "Netherlands": 9,
  "Switzerland": 10,
  "Sweden": 9,
  "Singapore": 8,
  "Other": 10,
};

const ScamTracing = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    phone: "",
    lostAmount: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submittedEmails, setSubmittedEmails] = useState(new Set());

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "country") {
      const phoneCode = countryPhoneCodes[value] || "";
      setFormData({
        ...formData,
        country: value,
        phone: phoneCode, // Auto-set country code on country selection
      });
    } else if (name === "phone") {
      const countryLength = countryPhoneLengths[formData.country] || 10; // Default length
      const cleanedValue = value.replace(/\D/g, ""); // Remove non-numeric characters

      if (cleanedValue.length > countryLength) {
        return; // ✅ Prevent input beyond max length
      }

      setFormData((prevData) => ({
        ...prevData,
        phone: cleanedValue,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
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
      await axios.post("https://assethaven.onrender.com/api/scam-tracing", formData);
      toast.success("✅ Scam tracing request submitted successfully!", { autoClose: 30000 });

      setSubmittedEmails((prev) => new Set(prev).add(formData.email));

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        phone: "",
        lostAmount: "",
        message: "",
      });

    } catch (error) {
      console.error("❌ Error submitting scam tracing request:", error);
      toast.error("❌ There was an error submitting the form. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={30000} />
      <Header />

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

      <section className="scam-tracing-form" ref={formRef}>
        <div className="scam-tracing-container">
          <div className="scam-tracing-form-text">
            <h2>Work with Trusted Crypto Investigators</h2>
            <p>Our team works around the clock to assist scam victims in recovering their stolen funds.</p>
          </div>
          <div className="scam-tracing-form-box">
            <h3>Request Investigation Assistance</h3>
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
                <label>Country</label>
                <select name="country" value={formData.country} onChange={handleChange} className="full-width-input" required>
                  <option value="">Select Country</option>
                  {Object.keys(countryPhoneCodes).map((country, index) => (
                    <option key={index} value={country}>{country}</option>
                  ))}
                </select>
              </div>
              <div className="scam-form-group">
                <label>Phone Number</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="scam-form-group">
                <label>Estimated Lost Amount (USD)</label>
                <input type="number" name="lostAmount" value={formData.lostAmount} onChange={handleChange} required />
              </div>
              <div className="scam-form-group">
                <label>Additional Message (Optional)</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" required />
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