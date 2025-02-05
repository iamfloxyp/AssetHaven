import React from "react";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Header from "./Components/Header";
import AboutUs from "./Components/AboutUs"
import Home  from "./Pages/Home"
import Resources from "./Pages/Resources"
import Services from "./Pages/Services"
import ScamTracing from "./Pages/ScamTracing"
import ContactUs from "./pages/ContactUs"
import Terms from "./pages/Terms"
import Privacy from "./pages/Privacy"
import CryptoRecoveryGuide from "./pages/resources/CryptoRecoveryGuide";
import CyberSecurityProtection from "./pages/resources/CyberSecurityProtection";
import CryptoScamAlerts from "./pages/resources/CryptoScamAlerts";
import BlockchainTracing from "./pages/resources/BlockchainTracing";
import LegalCompliance from "./pages/resources/LegalCompliance";
import RecommendedTools from "./pages/resources/RecommendedTools";
import Blog from "./pages/resources/Blog"
import './index.css'

function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path="/" element ={<Home/>}></Route>
      <Route path="/" element = {<AboutUs/>} />
      <Route path="/resources" element ={<Resources/>}></Route>
      <Route path="/resources/crypto-recovery-guide" element={<CryptoRecoveryGuide />} />
      <Route path="/resources/cyber-security-protection" element={<CyberSecurityProtection />} />
      <Route path="/resources/crypto-scam-alerts" element={<CryptoScamAlerts />} />
      <Route path="/resources/blockchain-tracing" element={<BlockchainTracing />} />
      <Route path="/resources/legal-compliance" element={<LegalCompliance />} />
      <Route path="/resources/recommended-tools" element={<RecommendedTools />} />
      <Route path="/resources/updates" element={<Blog />} />
      <Route path="/services" element ={<Services/>}></Route>
      <Route path="/scam-tracing" element ={<ScamTracing/>}></Route>
      <Route path="/contact" element ={<ContactUs/>}></Route>
      <Route path="/terms" element ={<Terms/>}></Route>
      <Route path="/privacy" element ={<Privacy/>}></Route>
    </Routes>
   </Router>
  );
}

export default App;