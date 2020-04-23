import React from "react";
import "./Styles/Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Jumbotron } from "react-bootstrap";

function Contact() {
  return (
    <Container id="bcg_contact">
      <div className="wrapper">
        <div className="company-info">
          <h2 className="chat">Let's Chat!</h2>
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
    </Container>
  );
}
export default Contact;
