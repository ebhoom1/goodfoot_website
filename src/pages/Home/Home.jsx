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
import leftimg from "../../assets/images/leftimg.png";
import middleimg from "../../assets/images/middleimg.png";
import rightimg from "../../assets/images/rightimg.png";

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
    image: orgImg,
    text: (
      <div className="space-y-4">
        <ul className="list-disc list-inside space-y-2">
          <li>One organisation per user</li>
          <li>
            Organisations can be:
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Companies</li>
              <li>Municipalities</li>
              <li>Societies</li>
              <li>Trusts</li>
              <li>Boards</li>
              <li>Legal Entities</li>
            </ul>
          </li>
          <li>
            Once verified, they receive:
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Yearly sustainability reports</li>
              <li>Total Eco Points earned by employees</li>
              <li>Visibility on the public map</li>
            </ul>
          </li>
        </ul>
      </div>
    ),
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
                A new way to live sustainably. Track your impact. Complete
                real-world challenges. Join communities and support your
                workplace’s green goals.
              </p>
              <div
                className="flex justify-center gap-6"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <img
                  src={playStore}
                  alt="Google Play"
                  className="h-12 hover:scale-105 transition-transform duration-200 cursor-pointer"
                />
                <img
                  src={appStore}
                  alt="App Store"
                  className="h-12 hover:scale-105 transition-transform duration-200 cursor-pointer"
                />
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
              <h2 className="text-2xl font-bold text-green-400 mb-3">
                {item.title}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="relative py-24 sm:py-28 px-4 sm:px-6 overflow-hidden">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
    
    {/* Left Side: Mobile Mockups */}
    <div className="relative w-full lg:w-1/2 flex justify-center z-10 mb-12 lg:mb-0">
      <div className="relative w-64 sm:w-72 md:w-80 lg:w-96">
        {/* Center Mobile */}
        <img
          src={middleimg}
          alt="Mobile Mockup"
          className="shadow-2xl rounded-xl relative top-2 left-10 w-44 h-auto sm:w-64 sm:h-auto lg:w-[255px] lg:h-[526px] lg:top-6 lg:right-[-50px] z-10 transition-all duration-500 hover:scale-105 hover:shadow-[0px_0px_20px_rgba(34,197,94,0.6)]"
        />
        {/* Left Mobile */}
        <img
          src={leftimg}
          alt="Mobile Mockup"
          className="absolute top-4 left-[-60px] shadow-2xl rounded-2xl opacity-90 w-36 h-auto sm:w-48 sm:h-auto lg:w-[181px] lg:h-[373px] lg:top-10 lg:left-[-110px] md:left-[-130px]"
        />
        {/* Right Mobile */}
        <img
          src={rightimg}
          alt="Mobile Mockup"
          className="absolute top-4 right-[-60px] shadow-2xl rounded-2xl opacity-90 w-36 h-auto sm:w-48 sm:h-auto lg:w-[181px] lg:h-[373px] lg:top-10 lg:right-[-70px] md:right-[-120px]"
        />
      </div>
    </div>

    {/* Right Side: Text and Download Buttons with background glow */}
    <div className="lg:w-1/2 w-full relative text-center z-10 px-4">
      {/* Glowing background behind text content */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="w-72 h-72 bg-green-500 rounded-full opacity-20 blur-3xl animate-pulse-slow" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10">
        <h2
          className="text-4xl sm:text-5xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-xl"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          Coming Soon
        </h2>
        <p
          className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          The future is sustainable. You’re already part of it. <br />
          <span className="font-semibold text-green-300">GoodFoot</span> is how you start.
        </p>
        <div
          className="flex justify-center gap-5 mt-8"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <img
            src={playStore}
            alt="Google Play"
            className="h-12 sm:h-14 md:h-16 hover:scale-110 transition-transform duration-200 cursor-pointer"
          />
          <img
            src={appStore}
            alt="App Store"
            className="h-12 sm:h-14 md:h-16 hover:scale-110 transition-transform duration-200 cursor-pointer"
          />
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}
