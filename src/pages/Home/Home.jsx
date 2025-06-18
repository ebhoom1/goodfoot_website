// import React, { useEffect, useRef } from "react";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import { Link } from "react-router-dom";
// import appStore from "../../assets/images/appstore.png";
// import playStore from "../../assets/images/playstore.png";
// import ecoChallenge from "../../assets/images/ecochallenge.png";
// import mapImage from "../../assets/images/map.png";
// import communityImg from "../../assets/images/community.png";
// import orgImg from "../../assets/images/organization.png";
// import leaderboardImg from "../../assets/images/leaderboard.png";
// import brandImg from "../../assets/images/brandpartner.png";
// import comingSoonImg from "../../assets/images/comingsoon.png";
// import AOS from "aos";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// const sectionsData = [
//   {
//     title: "Built for People Who Care",
//     text: "You — reduce your carbon footprint. Your Community — takes collective action. Your Organisation — tracks annual sustainability. Your Friends — keep you inspired.",
//     image: ecoChallenge,
//   },
//   {
//     title: "Eco-Challenges That Make a Difference",
//     text: "Daily, weekly, and monthly sustainability challenges. One global timer. Upload proof of action. Verified by Gemini AI. Earn Eco Points for every step.",
//     image: ecoChallenge,
//   },
//   {
//     title: "Explore. Connect. Lead.",
//     text: "View all Communities and Organisations on a dynamic map. Tap to see ESG insights, top contributors, and verified actions. Follow friends, challenge them, and rise on the leaderboard.",
//     image: mapImage,
//   },
//   {
//     title: "Communities — Created by You",
//     text: "Anyone can create a community by selecting a name and location. Admins are auto-selected based on engagement. Members contribute to monthly Eco Points and rank on the leaderboard.",
//     image: communityImg,
//   },
//   {
//     title: "Organisations — Designed to Drive Change",
//     text: "Companies, municipalities, trusts, and boards can verify themselves, track yearly sustainability, and access Eco Point reports.",
//     image: orgImg,
//   },
//   {
//     title: "The Leaderboards",
//     text: "Individual: Monthly points. Community: Total monthly points. Organisation: Yearly points. Compete, track progress, and stay motivated.",
//     image: leaderboardImg,
//   },
//   {
//     title: "For Brands",
//     text: "Sponsor verified eco-challenges and get visibility among real change-makers. We verify actions, not just impressions.",
//     image: brandImg,
//   },
// ];

// export default function Home() {
//   const scrollContainerRef = useRef(null);
//   const horizontalRef = useRef(null);

//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     const horizontal = horizontalRef.current;

//     const totalScrollWidth = horizontal.scrollWidth;

//     gsap.to(horizontal, {
//       x: () => -totalScrollWidth,
//       ease: "none",
//       scrollTrigger: {
//         trigger: container,
//         start: "top top",
//         end: () => `${horizontal.scrollWidth}`,
//         scrub: 1,
//         pin: true,
//         anticipatePin: 1,
//         invalidateOnRefresh: true,
//       },
//     });

//     return () => ScrollTrigger.getAll().forEach((t) => t.kill());
//   }, []);

//   useEffect(() => {
//     AOS.refresh();
//   }, []);

//   return (
//     <div className="bg-black text-white font-sans overflow-x-hidden">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-tr from-green-950 via-black to-black py-20 px-6 md:px-16 overflow-hidden">

//   <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

//     {/* Lottie Animation with fix */}
//     <div className="md:w-1/2" data-aos="fade-right">
//       <div className="scale-[1.3] md:scale-[1.5]">
//         <DotLottieReact
//           src="https://lottie.host/ae0489cb-33ea-485a-a1ce-5c448d84305f/asz5WaEYeI.lottie"
//           loop
//           autoplay
//           className="w-full max-w-lg mx-auto"
//         />
//       </div>
//     </div>

//     {/* Hero Text Content */}
//     <div
//       className="w-full md:w-1/2 text-center"
//       data-aos="fade-left"
//       data-aos-delay="200"
//     >
//       <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-lime-300 to-emerald-500 drop-shadow-lg mb-6">
//         GoodFoot – The Climate Action App
//       </h1>
//       <p className="text-lg md:text-xl text-gray-300 mb-8 backdrop-blur-md bg-white/5 px-4 py-3 rounded-xl border border-white/10 shadow-inner">
//         A new way to live sustainably. Track your impact. Complete real-world
//         challenges. Join communities and support your workplace’s green goals.
//       </p>

