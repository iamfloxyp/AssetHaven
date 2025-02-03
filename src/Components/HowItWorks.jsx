import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faSearch, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <p>
        Asset Haven provides a secure and efficient process to help you recover lost assets.
        Follow these simple steps to start your recovery journey.
      </p>
      <div className="steps-grid">
        <div className="step-item step-one">
          < FontAwesomeIcon icon={faFileAlt} className="step-icon" />
          <h3>File a Complaint</h3>
          <p>Submit a detailed complaint form with all necessary information to begin the process.</p>
        </div>
        <div className="step-item step-two">
          <FontAwesomeIcon icon={faSearch} className="step-icon" />
          <h3>Investigation & Review</h3>
          <p>Our experts thoroughly analyze your case to develop a tailored recovery strategy.</p>
        </div>
        <div className="step-item step-three">
          <FontAwesomeIcon icon={faCheckCircle} className="step-icon" />
          <h3>Resolution & Recovery</h3>
          <p>Once verified, we take the necessary steps to recover your assets securely.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;