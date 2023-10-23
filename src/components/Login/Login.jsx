import React from "react";
import logo from "../../assets/DarkLogo.png";
import useAuth from "../../hooks/useAuth";

export const Login = () => {
  const isLoggedIn = useAuth();

  return (
    <div className="flex">
      <div className="w-1/2 min-h-screen p-6 bg-gradient-to-b from-white to-neutral-400 ">
        <h2 className="mb-2 text-4xl font-bold">Welcome back</h2>
        <p className="mb-4 text-xl">Sign in to your account</p>
        <label className="text-gray-700" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="flex items-center w-full py-2 pl-2 mb-4 border border-gray-300 rounded-md"
          placeholder="Enter your username"
        />
        <label className="text-gray-700" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="flex items-center w-full py-2 pl-2 mb-4 border border-gray-300 rounded-md"
          placeholder="●●●●●●●●●"
        />
        <button className="w-full py-2 font-semibold text-white rounded-md bg-cyan-700">
          Sign in to your account
        </button>
        <p className="mt-4">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>
      <div className="w-1/2 p-6 bg-gradient-to-b from-cyan-600 to-cyan-800">
        <div className="px-10 py-3 pb-[1px] mx-auto bg-neutral-800 rounded-lg shadow-lg shadow-neutral-600 hover:shadow-xl hover:shadow-neutral-800 transition ease-in-out duration-500 mb-10 w-fit">
          <img src={logo} alt="Logo" className="w-32 mx-auto mb-4 auto" />
        </div>
        <h3 className="text-6xl font-bold text-white">
          Explore the world’s leading design portfolios.
        </h3>
        <p className="mt-4 text-lg text-gray-100">
          Millions of designers and agencies around the world showcase their
          portfolio work on Flowbite - the home to the world’s best design and
          creative professionals.
          {/* Add more content here */}
        </p>
      </div>
    </div>
  );
};
