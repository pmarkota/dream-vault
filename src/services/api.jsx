import React from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchLogin } from "../fetchers/authFetchers";
import { fetchRegister } from "../fetchers/authFetchers";
import { fetchUser } from "../fetchers/userFetchers";

export const useLogin = () => {
  const loginMutation = useMutation({
    mutationFn: ({ username, password }) => fetchLogin(username, password),
  });
  return loginMutation;
};

export const useRegister = () => {
  const registerMutation = useMutation({
    mutationFn: ({ email, username, password }) =>
      fetchRegister(email, username, password),
  });
  return registerMutation;
};

export const useUser = () => {
  const userMutation = useMutation({
    mutationFn: ({ token }) => fetchUser(token),
  });
  return userMutation;
};
