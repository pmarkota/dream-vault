import React from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchCreateCheckoutSession } from "../fetchers/paymentFetchers";

export const useCreateCheckoutSession = () => {
  const createCheckoutSessionMutation = useMutation({
    mutationFn: ({ priceId }) => fetchCreateCheckoutSession(priceId),
  });
  return createCheckoutSessionMutation;
};
