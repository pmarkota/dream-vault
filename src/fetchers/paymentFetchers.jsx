import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

const fetchCreateCheckoutSession = async (priceId) => {
  const response = await fetch(
    `${baseApiUrl}Payments/create-checkout-session`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ priceId }),
    }
  );
  const data = await response.json();

  redirectToCheckout(data.sessionId);

  return data;
};
const fetchToCustomerPortal = async (returnUrl) => {
  const response = await fetch(`${baseApiUrl}Payments/customer-portal`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      body: JSON.stringify({ returnUrl }),
    },
  });
  const data = await response.json();

  window.location.href = data.url;
  return data;
};
export { fetchCreateCheckoutSession };
const redirectToCheckout = async (sessionId) => {
  const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
  const { error } = await stripe.redirectToCheckout({
    sessionId,
  });
  if (error) {
    console.log(error);
  }
};
