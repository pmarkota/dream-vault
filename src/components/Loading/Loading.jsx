import React from "react";
import { MutatingDots } from "react-loader-spinner";
import { motion } from "framer-motion";

export const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[48rem] bg-gradient-to-t from-cyan-800 to-neutral-900">
      <motion.div
        className="w-fit h-fit"
        initial={{ y: 1000 }}
        animate={{ position: "relative", y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.75,
          ease: "easeOut",
          type: "spring",
          bounce: 0.2,
        }}
      >
        <MutatingDots
          height="100"
          width="100"
          color="#558cf2"
          secondaryColor="#316bd6"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          className="mb-96"
        />
      </motion.div>
    </div>
  );
};
