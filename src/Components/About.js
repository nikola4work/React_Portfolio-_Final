import React from "react";
import "./Styles/About.css";
import Me from "../Components/Images/Me.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container fluid className="about_page">
      <div className="title_container">
        <h1 className="about_name">Nikola Jovanovic</h1>
        <p className="about_subtitle">React Portfolio display</p>
        <img src={Me} className="profile_pic" alt="img"></img>
      </div>

      <Container className="about_me_container">
        <Row>
          <Col>
            <h1 className="about_title">About Me</h1>

            <hr className="about_hr" />
            <p className="about_me_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus doloremque illum praesentium veritatis tempora et
              enim, itaque ipsam at sequi nihil sapiente iure a temporibus
              dolores. Deleniti tempora vitae perspiciatis possimus commodi quia
              harum aspernatur ratione? Exercitationem dicta libero odio unde
              facilis impedit autem laudantium vel odit aspernatur nesciunt
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
