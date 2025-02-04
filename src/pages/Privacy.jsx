import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Privacy = () => {
  return (
    <>
      <Header />
      <section className="policy-container">
        <h1>Privacy Policy</h1>
        <p className="updated-date">Last updated: October 15, 2023</p>

        <div className="policy-content">
          <h2>1. Introduction</h2>
          <p>
            At AssetHaven, we value your privacy. This Privacy Policy explains
            how we collect, use, and protect your personal information when you
            use our services.
          </p>

          <h2>2. Information We Collect</h2>
          <ul>
            <li>Personal Information (Name, Email, Phone)</li>
            <li>Transaction Data (Cryptocurrency Transfers, Wallet Details)</li>
            <li>Technical Data (IP Address, Browser Information)</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>
            We use your data to provide asset recovery services, improve
            security, and comply with legal regulations. Your data is not sold
            to third parties.
          </p>

          <h2>4. Data Protection and Security</h2>
          <ul>
            <li>End-to-End Encryption</li>
            <li>Secure Servers and Restricted Access</li>
            <li>Two-Factor Authentication (2FA)</li>
          </ul>

          <h2>5. Your Rights</h2>
          <p>
            You have the right to access, modify, or request deletion of your
            personal data. To make a request, email us at{" "}
            <a href="mailto:support@assethaven.com">support@assethaven.com</a>.
          </p>

          <h2>6. Cookies</h2>
          <p>
            We use cookies to enhance user experience. You can disable cookies
            in your browser settings.
          </p>

          <h2>7. Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. The latest
            version will always be available on our website.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Privacy;