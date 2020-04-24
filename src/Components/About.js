import React from "react";
import "./Styles/About.css";
import Me2 from "../Components/Images/Me2.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  function image() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  return (
    <Container fluid className="about_page">
      <div className="title_container">
        <h1 className="about_name">Nikola Jovanovic</h1>
        <p className="about_subtitle">React Portfolio Display</p>
        <div className="dropdown">
          <button onClick={image} className="dropbtn">
            Profile Image
          </button>
          <div id="myDropdown" className="dropdown-content">
            <img src={Me2} className="profile_pic" alt="img"></img>
          </div>
        </div>
      </div>

      <Container className="about_me_container">
        <div className="row">
          <div className="col-md-12">
            <p className="about_me_text">
              UX/UI design-thinking, responsive web design and creation are my
              passions. Delighting users by creating UX/UI experiences that are
              inspiring, engaging, and memorable are what drive me and motivate
              me to do more. Experienced in Front-End and Back-End Technologies.
              I am focused and deadline oriented. I am extremely passionate
              about approaching programming and design challenges from different
              angles and collaborating with others to create value-driven web
              applications and products that delight users and keep them coming
              back. Being part of a fast-paced, quality-driven team building
              products that drive true value and increase user-adoption are
              truly inspiring to me.
            </p>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default About;
