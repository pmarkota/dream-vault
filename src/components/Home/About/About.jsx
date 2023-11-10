import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="py-12 text-white bg-neutral-700"
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
    >
      <div className="container mx-auto text-center">
        <div className="py-3 mx-5 shadow-md rounded-2xl shadow-neutral-700 bg-neutral-600">
          <h2 className="mb-4 text-3xl font-semibold">Our Mission</h2>
          <p className="mb-6 text-xl">
            At <span className="font-bold text-cyan-500">DreamVault</span>,
            we're all about lucid dreaming. Our mission is to empower you to
            explore your subconscious and unlock the power of your dreams. Join
            us on a journey of self-discovery, creativity, and inner potential.
          </p>
          <p className="text-xl">
            Let's decode your dreams and discover the enigmatic stories they
            have to tell. Join us and paint a vivid portrait of your own mind.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
