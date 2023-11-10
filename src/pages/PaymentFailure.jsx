import React from "react";
import { Link } from "react-router-dom";

export const PaymentFailure = () => {
  return (
    <div class="flex items-center justify-center h-screen">
      <div class="p-1 rounded-2xl shadow-lg bg-gradient-to-r from-cyan-500 via-cyan-700 to-cyan-500">
        <div class="flex flex-col items-center p-4 space-y-2 rounded-2xl bg-white">
          <svg
            class="mx-auto h-16 w-16 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
          <h1 class="text-4xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
            Something went wrong!
          </h1>
          <p>
            Thank you for your interest! Something went wrong with the payment.
            Please try again or contact us.
          </p>
          <Link
            to="/"
            class="inline-flex items-center px-4 py-2 text-white bg-red-600 border border-red-600  rounded-full hover:bg-red-700 focus:outline-none focus:ring cursor-pointer"
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
