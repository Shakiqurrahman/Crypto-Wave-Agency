import React from "react";
import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import Team from "../components/Team";

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <WhyUs />
      <Team />
    </>
  );
};

export default HomePage;
