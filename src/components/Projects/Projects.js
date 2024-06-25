import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import meriSehat from "../../Assets/meriSehat.jpeg";
import goldPesa from "../../Assets/goldPesa.png";
import bide from "../../Assets/bide.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meriSehat}
              isBlog={false}
              style={{marginTop: '25px'}}
              title="Meri Sehat"
              description="Meri Sehat is a product company based in pakistan. Meri Sehat is the Pakistan's first and only Artificial Intelligence powered healthcare platform. Designed a user-friendly interface for the 'Find A Doctor' & 'Wallet' module. Created the architecture for components, integrated APIs, markup, and addressed bug fixes."
              // ghLink="https://github.com/Khizer9/Todo-with-MangoDB"
              demoLink="https://merisehat.pk/"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bide}
              isBlog={false}
              style={{marginTop: '50px'}}
              title="Bide Educator"
              description="Bide Educator is a health management project based on ReactJS. Within this system, the educator plays a management role and monitors both doctors and patients. There are two separate websites: one for doctors and one for patients. In this setup, doctors and patients can schedule appointments with each other. They will first arrange an appointment and then decide whether the consultation will be conducted via audio or video call based on their preference. Please note that this application has not been officially launched yet.
              Login: educator@merisehat.pk
              password: 0000"
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://educator.ndnstaging.merisehat.pk/login"    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={goldPesa}
              isBlog={false}
              style={{marginTop: '50px'}}
              title="GoldPesa"
              description="GoldPesa ($GPX) is a unique asset-backed hybrid token whereby one token is backed by one gram of a physical gold, stored in secure vaults. In addition token holders are able to have fractional ownership of physical bars and the upside of the crypto markets which makes GPX a hybrid gold-backed token with upside and not a stable coin."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://www.goldpesa.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Weather App"
              description="Simple Weather App using ReactJs. JavaScript Weather App that helps to find out the weather of any location. A search field is also included, where you can easily find your country. Multiple APIs have been incorporated and the data is fetched and mapped from weather API."
              ghLink="https://github.com/Khizer9/weather-api"
              demoLink="https://searchweatherapps.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Github Clone"
              description="A user's can easily check Github profile by searching their username. In this application, API integration is used to call data from server."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://githubprofilessearch.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Todo App"
              description="It's helps you keep track for things you want to. A user can delete/edit a task. And click on ✓ after completing a task."
              ghLink="https://github.com/Khizer9/Todo-with-MangoDB"
              demoLink="https://todoappwithsignin.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
