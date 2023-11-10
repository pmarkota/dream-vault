import React, { useEffect, useState } from "react";
import { useLatestDream } from "../../services/dreamsApi";
import meteorRain from "../../assets/meteor-rain.gif";
import defaultDreamImg from "../../assets/default-dream.jpg";

export const LatestDream = () => {
  const { data, status } = useLatestDream();
  const token = localStorage.getItem("token");

  // Define the latest dream state as null initially
  const [latestDream, setLatestDream] = useState(null);

  useEffect(() => {
    // Check if the query is successful and the data is available
    console.log(data);
    if (data.isSuccess && data.data) {
      setLatestDream(data);
    }
  }, [data]);

  if (status === "loading") {
    // If the data is not yet available, show a loading indicator
    return (
      <div className="mx-auto w-fit text-neutral-200">
        <h1 className="mt-4 text-2xl">Your latest dream</h1>
        <div className="px-5 py-5 font-bold text-center uppercase rounded-md shadow-lg bg-gradient-to-b from-neutral-800 to-neutral-700 shadow-neutral-500 ring-2 ring-neutral-600">
          <h1>Loading...</h1>{" "}
          <img src={meteorRain} className="h-auto rounded-full w-44" alt="" />
        </div>
      </div>
    );
  }
  // if (data.message === "No dreams found") {
  //   // If there are no dreams found, display a message
  //   return (
  //     <div className="mx-auto w-fit text-neutral-200">
  //       <h1 className="mt-4 text-2xl">You haven't journaled yet</h1>
  //       <div className="px-5 py-5 font-bold text-center uppercase rounded-md shadow-lg bg-gradient-to-b from-neutral-800 to-neutral-700 shadow-neutral-500 ring-2 ring-neutral-600">
  //         <h1>No dreams found</h1>{" "}
  //         <img src={meteorRain} className="h-auto rounded-full w-44" alt="" />
  //       </div>
  //     </div>
  //   );
  // }

  // Once the data is available, render the latest dream
  return (
    <div className="mx-auto w-fit text-neutral-200">
      <h1 className="mt-4 text-2xl">Your latest dream</h1>
      <div className="px-5 py-5 font-bold text-center uppercase rounded-md shadow-lg bg-gradient-to-b from-neutral-800 to-neutral-700 shadow-neutral-500 ring-2 ring-neutral-600">
        <h1 className="mb-4 text-3xl font-bold">{latestDream.dreamTitle}</h1>
        <img
          src={
            latestDream.images.length === 0
              ? defaultDreamImg
              : latestDream.images[0]
          }
          className="h-auto mb-4 rounded-lg w-44"
          alt=""
        />
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold">{latestDream.dreamRating} / 5</p>
          <p className="text-lg">
            {new Date(latestDream.dreamDate).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};