//       <div
//         className="flex justify-center gap-6"
//         data-aos="zoom-in"
//         data-aos-delay="400"
//       >
//         <img
//           src={playStore}
//           alt="Google Play"
//           className="h-12 hover:scale-105 transition-transform duration-200 drop-shadow-md cursor-pointer"
//         />
//         <img
//           src={appStore}
//           alt="App Store"
//           className="h-12 hover:scale-105 transition-transform duration-200 drop-shadow-md cursor-pointer"
//         />
//       </div>
//     </div>
//   </div>
// </section>

//       {/* content Section */}
//       <section className="overflow-hidden bg-black" ref={scrollContainerRef}>
//         <div ref={horizontalRef} className="flex w-fit py-20 px-8 space-x-12">
//           {sectionsData.map((item, index) => (
//             <div
//               key={index}
//               className="min-w-[70vw] flex-shrink-0 flex flex-col md:flex-row items-center"
//             >
//               {/* Image */}
//               <div className="md:w-2/5 w-full pr-6">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full max-h-[240px] object-contain rounded-xl shadow-md"
//                 />
//               </div>

//               {/* Text Box */}
//               <div className="md:w-3/5 w-full bg-gradient-to-br from-zinc-900 to-black p-6 md:p-8 rounded-2xl border border-green-800 shadow-lg">
//                 <h2 className="text-3xl font-bold text-green-400 mb-4">
//                   {item.title}
//                 </h2>
//                 <div className="text-gray-300 text-base leading-relaxed space-y-2">
//                   {item.title === "Built for People Who Care" && (
//                     <ul className="list-disc pl-5 space-y-1">
//                       <li>You — reduce your carbon footprint.</li>
//                       <li>Your Community — takes collective action.</li>
//                       <li>Your Organisation — tracks annual sustainability.</li>
//                       <li>Your Friends — keep you inspired.</li>
//                     </ul>
//                   )}

//                   {item.title === "Eco-Challenges That Make a Difference" && (
//                     <ul className="list-disc pl-5 space-y-1">
//                       <li>
//                         Daily, weekly, and monthly sustainability challenges
//                       </li>
//                       <li>One global timer for everyone</li>
//                       <li>Upload proof of action</li>
//                       <li>✅ Verified by Gemini AI</li>
//                       <li>Earn Eco Points for every step</li>
//                       <li className="mt-2 italic text-green-300">
//                         No distractions. Just real-world progress.
//                       </li>
//                     </ul>
//                   )}

//                   {item.title === "Explore. Connect. Lead." && (
//                     <ul className="list-disc pl-5 space-y-1">
//                       <li>
//                         View all Communities and Organisations on a dynamic map
//                       </li>
//                       <li>
//                         Tap to see ESG insights, top contributors, and verified
//                         actions
//                       </li>
//                       <li>
//                         Follow friends, challenge them, and rise on the
//                         leaderboard
//                       </li>
//                     </ul>
//                   )}

//                   {item.title === "Communities — Created by You" && (
//                     <ul className="list-disc pl-5 space-y-1">
//                       <li>
//                         Create a community by selecting a name and location
//                       </li>
//                       <li>Admins are auto-selected based on engagement</li>
//                       <li>Members contribute to monthly Eco Points</li>
//                       <li>Climb the leaderboard together</li>
//                     </ul>
//                   )}

//                   {item.title ===
//                     "Organisations — Designed to Drive Change" && (
//                     <>
//                       <p>One organisation per user. Eligible types include:</p>
//                       <ul className="list-disc pl-5 space-y-1">
//                         <li>Companies</li>
//                         <li>Municipalities</li>
//                         <li>Societies / Trusts / Boards</li>
//                         <li>Other legal entities</li>
//                       </ul>
//                       <p className="mt-2">Verified organisations receive:</p>
//                       <ul className="list-disc pl-5 space-y-1">
//                         <li>Yearly sustainability reports</li>
//                         <li>Eco Points earned by employees</li>
//                         <li>Visibility on the public map</li>
//                       </ul>
//                     </>
//                   )}

//                   {item.title === "The Leaderboards" && (
//                     <ul className="list-disc pl-5 space-y-1">
//                       <li>🧍 Individual – Monthly Eco Points</li>
//                       <li>👥 Community – Total monthly member points</li>
//                       <li>🏢 Organisation – Yearly employee points</li>
//                       <li className="mt-2 italic text-green-300">
//                         Challenge each other. Track progress. Stay motivated.
//                       </li>
//                     </ul>
//                   )}

