import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import dreamImage from "../../../assets/dreamFandB.png";

export const HowItWorks = () => {
  const listItems = [
    "Sign Up: Create an account to get started.",
    "Record Dreams: Write down your dreams in your journal.",
    "Add Details: Include dream date, emotions, and descriptions.",
    "Explore Insights: Analyze your dreams for patterns and meaning.",
    "Share with the Community: Connect with other dreamers.",
  ];

  return (
    <div className="flex justify-center py-10 bg-neutral-800">
      <div className="max-w-3xl p-8 mx-5 text-white shadow-xl bg-neutral-700 shadow-neutral-700 h-fit rounded-2xl">
        <h1 className="mb-4 text-4xl font-bold">How it Works</h1>
        <ul className="pl-8 text-lg leading-7 list-disc">
          {listItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};
