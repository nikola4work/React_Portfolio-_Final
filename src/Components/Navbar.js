import React from "react";
import "./Styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

import Container from "react-bootstrap/Container";

function Navbar() {
  return (
    <Router>
      <Container id="mySidenav" className="sidenav">
        <Link to="/About" id="about">
          About
          <span className="icons_about">
            <i class="fa fa-user"></i>
          </span>
        </Link>
        <Link to="/Portfolio" id="portfolio">
          Portfolio
          <span className="icons">
            <i class="fa fa-eye"></i>
          </span>
        </Link>
        <Link to="/Contact" id="contact">
          Contact
          <span className="icons">
            <i class="fa fa-user"></i>
          </span>
        </Link>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Portfolio">
            <Portfolio />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default Navbar;