//                   {item.title === "For Brands" && (
//                     <ul className="list-disc pl-5 space-y-1">
//                       <li>Sponsor verified eco-challenges</li>
//                       <li>Be seen by people taking action</li>
//                       <li>Support change, not just impressions</li>
//                       <li className="mt-2">
//                         📩{" "}
//                         <span className="text-green-400">info@goodfoot.in</span>
//                       </li>
//                     </ul>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section
//   className="w-screen overflow-hidden bg-green-950 relative py-28 px-6 flex flex-col items-center justify-center text-center"
//   data-aos="fade-up"
// >
//   <h2
//     className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-xl z-10"
//     data-aos="zoom-in"
//     data-aos-delay="100"
//   >
//     Coming Soon
//   </h2>

//   <p
//     className="text-lg text-white max-w-xl z-10 leading-relaxed"
//     data-aos="fade-up"
//     data-aos-delay="200"
//   >
//     The future is sustainable. You’re already part of it. <br />
//     <span className="font-semibold text-green-300">GoodFoot</span> is how you start.
//   </p>

//   <div
//     className="flex justify-center gap-5 mt-10 z-10"
//     data-aos="fade-up"
//     data-aos-delay="400"
//   >
//     <img
//       src={playStore}
//       alt="Google Play"
//       className="h-14 md:h-16 transition-transform duration-300 hover:scale-110 cursor-pointer drop-shadow-xl"
//     />
//     <img
//       src={appStore}
//       alt="App Store"
//       className="h-14 md:h-16 transition-transform duration-300 hover:scale-110 cursor-pointer drop-shadow-xl"
//     />
//   </div>
// </section>

//     </div>
//   );
// }

