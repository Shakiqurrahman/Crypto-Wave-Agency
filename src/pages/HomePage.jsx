import React from "react";
import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import Team from "../components/Team";
import OurClients from "../components/OurClients";
import Partners from "../components/Partners";

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <WhyUs />
      <Team />
      <OurClients />
      <Partners />
    </>
  );
};

export default HomePage;
