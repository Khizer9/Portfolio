import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Khizer Ali </span>
            from <span className="purple"> Karchi, Pakistan.</span>
            <br />I am a Software Engineer with good knowledge of front-end
            techniques, structure and order and also stand for quality. I love
            combining the worlds of logic and creative design to make
            eye-catching, accessible, and user-friendly websites and
            applications.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Fitness
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & Exploring
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Programming is not about being the best, it’s about always trying to be better."{" "}
          </p>
          <footer className="blockquote-footer">Khizer</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
