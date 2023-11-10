import React from "react";
import { Link } from "react-router-dom";
// import { RiseLoader } from "react-spinners";

const HeroSection = () => {
  const backgroundStyle = {
    backgroundImage: 'url("https://images.alphacoders.com/992/992128.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="py-12 text-white bg-blue-900 md:py-24"
      style={backgroundStyle}
    >
      <div className="container flex flex-col items-center justify-center px-5 py-20 mx-auto transition-all duration-1000 ease-in shadow-lg bg-gradient-to-tr from-cyan-300/50 to-cyan-800/50 w-fit bg-opacity-10 rounded-2xl shadow-cyan-300 hover:shadow-cyan-400 hover:shadow-xl">
        <h1 className="mb-2 text-2xl font-bold text-center md:text-4xl md:mb-4">
          Dive into Your Dreamscapes
        </h1>
        <p className="mb-4 text-sm text-center md:text-lg md:mb-8">
          Unlock, Record, and Share Your Most Vivid Dreams with the World
        </p>
        <div className="flex space-x-4">
          <Link
            to="/register"
            className="px-3 py-3 transition-all duration-500 ease-in-out rounded-full bg-cyan-600 hover:bg-cyan-400 ring ring-cyan-100 "
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
