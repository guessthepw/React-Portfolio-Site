import React, { Component } from "react";
import Header from "../Common/Header";
import image from "../assets/img/about-img.jpeg";
import Timeline from "../Common/Timeline";
import Team from "../Common/Team";
import Footer from "../Common/Footer";

class About extends Component {
  render() {
    return (
      <div>
        <Header
          title="About us"
          subtitle="A great story"
          showButton={false}
          image={image}
        />
        <Timeline />
        <Team />
        <Footer />
      </div>
    );
  }
}

export default About;
