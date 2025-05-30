import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How can I recover a stolen or lost asset online?",
    answer: "At AssetHaven, we help individuals recover stolen or lost digital assets. Our recovery process involves blockchain forensics, legal support, and exchange partnerships. Start by submitting your recovery case through our contact page."
  },
  {
    question: "How do I recover my crypto wallet after my phone was stolen?",
    answer: "If your phone was stolen and you lost access to your crypto wallet, AssetHaven can assist. We verify ownership, trace blockchain activity, and guide you through wallet recovery using secure methods."
  },
  {
    question: "Can I recover funds lost to a crypto scam?",
    answer: "Yes! AssetHaven helps track and recover funds lost to fake investment platforms or impersonators. We use smart investigation tools to follow the money trail and work with trusted partners to retrieve your assets."
  },
  {
    question: "What should I do if I lost login access to my exchange account?",
    answer: "If you've been locked out of your crypto exchange, our team can help reset access by contacting the exchange with proof of ownership and recovery documentation."
  },
  {
    question: "Is it possible to trace a stolen Bitcoin or Ethereum transaction?",
    answer: "Absolutely. AssetHaven uses blockchain analytics tools to trace stolen crypto transactions and work with exchanges or authorities to freeze or recover the funds."
  },

  // Original FAQs
  { question: "How does AssetHaven work?", answer: "AssetHaven specializes in recovering lost, stolen, or inaccessible crypto assets. Our team of experts utilizes blockchain analysis, legal channels, and cybersecurity tools to trace and restore your funds." },
  { question: "Can I trust AssetHaven?", answer: "Absolutely! We are a legitimate company with years of experience in asset recovery. Our team operates with full transparency, and we never request private keys or sensitive login details." },
  { question: "Do I need to share my wallet passwords?", answer: "No, we will never ask for your wallet password or private key. We use blockchain forensics and legal methods to track and recover your funds." },
  { question: "Are you legit, will you steal my funds?", answer: "We are a verified and ethical asset recovery service. Your funds remain yours at all times, and we only facilitate recovery using legal and secure methods." },
  { question: "I have zero wallet information, can you still help?", answer: "Yes! Even with minimal details, we can analyze transaction histories and work with exchanges to trace lost funds." },
  { question: "Can you recover scammed or stolen assets?", answer: "Yes, we specialize in tracking stolen crypto through forensic investigation, partnerships with law enforcement, and exchange cooperation." },
  { question: "How long does the recovery process take?", answer: "Recovery time depends on the complexity of the case. Some cases resolve in days, while others require weeks or months. We provide regular updates throughout the process." },
  { question: "What types of crypto can you recover?", answer: "We support recovery for all major cryptocurrencies, including Bitcoin, Ethereum, USDT, and others." },
  { question: "How much do you charge?", answer: "We operate on a success-based fee structure. This means you only pay if we successfully recover your assets. The percentage varies depending on case complexity." },
  { question: "I thought Bitcoin couldn’t be hacked, what gives?", answer: "Bitcoin itself is secure, but scams, phishing attacks, and exchange hacks can lead to losses. We help victims retrieve their funds through advanced blockchain analysis and partnerships." }
];

const FAQ = ({ pageVariant }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  

  return (
    <section className={`faq-section ${pageVariant === "resources" ? "faq-resources" : "faq-home"}`}>
      <h2>Frequently Asked Questions</h2>
      <p className="faq-subtext">Everything you need to know about our services.</p>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`} onClick={() => toggleAnswer(index)}>
            <div className="faq-question">
              <span>{faq.question}</span>
              <FontAwesomeIcon icon={activeIndex === index ? faMinus : faPlus} className="faq-icon" />
            </div>
            {activeIndex === index && (
              <div className={`faq-answer ${activeIndex === index ? "show" : ""}`}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="faq-contact">
        <p>
          Still have questions? <Link to="/contact">Contact Us</Link>
        </p>
      </div>
    </section>
  );
};

export default FAQ;