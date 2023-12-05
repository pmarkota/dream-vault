import React, { useEffect, useState } from "react";
import { useLatestDream } from "../../services/dreamsApi";
import meteorRain from "../../assets/meteor-rain.gif";
import defaultDreamImg from "../../assets/default-dream.jpg";
import { useQuery } from "@tanstack/react-query";
import { fetchLatestDream } from "../../fetchers/dreamFetchers";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const LatestDream = () => {
  const navigate = useNavigate();
  const { data: latestDream, isLoading, isError } = useLatestDream();
  const token = localStorage.getItem("token");

  // If the query is loading, show a loading indicator
  if (isLoading) {
    return (
      <div className="mx-auto w-fit text-neutral-200">
        <h1 className="mt-4 text-2xl">Loading your latest dream</h1>
        <div className="px-5 py-5 font-bold text-center uppercase rounded-md shadow-xl bg-gradient-to-b from-neutral-800 to-neutral-700 shadow-slate-800 ">
          <h1>Loading...</h1>{" "}
          <img
            src={meteorRain}
            className="h-auto mx-auto rounded-full w-44"
            alt=""
          />
        </div>
      </div>
    );
  }
  {
    /*! WHEN USER HAS NO DREAMS */
  }
  if (latestDream.message === "No dreams found") {
    return (
      <motion.div
        className="mx-auto mt-5 w-fit text-neutral-200"
        initial={{ x: -1000, y: -1000 }}
        animate={{ x: 0, y: 0 }}
      >
        <h1 className="mt-4 text-2xl">You haven't journaled yet</h1>
        <div className="px-5 py-5 text-center rounded-md shadow-xl bg-gradient-to-b from-neutral-800 to-neutral-700 shadow-slate-800 ">
          <h1 className="font-extralight text-cyan-400">No dreams on record</h1>{" "}
          <img
            src={defaultDreamImg}
            className="h-auto mx-auto rounded-full shadow-2xl ring-1 ring-cyan-900 w-44 shadow-cyan-700"
            alt=""
          />
          <motion.p
            className="py-2 mt-3 font-thin transition-all duration-500 ease-out rounded-lg shadow-lg cursor-pointer bg-gradient-to-r from-cyan-600 via-violet-600 to-violet-800 shadow-violet-900 text-large"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 1 }}
            onClick={() => navigate("/dream-journal/new-dream")}
          >
            Start Journaling
          </motion.p>
        </div>
      </motion.div>
    );
  }
  // WHEN USER HAS DREAMS
  return (
    <motion.div
      className="mx-auto mt-5 rounded-lg shadow-xl w-fit text-neutral-200 shadow-blue-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.5, type: "spring", bounce: 0.25 }}
    >
      <div className="max-w-[18rem] mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              src={
                latestDream.images?.length === 0
                  ? defaultDreamImg
                  : latestDream?.images[0]
              }
              alt=""
              className="object-cover md:w-48"
            />
          </div>
          <div className="p-8">
            <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
              {new Date(latestDream?.dreamDate).toLocaleDateString()}
            </div>
            <h1 className="mt-2 text-2xl font-bold text-gray-900">
              {latestDream?.dreamTitle}
            </h1>
            <p className="mt-2 text-gray-600">
              {/* /* if dream description is longer than 100 characters, truncate it and add ellipsis at the end of the string and add a read more button to expand the text to full length when clicked on* */}
              {latestDream?.dreamDescription.length > 100
                ? latestDream?.dreamDescription.substring(0, 100) + "..."
                : latestDream?.dreamDescription}
            </p>
            <div className="flex items-center justify-between mt-4">
              <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
