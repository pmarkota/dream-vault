import React from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchLatestDream } from "../fetchers/dreamFetchers";

export const useLatestDream = () => {
  const response = useQuery({
    queryKey: "latestDream",
    queryFn: () => fetchLatestDream(),
  });
  console.log(response.json());
  return response.json();
};
