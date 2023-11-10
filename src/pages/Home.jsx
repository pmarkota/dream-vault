import React, { useState, useEffect } from "react";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import FeaturesBenefits from "../components/Home/FeaturesBenefits/FeaturesBenefits";
import About from "../components/Home/About/About";
import Footer from "../components/Home/Footer/Footer";
import { SubscriptionPlans } from "../components/Home/SubscriptionPlans/SubscriptionPlans";
import { HowItWorks } from "../components/Home/HowItWorks/HowItWorks";
import { AnimatePresence, motion } from "framer-motion";
import { Loading } from "../components/Loading/Loading";

function Home() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const homePageTransition = {
    initial: { opacity: 0 }, // Set the initial opacity to 0
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const loadingPageTransition = {
    initial: { opacity: 0 }, // Set the initial opacity to 0
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            variants={loadingPageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            key="loadinghome"
          >
            <Loading />
          </motion.div>
        ) : (
          <motion.div
            variants={homePageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            key="home"
          >
            <HeroSection />
            <FeaturesBenefits />
            <HowItWorks />
            <SubscriptionPlans />
            <About />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;
