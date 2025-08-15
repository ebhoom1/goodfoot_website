// import React from "react";
// import teamimg from "../../assets/images/teamimg.png";
// import { Cpu, Code2, BrainCircuit, LayoutDashboard } from "lucide-react";

// const TeamPage = () => {
//   return (
//     <div className="bg-black text-white min-h-screen py-20 px-6 md:px-24 space-y-24">
//       {/* Hero Section */}
//       <section className="text-center relative">
//         <h1 className="text-5xl md:text-5xl font-extrabold text-green-600 mb-6 drop-shadow-xl">
//           Meet the GoodFoot Team
//         </h1>
//         <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
//           We’re a mission-driven team combining climate action, technology, and
//           community engagement. From leadership to developers, we all share one
//           goal: building India’s most impactful sustainability platform.
//         </p>
//         <img
//           src={teamimg}
//           alt="GoodFoot Team"
//           className="w-medium max-h-[300px] object-cover rounded-2xl shadow-lg mb-10 mt-10 mx-auto"
//         />
//       </section>

//       {/* Leadership Cards */}
//       <section>
//         <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-10 text-center">
//           Leadership
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {[
//             {
//               name: "Sahil Satheesh. — Co-Founder & CEO",
//               desc: "A systems thinker and sustainability strategist. Sahil leads EBHOOM’s direction, IoT architecture, and ESG impact roadmap with a sharp focus on industrial automation and clean tech scalability.",
//               link: "https://www.linkedin.com/in/sahilsatheesh/",
//             },
//             {
//               name: "Faheem K. — Co-Founder & Director",
//               desc: "The operations backbone and product integrator. Faheem drives implementation across partner sites, aligning client needs with EBHOOM’s AutoNerve and GoodFoot platforms for real-world impact.",
//               link: "https://www.linkedin.com/in/fvh33m/",
//             },
//           ].map((leader, index) => (
//             <div
//               key={index}
//               className="bg-gradient-to-br from-[#0b0b0c] to-[#151515] border border-green-700 p-6 rounded-xl shadow-md hover:shadow-[0_0_20px_rgba(36,209,96,0.4)] transition duration-500"
//             >
//               <h3 className="text-2xl font-bold text-green-400 mb-2">
//                 {leader.name}
//               </h3>
//               <p className="text-sm text-gray-300 mb-3">{leader.desc}</p>
//               <a
//                 href={leader.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-green-400 underline text-sm"
//               >
//                 LinkedIn
//               </a>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Strategic Partners Section */}
//       <section>
//         <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-12 text-center">
//           Strategic Partners
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
//           {[
//             {
//               name: "OpenWater.in",
//               desc: "Water tech and analytics guidance",
//             },
//             {
//               name: "ECOSTP",
//               desc: "Nature-based sewage treatment & integration support",
//             },
//             {
//               name: "KSUM",
//               desc: "Government startup support and incubation partner",
//             },
//             {
//               name: "CUSAT",
//               desc: "Academic and technical validation for environmental systems",
//             },
//           ].map((partner, index) => (
//             <div
//               key={index}
//               className="bg-gradient-to-br from-[#0b0b0c] to-[#151515] border border-green-700 p-6 rounded-xl shadow-md hover:shadow-[0_0_20px_rgba(36,209,96,0.4)] transition duration-500"
//             >
//               <div className="flex items-center gap-3 mb-2">
//                 <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
//                 <h3 className="text-xl font-semibold text-white">
//                   {partner.name}
//                 </h3>
//               </div>
//               <p className="text-sm text-gray-300">{partner.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Core Team Expertise Section */}
//       <section>
//         <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-12 text-center">
//           Core Team Expertise
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
//           {[
//             {
//               title: "IoT Development",
//               icon: <Cpu className="w-10 h-10 text-green-400" />,
//               desc: "Embedded systems, sensor interfacing, RS485 communication",
//             },
//             {
//               title: "Fullstack Engineering",
//               icon: <Code2 className="w-10 h-10 text-green-400" />,
//               desc: "Modern web & mobile app development with real-time dashboards",
//             },
//             {
//               title: "AI & Verification",
//               icon: <BrainCircuit className="w-10 h-10 text-green-400" />,
//               desc: "Gemini AI integration, image validation & analytics pipelines",
//             },
//             {
//               title: "UI/UX Design",
//               icon: <LayoutDashboard className="w-10 h-10 text-green-400" />,
//               desc: "Mobile-first, human-centered design for climate impact engagement",
//             },
//           ].map((skill, index) => (
//             <div
//               key={index}
//               className="bg-gradient-to-br from-[#0b0b0c] to-[#151515] border border-green-700 p-6 rounded-xl shadow-md hover:shadow-[0_0_20px_rgba(36,209,96,0.4)] transition duration-500 text-center"
//             >
//               <div className="flex justify-center mb-4">{skill.icon}</div>
//               <h4 className="text-xl font-semibold text-white mb-2">
//                 {skill.title}
//               </h4>
//               <p className="text-sm text-gray-300">{skill.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Team Members */}
//       <section>
//         <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-10 text-center">
//           Team Members
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
//           {[
//             {
//               name: "Sruthi P.R",
//               role: "Software Developer",
//               desc: "The frontend dynamo behind GoodFoot’s mobile experience. Sruthi ensures every screen is fast, functional, and friendly — from eco-challenges to carbon scorecards.",
//               link: "https://www.linkedin.com/in/sruthi-p-r-794a79259/",
//             },
//             {
//               name: "Anusree Sudheesh",
//               role: "Software Developer",
//               desc: "The glue behind integrations. Anusree focuses on API orchestration, form validation, and ESG logic pipelines that power our compliance frameworks and reporting modules.",
//               link: "https://www.linkedin.com/in/anusree-sudheesh/",
//             },
//             {
//               name: "Krishnadev V",
//               role: "Software Developer",
//               desc: "A full-stack problem solver with a flair for clean code and modular design. Krishnadev specializes in backend logic, dashboard systems, and scalable cloud deployments.",
//               link: "https://www.linkedin.com/in/krishnadevv/",
//             },
//             {
//               name: "Mohammed Irfan",
//               role: "Software Developer",
//               desc: "UI/UX meets real-time tech. Irfan brings EBHOOM’s EMS and ESG dashboards to life with intuitive interfaces and socket-driven data visualizations.",
//               link: "https://www.linkedin.com/in/mohammed-irfan-264a8935b/",
//             },
//           ].map((member, index) => (
//             <div
//               key={index}
//               className="bg-gradient-to-br from-[#0b0b0c] to-[#151515] border border-green-700 rounded-2xl p-6 text-left shadow-md hover:shadow-[0_0_20px_rgba(36,209,96,0.4)] transition"
//             >
//               <h4 className="text-xl font-semibold text-white mb-1">
//                 {member.name}
//               </h4>
//               <p className="text-sm text-green-400 mb-2">{member.role}</p>
//               <p className="text-sm text-gray-300 mb-3">{member.desc}</p>
//               <a
//                 href={member.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-green-400 text-sm underline"
//               >
//                 View LinkedIn
//               </a>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default TeamPage;

import React, { useEffect } from "react";
import teamimg from "../../assets/images/teamimg.png";
import { Cpu, Code2, BrainCircuit, LayoutDashboard } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const TeamPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen py-20 px-6 md:px-24 space-y-24">
      {/* Hero Section */}
      <section className="text-center relative" data-aos="fade-down">
        <h1 className="text-5xl md:text-5xl font-extrabold text-green-600 mb-6 drop-shadow-xl">
          Meet the GoodFoot Team
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          We’re a mission-driven team combining climate action, technology, and
          community engagement. From leadership to developers, we all share one
          goal: building India’s most impactful sustainability platform.
        </p>
        <img
          src={teamimg}
          alt="GoodFoot Team"
          className="w-medium max-h-[300px] object-cover rounded-2xl shadow-lg mb-10 mt-10 mx-auto"
        />
      </section>

      {/* Leadership Cards */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-10 text-center">
          Leadership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[{
              name: "Sahil Satheesh — Co-Founder & CEO",
              desc: "A systems thinker and sustainability strategist. Sahil leads EBHOOM’s direction, IoT architecture, and ESG impact roadmap with a sharp focus on industrial automation and clean tech scalability.",
              link: "https://www.linkedin.com/in/sahilsatheesh/",
            },
            {
              name: "Mohammed Faheem — Co-Founder & Director",
              desc: "The operations backbone and product integrator. Faheem drives implementation across partner sites, aligning client needs with EBHOOM’s AutoNerve and GoodFoot platforms for real-world impact.",
              link: "https://www.linkedin.com/in/fvh33m/",
            }].map((leader, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="bg-gradient-to-br from-[#0b0b0c] to-[#151515] border border-green-700 p-6 rounded-xl shadow-md hover:shadow-[0_0_20px_rgba(36,209,96,0.4)] transition duration-500"
            >
              <h3 className="text-2xl font-bold text-green-400 mb-2">
                {leader.name}
              </h3>
              <p className="text-sm text-gray-300 mb-3">{leader.desc}</p>
              <a
                href={leader.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 underline text-sm"
              >
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Partners Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-12 text-center">
          Strategic Partners
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
          {[{
              name: "OpenWater.in",
              desc: "Water tech and analytics guidance",
            },
            {
              name: "ECOSTP",
              desc: "Nature-based sewage treatment & integration support",
            },
            {
              name: "KSUM",
              desc: "Government startup support and incubation partner",
            },
            {
              name: "CUSAT",
              desc: "Academic and technical validation for environmental systems",
            }].map((partner, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-gradient-to-br from-[#0b0b0c] to-[#151515] border border-green-700 p-6 rounded-xl shadow-md hover:shadow-[0_0_20px_rgba(36,209,96,0.4)] transition duration-500"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <h3 className="text-xl font-semibold text-white">
                  {partner.name}
                </h3>
              </div>
              <p className="text-sm text-gray-300">{partner.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Team Expertise Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-12 text-center">
          Core Team Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {[{
              title: "IoT Development",
              icon: <Cpu className="w-10 h-10 text-green-400" />,
              desc: "Embedded systems, sensor interfacing, RS485 communication",
            },
            {
              title: "Fullstack Engineering",
              icon: <Code2 className="w-10 h-10 text-green-400" />,
              desc: "Modern web & mobile app development with real-time dashboards",
            },
            {
              title: "AI & Verification",
              icon: <BrainCircuit className="w-10 h-10 text-green-400" />,
              desc: "Gemini AI integration, image validation & analytics pipelines",
            },
            {
              title: "UI/UX Design",
              icon: <LayoutDashboard className="w-10 h-10 text-green-400" />,
              desc: "Mobile-first, human-centered design for climate impact engagement",
            }].map((skill, index) => (
            <div
              key={index}
              data-aos="flip-left"
              data-aos-delay={index * 100}
              className="bg-gradient-to-br from-[#0b0b0c] to-[#151515] border border-green-700 p-6 rounded-xl shadow-md hover:shadow-[0_0_20px_rgba(36,209,96,0.4)] transition duration-500 text-center"
            >
              <div className="flex justify-center mb-4">{skill.icon}</div>
              <h4 className="text-xl font-semibold text-white mb-2">
                {skill.title}
              </h4>
              <p className="text-sm text-gray-300">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Members */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-10 text-center">
          Team Members
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          {[{
              name: "Sruthi P.R",
              role: "Software Developer",
              desc: "A backend developer who enjoys solving technical problems with clean code. Sruthi helps build our server systems, dashboards, and ESG reporting tools, ensuring they stay fast, reliable, and secure.",
              link: "https://www.linkedin.com/in/sruthi-p-r-794a79259/",
            },
            {
              name: "Anusree Sudheesh",
              role: "Software Developer",
              desc: "Anusree connects our frontend and backend logic, especially in our ESG and compliance tools. She helps ensure that data flows correctly, forms behave as expected, and reports are generated without a hitch.",
              link: "https://www.linkedin.com/in/anusree-sudheesh/",
            },
            {
              name: "Krishnadev V",
              role: "Software Developer",
              desc: "Krishnadev works on our mobile app, GoodFoot. With a strong eye for design and detail, he helps bring features like carbon tracking, challenges, and community tools into a smooth app experience for users.",
              link: "https://www.linkedin.com/in/krishnadevv/",
            },
            {
              name: "Mohammed Irfan",
              role: "Software Developer",
              desc: "Irfan is a frontend developer who focuses on making our dashboards and apps look clean and work smoothly. He brings real-time data to life with charts, maps, and user-friendly interfaces that are easy to use on any screen.",
              link: "https://www.linkedin.com/in/mohammed-irfan-264a8935b/",
            }].map((member, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-gradient-to-br from-[#0b0b0c] to-[#151515] border border-green-700 rounded-2xl p-6 text-left shadow-md hover:shadow-[0_0_20px_rgba(36,209,96,0.4)] transition"
            >
              <h4 className="text-xl font-semibold text-white mb-1">
                {member.name}
              </h4>
              <p className="text-sm text-green-400 mb-2">{member.role}</p>
              <p className="text-sm text-gray-300 mb-3">{member.desc}</p>
              <a
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 text-sm underline"
              >
                View LinkedIn
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
