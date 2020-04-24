import React from "react";
import "./Styles/Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <div className="container-fluid" id="bcg_contact">
      <div className="container wrapper">
        <div className="row">
          <div className="col">
            <div className="company-info">
              <h1 className="chat">Let's Chat!</h1>
              <br />
              <ul>
                <li>
                  <i className="fa fa-road"></i>Arlington, V.A
                </li>
                <br />
                <li>
                  <i className="fa fa-phone"></i> (202) 210-9355
                </li>
                <br />
                <li>
                  <i className="fa fa-envelope"></i> nikola4work@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="contact">
              <form id="contact-form">
                <p>
                  <label>Name</label>
                  <input type="text" name="name" id="name" required></input>
                </p>

                <p>
                  <label>Company</label>
                  <input type="text" name="company" id="company"></input>
                </p>

                <p>
                  <label>E-mail Address</label>
                  <input type="email" name="email" id="email" required></input>
                </p>

                <p>
                  <label>Phone Number</label>
                  <input type="text" name="phone" id="phone"></input>
                </p>

                <p className="full">
                  <label>Message</label>
                  <textarea name="message" rows="5" id="message"></textarea>
                </p>

                <p className="full">
                  <button type="submit">Submit</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
