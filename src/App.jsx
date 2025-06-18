import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home/Home";
import BrandSponsorship from "./pages/BrandSponsorship/BrandSponsorship";
import PrivacyPolicy from "./pages/privacypolicy/privacyPolicy";
import TermsConditions from "./pages/TermsAndConditions/TermsAndConditions";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // animations trigger once per element
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-sans flex flex-col">
        <Header />

        <main className="flex-grow ">
          <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/brand-sponsorship" element={<BrandSponsorship />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
