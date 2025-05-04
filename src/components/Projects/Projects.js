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
import resal from "../../Assets/resal_logo.jpg";
import goldPesa from "../../Assets/goldPesa.png";
import bide from "../../Assets/bide.png";
import glowza from "../../Assets/glowza.png";
import amanrasoft from "../../Assets/amanrasoft.png";
import inoventive from "../../Assets/inoventive.png";
import youtubeClone from "../../Assets/youtubeClone.png";
import expenseTracker from "../../Assets/expense-tracker.png";

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
              imgPath={expenseTracker}
              isBlog={false}
              style={{ marginTop: "25px" }}
              title="Expense Tracker"
              description="Made a simple tool to track expenses — clear, fast, and focused only on what you need. What started as a personal need turned into a full weekend project. I built a clean, intuitive expense tracker to help manage spending without distractions or unnecessary features.  Tech Stack: React, Tailwind CSS, Supabase (Auth, DB, Role-Based Access)"
              ghLink="https://github.com/Khizer9/expense-tracker"
              demoLink="https://expense-tracker-neon-sigma-65.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resal}
              isBlog={false}
              style={{ marginTop: "25px" }}
              title="Resal"
              description="I worked on legacy code at Resal, a leading company that helps individuals, businesses, and merchants benefit from digital value through prepaid cards, rewards, and loyalty programs. My work included fixing issues in existing systems, resolving problems with non-functioning campaigns, and enhancing integrations with third-party services like Foodics, among other improvements."
              // ghLink="https://github.com/Khizer9/Todo-with-MangoDB"
              demoLink="https://app.boonus.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meriSehat}
              isBlog={false}
              style={{ marginTop: "25px" }}
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
              style={{ marginTop: "50px" }}
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
              style={{ marginTop: "50px" }}
              title="GoldPesa"
              description="GoldPesa ($GPX) is a unique asset-backed hybrid token whereby one token is backed by one gram of a physical gold, stored in secure vaults. In addition token holders are able to have fractional ownership of physical bars and the upside of the crypto markets which makes GPX a hybrid gold-backed token with upside and not a stable coin."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://www.goldpesa.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={glowza}
              isBlog={false}
              style={{ marginTop: "50px" }}
              title="Glowza Digital"
              description="Glowza Digital is the animated video company you require to market your brand. Our video animation services provide strong market pillars to a brand newly launched. Moreover, with the brands serving for decades, we have served them with top-notch quality animated videos to match their business objectives and goals. Glowza Digital has created animated videos that are direct leads to potential customers."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://glowzadigital.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amanrasoft}
              isBlog={false}
              style={{ marginTop: "50px" }}
              title="Amanrasoft"
              description="Amanrasoft is 21st century’s information technology service provider company having the aim for delivering Information Technology and business solutions to the customers across the globe. Amanrasoft is a software company based in Pakistan, specializing in web and mobile application development."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://amanrasoft.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtubeClone}
              isBlog={false}
              style={{ marginTop: "50px" }}
              title="Youtube Cloned"
              description="This project is a YouTube clone built using ReactJS for the front-end and Tailwind CSS for the UI design. It offers a fully responsive design, ensuring a seamless experience across desktops, tablets, and mobile devices. The application aims to replicate the core functionalities of YouTube, providing a familiar and intuitive interface for users."
              ghLink="https://github.com/Khizer9/youtube_clone_react"
              demoLink="https://youtubeecloned.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inoventive}
              isBlog={false}
              style={{ marginTop: "50px" }}
              title="Inoventive Digital"
              description="We help you drive more traffic and users to your websites and expand your brand on the digital landscape by incorporating a people centric approach. We firmly recognize that the technological foundation of a company holds the power to either propel its productivity and ROI or hinder its progress."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://inoventivedigital.netlify.app/"
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
