import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      className=" bg-neutral-800"
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
    >
      <div className="max-w-2xl mx-auto text-white py-5 pb-9">
        <div className="text-center  w-fit mx-auto">
          <h3 className="text-3xl mb-3">
            Start using{" "}
            <span className="text-cyan-500 font-bold ">DreamVault</span> for
            free
          </h3>
        </div>
        <div className="mt-16 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0">
            {" "}
            &copy; DreamVault, 2023.{" "}
          </p>
          <div className="order-1 md:order-2">
            <span className="px-2">
              <Link to="/about">About us</Link>
            </span>
            <span className="px-2 border-l">
              <Link to="/contact-us">Contact us</Link>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
