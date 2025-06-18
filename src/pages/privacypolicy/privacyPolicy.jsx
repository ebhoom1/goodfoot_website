import React from "react";
import { motion } from "framer-motion";
import {
  FaUserShield,
  FaInfoCircle,
  FaLocationArrow,
  FaLock,
  FaShareAlt,
  FaSlidersH,
  FaShieldAlt,
  FaCogs,
  FaChild,
  FaGlobe,
  FaEnvelope,
  FaRedoAlt,
} from "react-icons/fa";

const ZigZagSection = ({ icon: Icon, title, content, reverse, isLast }) => (
  <motion.div
    initial={{ opacity: 0, x: reverse ? 100 : -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className={`relative flex flex-col md:flex-row ${
      reverse ? "md:flex-row-reverse" : ""
    } items-center`}
  >
    <div className="md:w-1/2 px-6 md:px-10 mb-6 md:mb-0 relative z-10">
      <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl">
        <div className="flex items-center text-green-400 text-xl font-bold mb-4">
          <Icon className="mr-3" />
          {title}
        </div>
        <div className="text-white/90 text-sm md:text-base leading-relaxed">
          {content}
        </div>
      </div>
      {!isLast && (
        <svg
          className="absolute left-1/2 -translate-x-1/2 bottom-[-80px] w-6 h-20 z-0"
          viewBox="0 0 24 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M12 0 C12 20, 12 60, 12 80"
            stroke="#22c55e"
            strokeDasharray="4 4"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 0.6 }}
          />
        </svg>
      )}
    </div>

    <div className="md:w-1/2 px-6 md:px-10"></div>
  </motion.div>
);

const PrivacyPolicyPage = () => {
  const sections = [
    {
      icon: FaInfoCircle,
      title: "1. Information We Collect",
      content: (
        <>
          <p className="mb-2 font-semibold">a) Personal Information</p>
          <ul className="list-disc ml-6 mb-3">
            <li>Name, Email, Age, Location, Workplace</li>
            <li>Sustainability Interests</li>
            <li>Photos submitted for eco-challenges</li>
          </ul>
          <p className="mb-2 font-semibold">b) Usage Information</p>
          <ul className="list-disc ml-6 mb-3">
            <li>Completed challenges, Eco Points, Participation data</li>
            <li>Device, OS, and session logs</li>
          </ul>
          <p className="mb-2 font-semibold">c) Location Information</p>
          <ul className="list-disc ml-6">
            <li>Used to suggest communities, challenges, zones</li>
          </ul>
        </>
      ),
    },
    {
      icon: FaLock,
      title: "2. How We Use Your Information",
      content: (
        <ul className="list-disc ml-6">
          <li>Improve app functionality and connect communities</li>
          <li>Display actions, verify challenges via AI</li>
          <li>Share data with verified orgs (if opted-in)</li>
        </ul>
      ),
    },
    {
      icon: FaShareAlt,
      title: "3. Information Sharing",
      content: (
        <ul className="list-disc ml-6">
          <li>No sale of personal data</li>
          <li>
            Shared only with: verified orgs, Gemini AI, analytics, or legal
            mandates
          </li>
        </ul>
      ),
    },
    {
      icon: FaSlidersH,
      title: "4. Your Rights & Choices",
      content: (
        <ul className="list-disc ml-6">
          <li>Update profile anytime</li>
          <li>Request data deletion</li>
          <li>Disable location or withdraw photo consent</li>
        </ul>
      ),
    },
    {
      icon: FaShieldAlt,
      title: "5. Data Security",
      content: (
        <ul className="list-disc ml-6">
          <li>Encrypted data transmission (HTTPS)</li>
          <li>Secure cloud storage & access control</li>
          <li>Practice safe password hygiene</li>
        </ul>
      ),
    },
    {
      icon: FaCogs,
      title: "6. Third-Party Services",
      content: (
        <>
          <ul className="list-disc ml-6">
            <li>Google Sign-In</li>
            <li>Firebase / AWS for hosting</li>
            <li>Gemini AI for challenge verification</li>
          </ul>
          <p className="mt-2">Each service has its own privacy policy.</p>
        </>
      ),
    },
    {
      icon: FaChild,
      title: "7. Children’s Privacy",
      content: (
        <p>
          GoodFoot is not intended for users under 13. If such data is found, it
          will be deleted.
        </p>
      ),
    },
    {
      icon: FaGlobe,
      title: "8. International Users",
      content: (
        <p>
          By using GoodFoot, you agree that your data may be transferred and
          stored in India or other countries where our infrastructure exists.
        </p>
      ),
    },
    {
      icon: FaEnvelope,
      title: "9. Contact Us",
      content: (
        <p>
          For any questions about your data or this Privacy Policy, email us at:{" "}
          <a className="text-green-400" href="mailto:privacy@goodfoot.in">
            privacy@goodfoot.in
          </a>
        </p>
      ),
    },
    {
      icon: FaRedoAlt,
      title: "10. Policy Updates",
      content: (
        <p>
          This policy may change. Updates will be posted here and significant
          changes will be notified in-app.
        </p>
      ),
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <svg
          className="absolute top-[-150px] left-[-150px] opacity-30 w-[600px] h-[600px] pointer-events-none"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="blobGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#111111" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>
          <path
            fill="url(#blobGradient)"
            d="M43.1,-75.3C54.5,-66.8,62.5,-54.3,71.3,-41.3C80.1,-28.2,89.8,-14.1,87.8,-1.5C85.7,11.2,72,22.4,61.4,34.4C50.8,46.4,43.2,59.2,32,67.6C20.8,76.1,5.9,80.1,-7.6,83.5C-21.1,86.9,-33.2,89.6,-46.7,85.8C-60.1,82,-74.9,71.7,-78.1,57.7C-81.3,43.6,-72.9,26,-70.8,10.4C-68.7,-5.3,-72.8,-18.8,-69.1,-30.6C-65.3,-42.4,-52.8,-52.6,-39.6,-59.5C-26.5,-66.3,-13.3,-70,-0.4,-69.4C12.5,-68.8,25,-64,43.1,-75.3Z"
            transform="translate(100 100)"
          />
        </svg>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl px-8 py-10 max-w-3xl text-center shadow-xl"
          >
            <div className="flex justify-center text-green-400 text-5xl mb-4">
              <FaShieldAlt />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-300 text-lg mb-6">
              Learn how we protect your data while empowering your
              sustainability journey.
            </p>
            <a
              href="#privacy-content"
              className="inline-block px-6 py-3 text-black font-semibold bg-green-400 rounded-full hover:bg-green-500 transition"
            >
              Read Full Policy
            </a>
          </motion.div>
        </div>
      </div>

      {/* Policy Sections */}
      <div
        id="privacy-content"
        className="py-20 px-4 md:px-10 max-w-6xl mx-auto"
      >
        {sections.map((section, index) => (
          <ZigZagSection
            key={index}
            icon={section.icon}
            title={section.title}
            content={section.content}
            reverse={index % 2 !== 0}
            isLast={index === sections.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
