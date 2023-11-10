import React from "react";

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

const fetchLogin = async (username, password) => {
  const response = await fetch(`${baseApiUrl}appuser/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();
  return data;
};
const fetchRegister = async (email, username, password) => {
  const response = await fetch(`${baseApiUrl}appuser/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, username, password }),
  });
  const data = await response.json();
  return data;
};
export { fetchLogin, fetchRegister };
