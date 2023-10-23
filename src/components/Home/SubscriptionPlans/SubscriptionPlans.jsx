import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const SubscriptionPlans = () => {
  return (
    <div class="h-[50rem] bg-gray-100 overflow-auto">
      <div class="container mx-auto max-w-4xl">
        <div class="mt-10 text-center">
          <h1 class="text-4xl font-bold text-gray-800">Pricing plans</h1>
          <p class="text-lg mt-3 font-semibold">Every plan is a monthly plan</p>
        </div>
        <div class="mt-8">
          <div></div>
        </div>
        <hr class="mt-10" />
        <motion.div
          class="flex space-x-10 pt-10"
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
          <div class="py-12">
            <div class="bg-white pt-4 rounded-xl space-y-6 overflow-hidden  transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
              <div class="px-8 flex justify-between items-center">
                <h4 class="text-xl font-bold text-gray-800">Free Trial</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h1 class="text-4xl text-center font-bold">$0</h1>
              <p class="px-4 text-center text-sm ">
                This plan is for those who want to try out journaling with power
                of AI and are not sure if they want to commit to a paid plan.
              </p>
              <ul class="text-center">
                <li>
                  <a href="#" class="font-semibold">
                    Up to 5 AI images per month
                  </a>
                </li>
                <li>
                  <a href="#" class="font-semibold">
                    Try out AI empowered journaling
                  </a>
                </li>
                <li>
                  <a href="#" class="font-semibold text-white">
                    a
                  </a>
                </li>
              </ul>
              <div class="text-center bg-gray-200 ">
                <button class="inline-block my-6 font-bold text-gray-800">
                  <Link to="/">Get started today</Link>
                </button>
              </div>
            </div>
          </div>
          <div class="py-12">
            <div class="bg-white  pt-4 rounded-xl space-y-6 overflow-hidden transition-all duration-500 transform hover:-translate-y-6 -translate-y-2 scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
              <div class="px-8 flex justify-between items-center">
                <h4 class="text-xl font-bold text-gray-800">Serious</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-pink-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </div>
              <h1 class="text-4xl text-center font-bold">$4.99</h1>
              <p class="px-4 text-center text-sm ">
                This plan is for those who want to embrace all benefits of dream
                journaling such as better sleep, better memory, and better
                mental health.
              </p>
              <ul class="text-center">
                <li>
                  <a href="#" class="font-semibold">
                    Up to 45 AI images per month
                  </a>
                </li>
                <li>
                  <a href="#" class="font-semibold">
                    Priority customer support
                  </a>
                </li>
                <li>
                  <a href="#" class="font-semibold">
                    Access to all features
                  </a>
                </li>
              </ul>
              <div class="text-center bg-cyan-500 ">
                <button class="inline-block my-6 font-bold text-white">
                  <Link to="/">Get started today</Link>
                </button>
              </div>
            </div>
          </div>
          <div class="py-12 filter blur-[7px]">
            <div class="bg-white pt-4 rounded-xl space-y-6 overflow-hidden transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
              <div class="px-8 flex justify-between items-center">
                <h4 class="text-xl font-bold text-gray-800">Business</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h1 class="text-4xl text-center font-bold">$14.99</h1>
              <p class="px-4 text-center text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                esse ex labore non voluptatum cumque id molestiae unde in.
                Aperiam, optio ipsum.
              </p>
              <ul class="text-center">
                <li>
                  <a href="#" class="font-semibold">
                    Unlimited AI images
                  </a>
                </li>
                <li>
                  <a href="#" class="font-semibold">
                    24/7 customer support
                  </a>
                </li>
                <li>
                  <a href="#" class="font-semibold">
                    Access to all features and early access to new features
                  </a>
                </li>
              </ul>
              <div class="text-center bg-gray-200 ">
                <button class="inline-block my-6 font-bold text-gray-800">
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
