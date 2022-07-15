import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Work from "./Components/Work";
import Intro from "./Components/Intro";
import Services from "./Components/Services";
import AboutMe from "./Components/AboutMe";

const Pages = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Work />
      <AboutMe />
      <Services />
      <Footer />
    </div>
  );
};

export default Pages;
