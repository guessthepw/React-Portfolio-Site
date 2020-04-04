import React, { Component } from "react";
import Header from "../Common/Header";
import image from "../assets/img/about-img.jpeg";
import Team from "../Common/Team";
import Footer from "../Common/Footer";

class TeamPage extends Component {
  render() {
    return (
      <div>
        <Header
          title="Team"
          subtitle="we we are"
          showButton={false}
          image={image}
        />
        <Team />

        <Footer />
      </div>
    );
  }
}

export default TeamPage;
