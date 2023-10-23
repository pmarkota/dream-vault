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
      className="bg-blue-900  text-white py-12 md:py-24"
      style={backgroundStyle}
    >
      <div className="container  mx-auto flex flex-col items-center justify-center  py-20 bg-gradient-to-tr from-cyan-300/50 to-cyan-800/50 w-fit px-5 ml-20 bg-opacity-10  rounded-2xl shadow-lg shadow-cyan-300 hover:shadow-cyan-400 hover:shadow-xl transition-all ease-in duration-1000">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-2 md:mb-4">
          Dive into Your Dreamscapes
        </h1>
        <p className="text-sm md:text-lg text-center mb-4 md:mb-8">
          Unlock, Record, and Share Your Most Vivid Dreams with the World
        </p>
        <div className="flex space-x-4">
          <Link
            to="/signup"
            className="py-3 px-3 rounded-full bg-cyan-600 hover:bg-cyan-400 transition-all ease-in-out duration-500 ring ring-cyan-100  "
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