import React, { useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";
import appStore from "../../assets/images/appstore.png";
import playStore from "../../assets/images/playstore.png";
import ecoChallenge from "../../assets/images/ecochallenge.png";
import mapImage from "../../assets/images/map.png";
import communityImg from "../../assets/images/community.png";
import orgImg from "../../assets/images/organization.png";
import leaderboardImg from "../../assets/images/leaderboard.png";
import brandImg from "../../assets/images/brandpartner.png";
import peoplecareImg from "../../assets/images/ecochallenges.png";
import AOS from "aos";
import "aos/dist/aos.css";

const sectionsData = [
  {
    title: "Built for People Who Care",
    text: "You — reduce your carbon footprint. Your Community — takes collective action. Your Organisation — tracks annual sustainability. Your Friends — keep you inspired.",
    image: peoplecareImg,
  },
  {
    title: "Eco-Challenges That Make a Difference",
    text: "Daily, weekly, and monthly sustainability challenges. One global timer. Upload proof of action. Verified by Gemini AI. Earn Eco Points for every step.",
    image: ecoChallenge,
  },
  {
    title: "Explore. Connect. Lead.",
    text: "View all Communities and Organisations on a dynamic map. Tap to see ESG insights, top contributors, and verified actions. Follow friends, challenge them, and rise on the leaderboard.",
    image: mapImage,
  },
  {
    title: "Communities — Created by You",
    text: "Anyone can create a community by selecting a name and location. Admins are auto-selected based on engagement. Members contribute to monthly Eco Points and rank on the leaderboard.",
    image: communityImg,
  },
  {
    title: "Organisations — Designed to Drive Change",
    text: "Companies, municipalities, trusts, and boards can verify themselves, track yearly sustainability, and access Eco Point reports.",
    image: orgImg,
  },
  {
    title: "The Leaderboards",
    text: "Individual: Monthly points. Community: Total monthly points. Organisation: Yearly points. Compete, track progress, and stay motivated.",
    image: leaderboardImg,
  },
  {
    title: "For Brands",
    text: "Sponsor verified eco-challenges and get visibility among real change-makers. We verify actions, not just impressions.",
    image: brandImg,
  },
];

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">

      {/* Hero Section */}
      {/* <section className="bg-gradient-to-tr from-green-950 via-black to-black py-20 px-6 md:px-16 ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2" data-aos="fade-right">
            <div className="scale-[1.3] md:scale-[1.5]">
              <DotLottieReact
                src="https://lottie.host/ae0489cb-33ea-485a-a1ce-5c448d84305f/asz5WaEYeI.lottie"
                loop
                autoplay
              />
            </div>
          </div>
          <div
            className="w-full md:w-1/2 text-center"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-lime-300 to-emerald-500 drop-shadow-lg mb-6">
              GoodFoot – The Climate Action App
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 backdrop-blur-md bg-white/5 px-4 py-3 rounded-xl border border-white/10 shadow-inner">
              A new way to live sustainably. Track your impact. Complete
              real-world challenges. Join communities and support your
              workplace’s green goals.
            </p>
            <div className="flex justify-center gap-6" data-aos="zoom-in" data-aos-delay="400">
              <img src={playStore} alt="Google Play" className="h-12 hover:scale-105 transition-transform duration-200 cursor-pointer" />
              <img src={appStore} alt="App Store" className="h-12 hover:scale-105 transition-transform duration-200 cursor-pointer" />
            </div>
          </div>
        </div>
      </section> */}

<div className="relative bg-gradient-to-b from-black via-black to-green-800 text-white">
  <section className="pt-24 pb-36 px-6 md:px-16 z-10 relative">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="md:w-1/2" data-aos="fade-right">
        <div className="scale-[1.3] md:scale-[1.5]">
          <DotLottieReact
            src="https://lottie.host/ae0489cb-33ea-485a-a1ce-5c448d84305f/asz5WaEYeI.lottie"
            loop
            autoplay
          />
        </div>
      </div>
      <div
        className="w-full md:w-1/2 text-center"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-lime-300 to-emerald-500 drop-shadow-lg mb-6">
          GoodFoot – The Climate Action App
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 backdrop-blur-md bg-white/5 px-4 py-3 rounded-xl border border-white/10 shadow-inner">
          A new way to live sustainably. Track your impact. Complete real-world challenges. Join communities and support your workplace’s green goals.
        </p>
        <div className="flex justify-center gap-6" data-aos="zoom-in" data-aos-delay="400">
          <img src={playStore} alt="Google Play" className="h-12 hover:scale-105 transition-transform duration-200 cursor-pointer" />
          <img src={appStore} alt="App Store" className="h-12 hover:scale-105 transition-transform duration-200 cursor-pointer" />
        </div>
      </div>
    </div>
  </section>

  {/* Pure Black Downward-Facing Wave */}
  <div className="absolute bottom-0 left-0 w-full">
    <svg
      viewBox="0 0 1200 200"
      preserveAspectRatio="none"
      className="w-full h-[200px] rotate-180"
    >
      <path
        d="M0,0V46.29c47.79,22.2,103.59,32.17,
        158,28,70.36-5.37,136.33-33.31,
        206.8-37.5C438.64,32.43,512.34,53.67,
        583,72.05c69.27,18,138.3,24.88,
        209.4,13.08,36.15-6,69.85-17.84,
        104.45-29.34C989.49,25,1113-14.29,
        1200,52.47V0Z"
        fill="#000000"
      />
    </svg>
  </div>
</div>

     
      {/* Content Sections */}
      <section className="bg-black py-12 px-4 space-y-14">
        {sectionsData.map((item, index) => (
          <div
            key={index}
            className={`max-w-5xl mx-auto flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-6`}
            data-aos="fade-up"
          >
            <div className="md:w-1/2 w-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full max-h-[260px] object-cover rounded-xl shadow-md"
              />
            </div>
            <div className="md:w-1/2 w-full bg-gradient-to-br from-zinc-900 to-black p-5 rounded-xl border border-green-800 shadow-md">
              <h2 className="text-2xl font-bold text-green-400 mb-3">{item.title}</h2>
              <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Coming Soon */}
      <section className="relative py-32 px-6 text-center overflow-hidden mt-8">
        <div className="absolute w-72 h-72 bg-green-600 rounded-full opacity-20 left-[30%] top-10 blur-2xl animate-pulse-slow" data-aos="zoom-in" data-aos-delay="200" />
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-xl" data-aos="zoom-in" data-aos-delay="100">
          Coming Soon
        </h2>
        <p className="text-lg text-white max-w-xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
          The future is sustainable. You’re already part of it. <br />
          <span className="font-semibold text-green-300">GoodFoot</span> is how you start.
        </p>
        <div className="flex justify-center gap-5 mt-10" data-aos="fade-up" data-aos-delay="400">
          <img src={playStore} alt="Google Play" className="h-14 md:h-16 hover:scale-110 cursor-pointer" />
          <img src={appStore} alt="App Store" className="h-14 md:h-16 hover:scale-110 cursor-pointer" />
        </div>
      </section>
    </div>
  );
}
