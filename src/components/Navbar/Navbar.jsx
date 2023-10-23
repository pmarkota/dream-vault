import React from "react";
import { Link } from "react-router-dom";
import darkLogo from "../../assets/DarkLogo.png";

export default function Navbar() {
  return (
    <nav className="flex justify-between shadow-xl bg-neutral-900 ">
      <img src={darkLogo} className="inline ml-5 cursor-pointer"></img>
      <div className="flex items-center text-2xl text-slate-200">
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
          className="p-3 transition-all duration-500 ease-in-out shadow-xl mr-14 hover:bg-slate-200 hover:text-neutral-900 hover:shadow-neutral-500 shadow-neutral-700 ring ring-slate-200 rounded-xl"
        >
          Account
        </Link>
      </div>
    </nav>
  );
}
