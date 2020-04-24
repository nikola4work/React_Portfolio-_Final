import React from "react";
import "./Styles/About.css";
import Me3 from "../Components/Images/Me3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";


function About() {
  return (
    <div className="container" id="about_page">
      <div className="container">
        <div className="row">
          <div className="col" id="title_container">
            <img src={Me3} className="profile" alt=""></img>
            <h1 className="about_name">Nikola Jovanovic</h1>
            <h3 className="about_subtitle">Full Stack Web Developer</h3>
            <h5 className="example">React Potfolio Example</h5>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="about_me_text">
              {" "}
              UX/UI design-thinking, responsive web design and creation are my
              passions. Delighting users by creating UX/UI experiences that are
              inspiring, engaging, and memorable are what drive me and motivate
              me to do more. Experienced in Front-End and Back-End Technologies.
              I am extremely passionate about approaching programming and design
              challenges from different angles and collaborating with others to
              create value-driven web applications and products that delight
              users and keep them coming back.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
