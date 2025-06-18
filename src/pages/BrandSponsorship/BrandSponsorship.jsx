import React from "react";

const BrandSponsorship = () => {
  return (
    <div className=" bg-black px-4 py-12 md:px-20 mt-12 mb-28">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Brand Sponsorship Application
        </h1>
        <p className="text-gray-400 mb-8">
          We invite you to sponsor verified eco-challenges on the GoodFoot
          platform. Submit your brand details and select the challenges you'd
          like to support.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScdb8fkQ8LZhMu4tPU_uMEeueRUiNlSjhuFojRH_eakCoS3aQ/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md transition"
        >
          Open Sponsorship Form
        </a>
      </div>
    </div>
  );
};

export default BrandSponsorship;
