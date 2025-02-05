import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faSearchDollar, faWallet, faFingerprint, faGavel, faTools,faHandHoldingUsd,faChartLine,faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Header from "../Components/Header"; // Import Header
import Footer from "../Components/Footer"; // Import Footer

const servicesData = [
  {
    title: "🔐 Crypto Asset Recovery",
    icon: faShieldAlt,
    description: `
      Losing access to your cryptocurrency can be devastating. 
      AssetHaven specializes in recovering lost, stolen, or inaccessible crypto assets through advanced blockchain forensics, 
      legal procedures, and partnerships with exchanges and cybersecurity experts. 
      Whether your funds were *hacked, scammed, or lost due to a forgotten password, we work tirelessly to track and reclaim them.`,
    link: "/contact",
  },
  {
    title: "🕵️‍♂️ Fraud Investigation",
    icon: faSearchDollar,
    description: `
      With the rise of crypto scams, investors need *protection from fraud. 
      Our fraud investigation team analyzes suspicious transactions, phishing attempts, Ponzi schemes, and investment frauds* to identify culprits 
      and gather legal evidence. We collaborate with law enforcement agencies* to ensure justice and financial recovery.`,
    link: "/contact",
  },
  {
    title: "🛡️ Wallet Security & Protection",
    icon: faWallet,
    description: `
      Keeping your digital assets safe requires strong wallet security. 
      We help clients secure their private keys, enable multi-signature security, protect against phishing attacks, and educate users 
      on the best practices for *preventing unauthorized access* to their wallets.`,
    link: "/contact",
  },
  {
    title: "🔎 Blockchain Transaction Tracing",
    icon: faFingerprint,
    description: `
      We specialize in tracking and analyzing blockchain transactions to help individuals and businesses trace the movement of digital assets. 
      Whether you’re dealing with a lost transaction, stolen funds, or suspicious activity, our blockchain forensics experts use advanced tools to follow the money.`,
    link: "/contact",
  },
  {
    title: "⚖️ Legal & Regulatory Compliance",
    icon: faGavel,
    description: `
      Crypto regulations are constantly evolving. We provide legal guidance to businesses and investors, 
      ensuring they comply with global anti-money laundering (AML) and Know Your Customer (KYC) regulations. 
      Our team helps navigate tax obligations, licensing requirements, and compliance frameworks to avoid legal risks.`,
    link: "/contact",
  },
  {
    title: "🛠️ Recommended Security Tools",
    icon: faTools,
    description: `
      AssetHaven provides access to trusted security tools that help protect your digital assets. 
      From *hardware wallets and secure VPNs to anti-malware software and transaction monitoring tools*, 
      we recommend the best solutions to *enhance your crypto security* and keep hackers away.`,
    link: "/contact",
  },
  {
    title: "💰 Money Recovery",
    icon: faHandHoldingUsd,
    description: `
      Losing money to scams, fraud, or unauthorized transactions can be overwhelming. 
      Our Money Recovery service helps individuals and businesses track lost funds, identify responsible parties, and reclaim financial assets. 
      With expertise in financial investigations, legal frameworks, and strategic recovery solutions, 
      we work with financial institutions, law enforcement, and regulatory agencies to get your money back. 

      Whether it’s crypto fraud, investment scams, or lost business funds—we’re here to help you recover and secure your future.`,
    link: "/contact",
  },
  {
    title: "📊 Financial Advisory",
    icon: faChartLine,
    description: `
      Managing finances in a digital world requires expert guidance. Our financial advisors help individuals and businesses 
      develop secure financial plans, manage investments, and make informed financial decisions. 

      Whether you're dealing with crypto investments, business finances, risk assessment, or compliance strategies, 
      we provide personalized financial planning to help you achieve your financial goals while minimizing risks.
      
      Our advisors specialize in wealth management, investment analysis, risk mitigation, and legal financial frameworks to keep you financially secure.`,
    link: "/contact",
  },
  {
    title: "⚠️ Risk & Fraud Prevention",
    icon: faExclamationTriangle,
    description: `
      Avoid falling victim to scams, fraud, and security threats before they happen. 
      Our Risk & Fraud Prevention Consulting service helps individuals and businesses identify potential risks, 
      prevent fraudulent transactions, and enhance their cybersecurity defenses. 

      We provide fraud risk assessments, scam detection training, phishing attack prevention, and cybersecurity strategies to keep your assets safe. 
      Prevention is key—secure your finances before fraudsters strike!`,
    link: "/contact",
  },

];

const ServicesPage = () => {
  return (
    <>
      <Header /> {/* Add Header */}
      <section className="services-page">
        <div className="services-container">
          <h1 className="services-title">🔹 Our Services</h1>
          <p className="services-subtitle">
            AssetHaven offers professional crypto security and recovery solutions.  
            Whether you've lost funds, need fraud investigation, or seek legal compliance, we've got you covered.
          </p>

          <div className="services-grid">
            {servicesData.map((service, index) => (
              <div key={index} className="service-box">
                <FontAwesomeIcon icon={service.icon} className="service-icon" />
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
          <div className="services-cta">
            <h3>Need help with crypto security or recovery</h3>
            <Link to= "/contact" className="services-contact-button">Contact Us</Link>
          </div>
        </div>
      </section>
      <Footer /> {/* Add Footer */}
    </>
  );
};

export default ServicesPage;