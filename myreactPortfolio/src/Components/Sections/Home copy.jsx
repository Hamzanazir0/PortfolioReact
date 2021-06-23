import React from "react";

import PreLoader from "./Header,Footer,Preloader/PreLoader"
import Header from "./Header,Footer,Preloader/Header"

import Home from "./Home"
import Services from "./Services"
import Portfolio from "./Portfolio"
import Inspire from "./Inspire"
import Skills from "./Skills"
import Pricing from "./Pricing"
import Team from "./Team"
import Clients from "./Clients"
import Contact from "./Contact"
import Milestone from "./Milestone"

import Footer from "./Header,Footer,Preloader/Footer"

const Home = () => {
  return (
    <div>
      {/* This Div is for Adding the Custom Cursor */}
      <div className="cursor"></div> 

      {/* Main Site */}
      <div className="site-wrapper">

        {/* Pre Loader */}
        <PreLoader />

        {/* Header */}
        <Header />

        <div id="content" className="site-content center-relative">
          {/* <!-- Home --> */}
          <Home />

          {/* <!-- Services --> */}
          <Services />

          {/* <!-- Portfolio --> */}
          <Portfolio />

          {/* <!-- Inspire --> */}
          <Inspire />

          {/* <!-- Skills --> */}
          <Skills />

          {/* <!-- Pricing --> */}
          <Pricing />

          {/* <!-- Team --> */}
          <Team />

          {/* <!-- Clients --> */}
          <Clients />

          {/* <!-- Contact --> */}
          <Contact />

          {/* <!-- Milestones --> */}
          <Milestone />

        </div>

        {/* <!-- Footer --> */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
