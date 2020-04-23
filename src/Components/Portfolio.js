import React from "react";
import "./Styles/Portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Me from "../Components/Images/Me.jpg";

function Portfolio() {
  return (
    <Container fluid className="portfolio">
      <Container className="portfolio_content"></Container>
    </Container>
  );
}

export default Portfolio;
