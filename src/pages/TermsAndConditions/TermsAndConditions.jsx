import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
// Image imports
import eligibilityImg from "../../assets/images/eligibility.png";
import appPurposeImg from "../../assets/images/apppurpose.png";
import registrationImg from "../../assets/images/registration.png";
import communitiesImg from "../../assets/images/communities.png";
import ecochallengesImg from "../../assets/images/ecochallenges.png";
import locationImg from "../../assets/images/location.png";
import prohibitedImg from "../../assets/images/prohibited.png";
import brandImg from "../../assets/images/brand.png";
import modificationsImg from "../../assets/images/modifications.png";
import intellectualImg from "../../assets/images/intelectual.png";
import lawImg from "../../assets/images/law.png";
import contactUsImg from "../../assets/images/contactus.png";

const sections = [
  {
    title: "Eligibility",
    content:
      "To use GoodFoot, you must be at least 13 years old, provide accurate and complete information during registration, and accept and comply with these Terms.",
    image: eligibilityImg,
  },
  {
    title: "App Purpose",
    content:
      "GoodFoot is a sustainability engagement platform that enables individuals to track their carbon footprint, join or create communities, participate in AI-verified eco-challenges, and allows brands to sponsor challenges.",
    image: appPurposeImg,
  },
  {
    title: "Account Registration",
    content:
      "You may register using Google Sign-In or Email. You are responsible for maintaining the confidentiality of your login credentials.We are not liable for any unauthorised account access.",
    image: registrationImg,
  },
  {
    title: "Communities and Organisations",
    content:
      "Users can create communities by selecting a geo-location and a name, with each community requiring a minimum of two members. Each user can be linked to only one organisation—such as a company, board, or municipality—and verified organisations can access anonymous sustainability reports for their members.",
    image: communitiesImg,
  },
  {
    title: "Eco Challenges & Eco Points",
    content:
      "Users earn Eco Points by completing challenges, with all submissions verified via Gemini AI. These Eco Points contribute to individual monthly scores, community monthly scores, and organisation annual scores. GoodFoot does not offer monetary rewards, deposits, coupons, or carbon credits.",
    image: ecochallengesImg,
  },
  {
    title: "Use of Location Data",
    content:
      "With your permission, GoodFoot may access your device’s location to auto-suggest nearby communities, enable map features, and show local challenge participation. You may disable location access at any time; however, some features may be limited.",
    image: locationImg,
  },
  {
    title: "Prohibited Activities",
    content:
      "By using the app, you agree not to misrepresent information or identity, upload false or misleading challenge data, harass or impersonate other users, violate community guidelines, or use the app for commercial advertising without prior approval.",
    image: prohibitedImg,
  },
  {
    title: "Brand Sponsorships",
    content:
      "Brands can apply to sponsor eco-challenges, which will be clearly marked as sponsored. Sponsorship does not influence challenge verification or Eco Point calculation. GoodFoot reserves the right to approve or reject any sponsorship application.",
    image: brandImg,
  },
  {
    title: "Modifications & Updates",
    content:
      "We may update features, content, or Terms without prior notice. Continued use after changes means you accept the updated Terms.",
    image: modificationsImg,
  },
  {
    title: "Intellectual Property",
    content:
      "All content on GoodFoot—including UI designs, challenge formats, logos, and analytics—is owned by GoodFoot or its licensors. You may not reuse or reproduce any part of the platform without written consent.",
    image: intellectualImg,
  },
  {
    title: "Governing Law",
    content:
      "These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in [Your City, e.g., Bengaluru], India.",
    image: lawImg,
  },
  {
    title: "Contact Us",
    content: "For questions, email: support@goodfoot.in",
    image: contactUsImg,
  },
];

const TermsAndConditionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <main className="bg-black text-black font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-28 px-6 text-center overflow-hidden">
        {/* Floating Background Shapes */}
        <div
          className="absolute w-72 h-72 bg-green-600 rounded-full opacity-20 left-[30%] top-10 blur-2xl animate-pulse-slow"
          data-aos="zoom-in"
          data-aos-delay="200"
        />
        <div
          className="absolute w-8 h-8 bg-green-700 rounded-full bottom-10 right-16 opacity-70 animate-drift"
          data-aos="fade-left"
          data-aos-delay="400"
        />
        <div
          className="absolute w-14 h-14 rounded-full p-[2px] bg-gradient-to-r from-green-500 via-black to-white left-1/2 bottom-20 transform -translate-x-1/2 animate-float"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="w-full h-full rounded-full bg-black/60 backdrop-blur-md" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Terms and Conditions
          </h1>
          <p
            className="text-gray-300 text-lg leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Welcome to GoodFoot. These Terms and Conditions govern your use of
            the GoodFoot mobile application. By using GoodFoot, you agree to be
            bound by these Terms. If you do not agree, please do not use our
            services.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-20">
        <div className="absolute w-12 h-12 border-2 border-green-500 rounded-full left-1/4 bottom-20 transform -translate-x-1/2 animate-float" />

        {sections.map((sec, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            data-aos="fade-up"
          >
            {/* Image */}
            <div className="w-full md:w-1/3">
              <img
                src={sec.image}
                alt={sec.title}
                className="w-full rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                data-aos="zoom-in"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-2/3">
              <h2
                className="text-2xl md:text-3xl font-bold text-green-600 mb-4"
                data-aos="fade-right"
              >
                {sec.title}
              </h2>
              <p
                className="text-white text-lg leading-relaxed"
                data-aos="fade-left"
              >
                {sec.content}
              </p>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
};

export default TermsAndConditionsPage;
