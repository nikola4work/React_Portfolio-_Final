import React from "react";
import "./Styles/Portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import burger from "../Components/Images/burger.gif"
import codeQuiz from "../Components/Images/codeQuiz.gif";
import goat from "../Components/Images/goat.gif";
import notes from "../Components/Images/notes.gif";
import virtualfair from "../Components/Images/virtualfair.gif";
import weather from "../Components/Images/weather.gif";





function Portfolio() {
  return (
    <Container className="portfolio">
      <div className="container project">
        <div className="row">
          <div className="col-md-3 project-work">
            {" "}
            <img src={goat} alt="Avatar" className="image"></img>
            <div className="middle">
              <div className="text">
                <h3 className="work-title">G.O.A.T Kicks</h3>
                <p className="work-text">
                  Goat is a website where users can browse and filter trough
                  latest sneakers.
                </p>
                <form>
                  <button
                    className="button"
                    formaction="https://ashkiani.github.io/GOAT/home.html"
                    formTarget="_blank"
                  >
                    Live Preview
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-3 project-work">
            {" "}
            <img src={virtualfair} alt="Avatar" className="image"></img>
            <div className="middle">
              <div className="text">
                <h3 className="work-title">Virtual Fair</h3>
                <p className="work-text">
                  This initial version of the project will allow you browse a
                  list of jobs and apply for those jobs.
                </p>
                <form>
                  <button
                    className="button"
                    formaction="https://aqueous-cliffs-33447.herokuapp.com/"
                    formTarget="_blank"
                  >
                    Live Preview
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-3 project-work">
            {" "}
            <img src={codeQuiz} alt="Avatar" className="image"></img>
            <div className="middle">
              <div className="text">
                {" "}
                <h3 className="work-title">Code Quiz</h3>
                <p className="work-text">
                  Simple quiz game runs on JavaScript where users can test their
                  coding Knowledge
                </p>
                <form>
                  <button
                    className="button"
                    formaction="https://nikola4work.github.io/CodeQuiz-JS/"
                    formTarget="_blank"
                  >
                    Live Preview
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 project-work">
            {" "}
            <img src={notes} alt="Avatar" className="image"></img>
            <div className="middle">
              <div className="text">
                {" "}
                <h3 className="work-title">Notes App</h3>
                <p className="work-text">
                  An application that can be used to write, save, and delete
                  notes. Used Heroku to deploy the app.
                </p>
                <form>
                  <button
                    className="button"
                    formaction="http://niko-notes.herokuapp.com/"
                    formTarget="_blank"
                  >
                    Live Preview
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-3 project-work">
            {" "}
            <img src={burger} alt="Avatar" className="image"></img>
            <div className="middle">
              <div className="text">
                {" "}
                <h3 className="work-title">Eat-Da-Burger</h3>
                <p className="work-text">
                  Eat-Da-Burger is a restaurant app that lets users input the
                  names of burgers they'd like to eat!
                </p>
                <form>
                  <button
                    className="button"
                    formaction="https://burger--app.herokuapp.com/"
                    formTarget="_blank"
                  >
                    Live Preview
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-3 project-work">
            {" "}
            <img src={weather} alt="Avatar" className="image"></img>
            <div className="middle">
              <div className="text">
                {" "}
                <h3 className="work-title">Weather Dashboard</h3>
                <p className="work-text">
                  Weather Dashboard build on 3rd party API - where users can
                  check current & 5 days weather forecast
                </p>
                <form>
                  <button
                    className="button"
                    formaction="https://nikola4work.github.io/WeatherForecast/"
                    formTarget="_blank"
                  >
                    Live Preview
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Portfolio;
