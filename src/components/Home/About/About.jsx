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
        <h2 className="mb-4 text-3xl font-semibold">Platform Mission</h2>
        <p className="mb-6 text-xl">
          At <span className="font-bold text-cyan-500">DreamVault</span>, we are
          driven by a profound belief in the power of dreams. Our mission is to
          provide a safe and inspiring space for dreamers like you to explore
          the mysteries of your subconscious mind. We're passionate about dream
          journaling because we understand that every dream is a unique
          narrative waiting to be unraveled.
        </p>
        <p className="mb-6 text-xl">
          Our goal is to help you embark on a journey of self-discovery,
          personal growth, and creative inspiration through the art of dream
          journaling. We are committed to offering you the tools, insights, and
          community support you need to delve deep into the realm of your
          dreams.
        </p>
        <p className="mb-6 text-xl">
          By fostering a community of dreamers, we aspire to encourage a greater
          understanding of oneself, to decode the symbols of the subconscious,
          and to empower you to tap into the boundless potential of your inner
          world. Your dreams are the canvas, and we're here to guide you as you
          paint a vivid portrait of your own mind.
        </p>
        <p className="text-xl">
          Join us in this adventure, and together, let's explore the enigmatic
          stories your dreams have to tell.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
