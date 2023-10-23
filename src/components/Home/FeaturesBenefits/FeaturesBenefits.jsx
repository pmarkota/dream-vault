import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import dreamImage from "../../../assets/dreamFandB.png";

export const FeaturesBenefits = () => {
  return (
    <div className="bg-neutral-800 py-10 flex justify-between">
      <div className="text-white shadow-xl shadow-neutral-700 h-fit rounded-2xl max-w-3xl ml-20 p-8 pb-28">
        <h1 className="text-4xl font-bold mb-4">
          Why keep track of your dreams?
        </h1>
        <p className="text-lg leading-7">
          Why track your dreams? They offer a glimpse into your inner world,
          revealing{" "}
          <span className="text-cyan-400 font-bold">emotions, aspirations</span>
          , and the mysteries of your mind. Dream journaling is your key to
          unlocking this enigmatic realm. By capturing your dreams on paper, you
          embark on a journey of self-discovery and introspection. These
          stories, often veiled in symbolism, can be a source of{" "}
          <span className="text-cyan-400 font-bold">
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
          className="w-fit"
        >
          <Link
            to="/signup"
            className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded-full"
          >
            Start Dreaming
          </Link>
        </motion.div>
      </div>
      <img
        src={dreamImage}
        className="w-96 object-cover ml-auto mr-10 rounded-xl shadow-xl shadow-pink-900"
        alt="Dreams"
      ></img>
    </div>
  );
};
export default FeaturesBenefits;
