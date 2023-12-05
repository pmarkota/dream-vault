import React from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchLatestDream, fetchCreateDream } from "../fetchers/dreamFetchers";

export const useLatestDream = () => {
  return useQuery({
    queryKey: ["getLatestDream"],
    queryFn: () => fetchLatestDream(),
  });
};

export const useCreateDream = () => {
  const createDreamMutation = useMutation({
    mutationFn: ({
      username,
      dreamTitle,
      dreamDescription,
      dreamVisualDescription,
      dreamDate,
      dreamPublic,
    }) =>
      fetchCreateDream(
        username,
        dreamTitle,
        dreamDescription,
        dreamVisualDescription,
        dreamDate,
        dreamPublic
      ),
  });
  return createDreamMutation;
};
