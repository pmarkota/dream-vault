import React from "react";

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

const fetchUser = async (token) => {
  const response = await fetch(`${baseApiUrl}AppUser/getuserbytoken`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });
  const data = await response.json();
  console.log(data);
  return data;
};

export { fetchUser };
