import React from "react";
import PageWrapper from "./components/PageWrapper";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Pages
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Services from "./components/Pages/Services";
import Portfolio from "./components/Pages/Portfolio";
import Team from "./components/Common/Team";

function App() {
  return (
    <Router>
      <PageWrapper>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} exact={true} />
        <Route path="/contact" component={Contact} exact={true} />
        <Route path="/services" component={Services} exact={true} />
        <Route path="/portfolio" component={Portfolio} exact={true} />
        <Route path="/team" component={Team} exact={true} />
      </PageWrapper>
    </Router>
  );
}

export default App;
