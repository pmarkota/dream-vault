import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import dreamImage from "../../../assets/dreamFandB.png";

export const FeaturesBenefits = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-neutral-800">
      <img
        src={dreamImage}
        className="object-cover w-64 h-64 mb-8 shadow-xl rounded-xl shadow-pink-900"
        alt="Dreams"
      ></img>
      <div className="max-w-3xl p-8 text-white shadow-xl shadow-neutral-700 h-fit rounded-2xl pb-28">
        <h1 className="mb-4 text-2xl font-bold text-center md:text-4xl">
          Why keep track of your dreams?
        </h1>
        <p className="text-base leading-7 text-center md:text-lg">
          Why track your dreams? They offer a glimpse into your inner world,
          revealing{" "}
          <span className="font-bold text-cyan-400">emotions, aspirations</span>
          , and the mysteries of your mind. Dream journaling is your key to
          unlocking this enigmatic realm. By capturing your dreams on paper, you
          embark on a journey of self-discovery and introspection. These
          stories, often veiled in symbolism, can be a source of{" "}
          <span className="font-bold text-cyan-400">
            inspiration, creativity
          </span>
          , and personal growth.
        </p>
        <br></br>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
          }}
          className="mx-auto w-fit"
        >
          <Link
            to="/signup"
            className="px-4 py-2 font-bold text-white rounded-full bg-cyan-400 hover:bg-cyan-500"
          >
            Start Dreaming
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
export default FeaturesBenefits;
