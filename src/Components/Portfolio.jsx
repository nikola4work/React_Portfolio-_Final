import React from "react";
import "./Styles/Portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from "react-bootstrap";
import burger from "../Components/Images/burger.gif";
import codeQuiz from "../Components/Images/codeQuiz.gif";
import goat from "../Components/Images/goat.gif";
import notes from "../Components/Images/notes.gif";
import virtualfair from "../Components/Images/virtualfair.gif";
import weather from "../Components/Images/weather.gif";

function Portfolio() {
  return (
    <div className="container-fluid portfolio">
      <Container className="team">
        <Row className="style">
          <Col lg={4}>
            <div className="our-team-main">
              <div className="team-front">
                <img src={goat} alt="" className="img-fluid" />
              </div>

              <div className="team-back">
                <span>
                  <h2 className="work-title">G.O.A.T Kicks</h2>
                  <br />
                  Goat is a website where users can browse and filter trough
                  latest sneakers.
                  <form>
                    <button
                      className="button"
                      formaction="https://ashkiani.github.io/GOAT/home.html"
                      formTarget="_blank"
                    >
                      Live Preview
                    </button>
                  </form>
                </span>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="our-team-main">
              <div className="team-front">
                <img src={virtualfair} alt="" className="img-fluid" />
              </div>

              <div className="team-back">
                <span>
                  <h2 className="work-title">Virtual Fair</h2>
                  <br />
                  This initial version of the project will allow you browse a
                  list of jobs and apply for those jobs.
                  <form>
                    <button
                      className="button"
                      formaction="https://aqueous-cliffs-33447.herokuapp.com/"
                      formTarget="_blank"
                    >
                      Live Preview
                    </button>
                  </form>
                </span>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="our-team-main">
              <div className="team-front">
                <img src={codeQuiz} alt="" className="img-fluid" />
              </div>

              <div className="team-back">
                <span>
                  <h2 className="work-title">Code Quiz</h2>
                  <br />
                  Simple quiz game runs on JavaScript where users can test their
                  coding Knowledge.
                  <form>
                    <button
                      className="button"
                      formaction="https://nikola4work.github.io/CodeQuiz-JS/"
                      formTarget="_blank"
                    >
                      Live Preview
                    </button>
                  </form>
                </span>
              </div>
            </div>
          </Col>

          <Col lg={4} className="margin">
            <div className="our-team-main">
              <div className="team-front">
                <img src={notes} alt="" className="img-fluid" />
              </div>

              <div className="team-back">
                <span>
                  <h2 className="work-title">Notes App</h2>
                  <br />
                  An application that can be used to write, save, and delete
                  notes. Used Heroku to deploy the app.
                  <form>
                    <button
                      className="button"
                      formaction="http://niko-notes.herokuapp.com/"
                      formTarget="_blank"
                    >
                      Live Preview
                    </button>
                  </form>
                </span>
              </div>
            </div>
          </Col>

          <Col lg={4} className="margin">
            <div className="our-team-main">
              <div className="team-front">
                <img src={weather} alt="" className="img-fluid" />
              </div>

              <div className="team-back">
                <span>
                  <h2 className="work-title">Weather Dashboard</h2>
                  <br />
                  Weather Dashboard build on 3rd party API - where users can
                  check current & 5 days weather forecast.
                  <form>
                    <button
                      className="button"
                      formaction="https://nikola4work.github.io/WeatherForecast/"
                      formTarget="_blank"
                    >
                      Live Preview
                    </button>
                  </form>
                </span>
              </div>
            </div>
          </Col>
          <Col lg={4} className="margin">
            <div className="our-team-main">
              <div className="team-front">
                <img src={burger} alt="" className="img-fluid" />
              </div>

              <div className="team-back">
                <span>
                  <h2 className="work-title">Eat-Da-Burger</h2>
                  <br />
                  Eat-Da-Burger is a restaurant app that lets users input the
                  names of burgers they'd like to eat!
                  <form>
                    <button
                      className="button"
                      formaction="https://burger--app.herokuapp.com/"
                      formTarget="_blank"
                    >
                      Live Preview
                    </button>
                  </form>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
