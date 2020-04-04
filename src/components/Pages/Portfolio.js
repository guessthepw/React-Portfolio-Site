import React, { Component } from "react";
import Header from "../Common/Header";
import image from "../assets/img/about-img.jpeg";
import Portfolio from "../Common/Portfolio";
import Footer from "../Common/Footer";

class PortfolioPage extends Component {
  render() {
    return (
      <div>
        <Header
          title="Portfolio"
          subtitle="our work"
          showButton={false}
          image={image}
        />
        <Portfolio />

        <Footer />
      </div>
    );
  }
}

export default PortfolioPage;
