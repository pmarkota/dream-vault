import React from "react";
import { Link } from "react-router-dom";
import { useCreateCheckoutSession } from "../../services/paymentsApi";

export const CheckoutSerious = () => {
  const createCheckoutSessionMutation = useCreateCheckoutSession();
  const handleCheckout = () => {
    createCheckoutSessionMutation.mutate({
      priceId: "price_1OAaSsA0uJcL26TxPF5TNWY8",
    });
  };
  return (
    <div className="min-h-screen mx-5 text-center text-white ">
      <div className="pb-16 mx-auto mt-10 transition-all duration-500 ease-out rounded-lg w-fit bg-gradient-to-tr from-cyan-400 to-cyan-500 hover:to-cyan-700">
        <h1 className="pt-10 text-3xl font-bold text-center">
          Review Membership
        </h1>
        <p className="pt-12 text-3xl text-neutral-100">Membership plan</p>
        <div className="flex items-center justify-center w-20 h-20 mx-auto bg-white rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-cyan-500"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </div>
        <div className="flex pt-2 space-x-4">
          <div className="py-1 mx-2 rounded-lg bg-gradient-to-tr from-neutral-700 via-cyan-900 to-neutral-900">
            <h1 className="text-lg font-bold text-neutral-200">Serious Plan</h1>
            <p className="px-3 text-lg text-neutral-200">
              Billed monthly. Renews automatically, cancel any time.
            </p>
          </div>
        </div>
        <div className="mx-2 cursor-pointer" onClick={() => handleCheckout()}>
          <div className="min-w-full py-1 mt-3 font-bold bg-white rounded-full x-3 text-neutral-800">
            Continue to checkout
          </div>
        </div>
        <div className="mx-2 cursor-pointer">
          <div className="min-w-full py-1 mt-3 font-bold text-white rounded-full bg-neutral-800 x-3">
            <Link to="/">Cancel</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
