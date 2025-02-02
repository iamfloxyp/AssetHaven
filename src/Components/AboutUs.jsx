import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt,   faUserShield, faClock, faHandHolding } from '@fortawesome/free-solid-svg-icons';
import About from "../images/About.webp"; 
import BoxShield from "../images/BoxShield.png"

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: false });
  }, []);

  return (
    <div className="about-container">
         <h1>About Us</h1>
      {/* About Section */}
      <section className="about-section">
      <div className="about-image" data-aos="zoom-in">
          <img src={About} alt="About AssetHaven" />
        </div>
        
        <div className="about-content" data-aos="fade-right">
          <p>
            At <strong>AssetHaven</strong>, we specialize in helping individuals and businesses recover and secure their valuable assets. 
            Whether it’s digital security, fraud prevention, or asset recovery, our team of experts ensures you get what’s rightfully yours.
          </p>
          <p>With a team of highly skilled professionals ar services for financial assets, digital securit Whether you're a business looking to protect o to reclaim lost assets, Asset Haven is your trusted patners.

          </p>
        </div>
        
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2 data-aos="fade-up">Why Choose Us?</h2>
        <div className="choose-grid">
          <div className="choose-item" data-aos="flip-left">
            <FontAwesomeIcon icon= {faShieldAlt}  />
            <h3>Secure & Trusted</h3>
            <p>We use cutting-edge technology to protect and recover your assets.</p>
          </div>
          <div className="choose-item" data-aos="flip-left">
            <FontAwesomeIcon icon={faHandHolding}  />
            <h3>Expert Assistance</h3>
            <p>Our experienced professionals guide you every step of the way.</p>
          </div>
          <div className="choose-item" data-aos="flip-left">
            <FontAwesomeIcon icon={faClock}  />
            <h3>Fast Processing</h3>
            <p>We work efficiently to ensure quick asset recovery.</p>
          </div>
          <div className="choose-item" data-aos="flip-left">
            <FontAwesomeIcon icon={faUserShield}  />
            <h3>Privacy Protection</h3>
            <p>We maintain strict confidentiality to safeguard your data.</p>
          </div>
        </div>
      </section>
      <div className="about-mission">
        <h2>Our Commitment to You</h2>
        <div className="about-mission-content">
            <p>At Asset Have, your security is our priority. We level advanced technology to attack, recover, and secure stolen or lost assets. Every case is handled with utmost confidentiality and professionalism to ensure peace of mind while we work towards a successful resolution.</p>
            <img src={BoxShield} alt="" />
        </div>
      </div>
      <div className="about-cta">
        <h2>Ready to secure Your Assets?</h2>
        <p>Get in touch with us today and let our experts guide your through the process.</p>
        <Link to ="/contact" className="about-button">Contact Us</Link>
      </div>
    </div>
  );
};

export default AboutUs;