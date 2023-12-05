import React, { useLayoutEffect, useEffect, useState } from "react";
import logo from "../../assets/DarkLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../../services/api";
import { motion } from "framer-motion";
import { MutatingDots } from "react-loader-spinner";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const registerMutation = useRegister();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useLayoutEffect(() => {
    if (isLoggedIn) {
      navigate("/dream-journal");
    }
  }, [isLoggedIn]);

  const handleRegister = async () => {
    const credentials = { email, username, password };
    const data = await registerMutation.mutateAsync(credentials, {
      onSuccess: (data) => {
        localStorage.setItem("token", data.token);
        navigate("/dream-journal");
      },
    });
  };

  return registerMutation.isLoading ? (
    <div className="flex items-center justify-center min-h-screen bg-gray-700">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="mx-auto my-auto w-fit"
      >
        <MutatingDots
          height="150"
          width="150"
          color="#82b0fa"
          secondaryColor="#366fc9"
          radius="10.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          className="min-w-full mx-auto "
        />
      </motion.div>
    </div>
  ) : (
    <div>
      {/* desktop */}
      <div className="hidden md:flex">
        <div className="w-1/2 min-h-screen p-6 bg-gradient-to-b from-white to-neutral-400 ">
          <h2 className="mb-2 text-4xl font-bold">Hello Dreamer!</h2>
          <p className="mb-4 text-xl">Create your account here</p>
          <label className="text-gray-700" htmlFor="emailPC">
            Email
          </label>
          <input
            type="email"
            id="emailPC"
            className="flex items-center w-full py-2 pl-2 mb-4 border border-gray-300 rounded-md"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="text-gray-700" htmlFor="usernamePC">
            Username
          </label>
          <input
            type="text"
            id="usernamePC"
            className="flex items-center w-full py-2 pl-2 mb-4 border border-gray-300 rounded-md"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="text-gray-700" htmlFor="passwordPC">
            Password
          </label>
          <input
            type="password"
            id="passwordPC"
            className="flex items-center w-full py-2 pl-2 mb-4 border border-gray-300 rounded-md"
            placeholder="●●●●●●●●●"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDownCapture={(e) => {
              if (e.key === "Enter") {
                handleRegister();
              }
            }}
          />
          <button
            className="w-full py-2 font-semibold text-white rounded-md bg-cyan-700"
            onClick={() => handleRegister()}
          >
            Create your account
          </button>
          <p className="mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-bold underline transition-all duration-500 ease-in-out text-cyan-500 active:text-cyan-400"
            >
              Sign in
            </Link>
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
      {/* mobile */}
      <div className="min-h-screen md:hidden bg-gradient-to-b from-cyan-600 to-cyan-800">
        <div className="p-6">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-white">Hello Dreamer!</h2>
            <p className="text-lg text-white">Create your account here</p>
          </div>
          <div className="mb-4">
            <label className="text-gray-100" htmlFor="emaiil">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="flex items-center w-full py-2 pl-2 mb-4 border border-gray-300 rounded-md"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="text-gray-100" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full py-2 pl-2 mb-2 text-gray-800 bg-gray-100 rounded-md"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-100" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full py-2 pl-2 mb-2 text-gray-800 bg-gray-100 rounded-md"
              placeholder="●●●●●●●●●"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDownCapture={(e) => {
                if (e.key === "Enter") {
                  handleRegister();
                }
              }}
            />
          </div>
          <button
            className="w-full py-2 font-semibold text-white rounded-md bg-cyan-900"
            onClick={() => handleRegister()}
          >
            Create your account
          </button>
          <p className="mt-4 text-gray-100">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-bold underline text-neutral-300 active:text-cyan-400"
            >
              Sign in
            </Link>
          </p>
        </div>
        <div className="px-10 py-3 pb-[1px] mx-auto bg-neutral-800 rounded-lg shadow-lg shadow-neutral-600 hover:shadow-xl hover:shadow-neutral-800 transition ease-in-out duration-500 mb-10">
          <img src={logo} alt="Logo" className="w-24 mx-auto mb-4 auto" />
        </div>
      </div>
    </div>
  );
};
