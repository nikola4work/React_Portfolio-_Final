import React from "react";
import "./Styles/About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from "react-bootstrap";

function About() {
  return (
    <Container fluid className="about_page">
      <div className="title_container">
        {" "}
        <h1 className="about_name">Nikola Jovanovic</h1>
        <p className="about_subtitle">Full-stack Web Developer</p>
      </div>

      <Container className="about_me_container">
        <Row>
          <Col>
            <h1 className="about_title">About Me</h1>
            <hr />
            <p className="about_me_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus doloremque illum praesentium veritatis tempora et
              enim, itaque ipsam at sequi nihil sapiente iure a temporibus
              dolores. Deleniti tempora vitae perspiciatis possimus commodi quia
              harum aspernatur ratione? Exercitationem dicta libero odio unde
              facilis impedit autem laudantium vel odit aspernatur nesciunt
              sapiente, ratione perspiciatis temporibus cum dolor velit iste,
              quas soluta iusto mollitia, minus tempora maxime assumenda. Eum
              excepturi voluptatem recusandae, doloribus commodi harum nam
              dolorem. Reiciendis eius, maxime quae nulla consequuntur commodi
              nesciunt blanditiis? Repellat aliquam harum iure ipsam corporis
              dignissimos voluptate eligendi accusantium rem. Blanditiis a
              officia possimus adipisci libero?
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
