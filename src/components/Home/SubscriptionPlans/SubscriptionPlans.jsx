import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const SubscriptionPlans = () => {
  return (
    <div className="h-[50rem] bg-gray-100 overflow-auto md:block hidden">
      <div className="container max-w-4xl mx-auto">
        <div className="mt-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Pricing plans</h1>
          <p className="mt-3 text-lg font-semibold">
            Every plan is a monthly plan
          </p>
        </div>
        <div className="mt-8">
          <div></div>
        </div>
        <hr className="mt-10" />
        <motion.div
          className="flex pt-10 space-x-10"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
            bounce: 0.5,
          }}
        >
          <div className="py-12">
            <div className="pt-4 space-y-6 overflow-hidden transition-all duration-500 transform bg-white shadow-xl cursor-pointer rounded-xl hover:-translate-y-6 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center justify-between px-8">
                <h4 className="text-xl font-bold text-gray-800">Free Trial</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                ></svg>
              </div>
              <h1 className="text-4xl font-bold text-center">$0</h1>
              <p className="px-4 text-sm text-center ">
                This plan is for those who want to try out journaling with power
                of AI and are not sure if they want to commit to a paid plan.
              </p>
              <ul className="text-center">
                <li>
                  <a href="#" className="font-semibold">
                    Up to 5 AI images per month
                  </a>
                </li>
                <li>
                  <a href="#" className="font-semibold">
                    Try out AI empowered journaling
                  </a>
                </li>
                <li>
                  <a href="#" className="font-semibold text-white">
                    a
                  </a>
                </li>
              </ul>
              <div className="text-center bg-gray-200 ">
                <button className="inline-block my-6 font-bold text-gray-800">
                  <Link to="/pricing">Get started today</Link>
                </button>
              </div>
            </div>
          </div>
          <Link to="/checkout-serious" className="py-12">
            <div className="pt-4 space-y-6 overflow-hidden transition-all duration-500 transform scale-105 -translate-y-2 bg-white shadow-xl cursor-pointer rounded-xl hover:-translate-y-6 hover:shadow-2xl">
              <div className="flex items-center justify-between px-8">
                <h4 className="text-xl font-bold text-gray-800">Serious</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-pink-600"
                  fill="none"
                  viewBox="0 0 24 24"
                />
              </div>
              <h1 className="text-4xl font-bold text-center">$4.99</h1>
              <p className="px-4 text-sm text-center ">
                This plan is for those who want to embrace all benefits of dream
                journaling such as better sleep, better memory, and better
                mental health.
              </p>
              <ul className="text-center">
                <li>
                  <a href="#" className="font-semibold">
                    Up to 45 AI images per month
                  </a>
                </li>
                <li>
                  <a href="#" className="font-semibold">
                    Priority customer support
                  </a>
                </li>
                <li>
                  <a href="#" className="font-semibold">
                    Access to all features
                  </a>
                </li>
              </ul>
              <div className="text-center bg-cyan-500 ">
                <button className="inline-block my-6 font-bold text-white">
                  <Link to="/checkout-serious">Get started today</Link>
                </button>
              </div>
            </div>
          </Link>
          <div className="py-12 filter blur-[7px]">
            <div className="pt-4 space-y-6 overflow-hidden transition-all duration-500 transform bg-white shadow-xl cursor-pointer rounded-xl hover:-translate-y-6 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center justify-between px-8">
                <h4 className="text-xl font-bold text-gray-800">Business</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                ></svg>
              </div>
              <h1 className="text-4xl font-bold text-center">$14.99</h1>
              <p className="px-4 text-sm text-center ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                esse ex labore non voluptatum cumque id molestiae unde in.
                Aperiam, optio ipsum.
              </p>
              <ul className="text-center">
                <li>
                  <a href="#" className="font-semibold">
                    Unlimited AI images
                  </a>
                </li>
                <li>
                  <a href="#" className="font-semibold">
                    24/7 customer support
                  </a>
                </li>
                <li>
                  <a href="#" className="font-semibold">
                    Access to all features and early access to new features
                  </a>
                </li>
              </ul>
              <div className="text-center bg-gray-200 ">
                <button className="inline-block my-6 font-bold text-gray-800">
                  <Link to="/">Get started today</Link>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
