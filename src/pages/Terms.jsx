import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Terms = () => {
  return (
    <>
      <Header />
      <section className="policy-container">
        <h1>Terms and Conditions</h1>
        <p className="updated-date">Last updated: October 15, 2023</p>

        <div className="policy-content">
          <h2>1. Agreement to Terms</h2>
          <p>
            Welcome to AssetHaven. These Terms of Use ("Terms") constitute a
            legally binding agreement between you ("User," "you," or "your") and
            AssetHaven ("Company," "we," "us," or "our"). By accessing and using
            our website, services, and related applications, you acknowledge
            that you have read, understood, and agree to be bound by these
            Terms. If you do not agree, please discontinue use immediately.
          </p>

          <h2>2. Intellectual Property Rights</h2>
          <p>
            All content, including text, graphics, logos, images, and software,
            is the exclusive property of AssetHaven and protected under
            intellectual property laws. Unauthorized copying, modification, or
            distribution is strictly prohibited.
          </p>

          <h2>3. User Responsibilities</h2>
          <ul>
            <li>Provide accurate and truthful information.</li>
            <li>Comply with all applicable laws and regulations.</li>
            <li>Do not engage in fraudulent activities.</li>
          </ul>

          <h2>4. Asset Recovery Process</h2>
          <p>
            AssetHaven specializes in cryptocurrency recovery. While we use
            advanced forensic methods, we do not guarantee 100% recovery
            success.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            AssetHaven is not responsible for financial losses due to scams or
            third-party fraud. Users must ensure their provided details are
            accurate.
          </p>

          <h2>6. Privacy Policy</h2>
          <p>
            By using our services, you agree to our <a href="/privacy">Privacy Policy</a>.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions, you can reach us at{" "}
            <a href="mailto:support@assethaven.com">support@assethaven.com</a>.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Terms;