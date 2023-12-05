import React from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchCreateCheckoutSession } from "../fetchers/paymentFetchers";
import { fetchToCustomerPortal } from "../fetchers/paymentFetchers";

export const useCreateCheckoutSession = () => {
  const createCheckoutSessionMutation = useMutation({
    mutationFn: ({ priceId }) => fetchCreateCheckoutSession(priceId),
  });
  return createCheckoutSessionMutation;
};

export const useToCustomerPortal = () => {
  const toCustomerPortalMutation = useMutation({
    mutationFn: ({ returnUrl }) => fetchToCustomerPortal(returnUrl),
  });
  return toCustomerPortalMutation;
};
