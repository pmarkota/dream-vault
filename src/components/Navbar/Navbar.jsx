import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react";
import { motion } from "framer-motion";
import darkLogo from "../../assets/DarkLogo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-neutral-900 ">
      <div className="items-center justify-between shadow-xl lg:flex">
        <img
          src={darkLogo}
          className="mx-auto cursor-pointer lg:ml-5 lg:inline"
          onClick={toggleMobileMenu}
        ></img>
        {/* <Hamburger toggled={isMobileMenuOpen} toggle={setMobileMenuOpen} /> */}
        <div className="items-center hidden text-2xl lg:flex text-slate-200">
          <Link
            to="/"
            className="p-3 mr-5 transition-all duration-500 ease-in-out shadow-xl hover:bg-slate-200 hover:text-neutral-900 hover:shadow-neutral-500 shadow-neutral-700 ring ring-slate-200 rounded-xl"
          >
            Home
          </Link>
          <Link
            to="/dream-journal"
            className="p-3 mr-5 transition-all duration-500 ease-in-out shadow-xl hover:bg-cyan-600 bg-cyan-700 hover:shadow-cyan-500 hover:text-neutral-50 shadow-cyan-700 ring ring-cyan-200 rounded-xl"
          >
            Dream Journal
          </Link>
          <Link
            to="/pricing"
            className="p-3 mr-5 transition-all duration-500 ease-in-out shadow-xl hover:bg-slate-200 hover:text-neutral-900 hover:shadow-neutral-500 shadow-neutral-700 ring ring-slate-200 rounded-xl"
          >
            Pricing
          </Link>
          <Link
            to="/about"
            className="p-3 mr-5 transition-all duration-500 ease-in-out shadow-xl hover:bg-slate-200 hover:text-neutral-900 hover:shadow-neutral-500 shadow-neutral-700 ring ring-slate-200 rounded-xl"
          >
            About
          </Link>
          <Link
            to="/login"
            className={`p-3 transition-all duration-500 ease-in-out shadow-xl ${
              isLoggedIn ? "mr-5" : "mr-14"
            } hover:bg-slate-200 hover:text-neutral-900 hover:shadow-neutral-500 shadow-neutral-700 ring ring-slate-200 rounded-xl`}
          >
            Account
          </Link>
          {isLoggedIn && (
            <Link
              to="/login"
              className="p-3 transition-all duration-500 ease-in-out shadow-xl mr-14 hover:bg-slate-200 hover:text-neutral-900 hover:shadow-neutral-500 shadow-neutral-700 ring ring-slate-200 rounded-xl"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            >
              Logout
            </Link>
          )}
        </div>
      </div>

      {/* Mobile menu for small devices */}
      {isMobileMenuOpen && (
        <motion.div
          className="flex flex-col items-center mt-4 text-2xl lg:hidden text-slate-200"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">Home</Link>
          <Link
            to="/dream-journal"
            className="my-2 text-center rounded-md shadow-lg ring-2 ring-cyan-100 shadow-cyan-600 px-28 bg-cyan-700"
          >
            Dream Journal
          </Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Account</Link>
          {isLoggedIn && (
            <Link
              to="/login"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
              className="mb-3"
            >
              Logout
            </Link>
          )}
        </motion.div>
      )}
    </nav>
  );
}
