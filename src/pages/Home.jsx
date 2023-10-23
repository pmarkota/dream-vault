import React from "react";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import FeaturesBenefits from "../components/Home/FeaturesBenefits/FeaturesBenefits";
import About from "../components/Home/About/About";
import Footer from "../components/Home/Footer/Footer";
import { SubscriptionPlans } from "../components/Home/SubscriptionPlans/SubscriptionPlans";
import { HowItWorks } from "../components/Home/HowItWorks/HowItWorks";

function Home() {
  return (
    <div className="">
      <HeroSection />
      <FeaturesBenefits />
      <HowItWorks />
      <SubscriptionPlans />
      <About />
      <Footer />
    </div>
  );
}

export default Home;
