import React from "react";

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

const fetchLatestDream = async () => {
  const response = await fetch(`${baseApiUrl}dream/getlatestdream`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const data = await response.json();
  if (data.error) {
    console.log(data.error);
  }
  console.log(data);
  return data;
};

const fetchCreateDream = async (
  username,
  dreamTitle,
  dreamDescription,
  dreamVisualDescription,
  dreamDate,
  dreamPublic
) => {
  const response = await fetch(`${baseApiUrl}dream/createdream`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      dreamTitle,
      dreamDescription,
      dreamVisualDescription,
      dreamDate,
      dreamPublic,
    }),
  });
  const data = await response.json();
  if (data.error) {
    console.log(data.error);
  }
  console.log(data);
  return data;
};

export { fetchLatestDream, fetchCreateDream };
