import React, { Component } from "react";
import Header from "../Common/Header";
import image from "../assets/img/header-bg.jpg";

// Reusable components
import Services from "../Common/Services";
import Portfolio from "../Common/Portfolio";
import Team from "../Common/Team";
import Timeline from "../Common/Timeline";
import Footer from "../Common/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Header
          title="Welcome to my website"
          subtitle="All the cool kids hang out here"
          buttonText="tell me more"
          showButton={true}
          link="/services"
          image={image}
        />
        <Services />
        <Portfolio />
        <Timeline />
        <Team />

        <Footer />
      </div>
    );
  }
}

export default Home;
