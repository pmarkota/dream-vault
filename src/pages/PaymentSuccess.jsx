import React from "react";
import { Link } from "react-router-dom";

export const PaymentSuccess = () => {
  return (
    <div class="flex items-center justify-center h-screen">
      <div class="p-1 rounded-2xl shadow-lg bg-gradient-to-r from-cyan-500 via-cyan-700 to-cyan-500">
        <div class="flex flex-col items-center p-4 space-y-2 rounded-2xl bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-green-600 w-28 h-28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 class="text-4xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-300">
            Thank You !
          </h1>
          <p>
            Thank you for your interest! Check your email for a link to the
            guide.
          </p>
          <Link
            to="/"
            class="inline-flex items-center px-4 py-2 text-white bg-green-600 border border-green-600  rounded-full hover:bg-green-700 focus:outline-none focus:ring cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-3 h-3 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            <span class="text-sm font-medium">Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
