import React from "react";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Header from "./Components/Header";
import Home  from "./Pages/Home"
import Resources from "./Pages/Resources"
import Pricing from "./Pages/Pricing"
import Services from "./Pages/Services"
import ScamTracing from "./Pages/ScamTracing"
import ContactUs from "./pages/ContactUs"
import './index.css'

function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path="/" element ={<Home/>}></Route>
      <Route path="/resources" element ={<Resources/>}></Route>
      <Route path="/services" element ={<Services/>}></Route>
      <Route path="/pricing" element ={<Pricing/>}></Route>
      <Route path="/scam-tracing" element ={<ScamTracing/>}></Route>
      <Route path="/contact" element ={<ContactUs/>}></Route>
    </Routes>
   </Router>
  );
}

export default App;