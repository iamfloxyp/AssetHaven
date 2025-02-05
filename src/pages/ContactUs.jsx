import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faShieldAlt, faHandshake } from "@fortawesome/free-solid-svg-icons";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FAQ from "../Components/FAQ"; // Import FAQ component

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
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="contact-us">
      <section className="contact-hero">
        <div className="container">
          <h1>Talk to Our Support Team</h1>
          <p>
            Contact us to recover lost funds, secure your assets, or get financial advice. 
            Our expert team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-container">
        <div className="contact-wrapper">
          
          {/* Contact Info */}
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

            <form action="mailto:support@assethaven.com" method="POST">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" name="firstName" required />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" name="lastName" required />
                </div>
              </div>

              <div className="form-group">
                <label>Country</label>
                <select name="country" required>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>{country}</option>
                  ))}
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" required />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" name="phone" required />
                </div>
              </div>

              <div className="form-group">
                <label>Choose Your Recovery Type</label>
                <select name="recoveryType" required>
                  {recoveryTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Choose Your Wallet Type</label>
                <select name="walletType" required>
                  {walletTypes.map((wallet, index) => (
                    <option key={index} value={wallet}>{wallet}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Estimated Wallet Value (USD)</label>
                <input type="number" name="walletValue" required />
              </div>

              <div className="form-group privacy-checkbox">
                <input type="checkbox" required />
                <label> I agree to the <a href="/privacy-policy">privacy policy</a>.</label>
              </div>

              <button type="submit" className="contact-submit-btn">Send Message</button>
            </form>
          </div>

        </div>
      </section>
      </section>

      <FAQ /> {/* FAQ Section */}

      <Footer />
    </>
  );
};

export default ContactUs;