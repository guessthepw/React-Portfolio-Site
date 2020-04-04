import React, { Component } from "react";
import Header from "../Common/Header";
import image from "../assets/img/about-img.jpeg";
import Services from "../Common/Services";
import Footer from "../Common/Footer";

class ServicesPage extends Component {
  render() {
    return (
      <div>
        <Header
          title="Services"
          subtitle="what we do"
          showButton={false}
          image={image}
        />
        <Services />

        <Footer />
      </div>
    );
  }
}

export default ServicesPage;
