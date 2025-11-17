import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import eskimotv from "../../Assets/Projects/eskimotv.png";
import chatify from "../../Assets/Projects/chatify.png";
import bussines from "../../Assets/Projects/bussines.png";
import hospital from "../../Assets/Projects/hospital.png";


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
        <Row 
          className="g-4" 
          style={{ 
            justifyContent: "center", 
            paddingBottom: "10px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "stretch"
          }}
        >
          <Col md={4} sm={12} xs={12} className="project-card" style={{ display: "flex" }}>
            <ProjectCard
              imgPath={eskimotv}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/AhmedFaisal1/es-movie"
              demoLink="https://eskimotv.vercel.app/"
            />
          </Col>

          <Col md={4} sm={12} xs={12} className="project-card" style={{ display: "flex" }}>
            <ProjectCard
              imgPath={bussines}
              isBlog={false}
              title="EskimoBank"
              description="A modern banking and financial services website built with React.js and modern web technologies. Features a responsive design with user-friendly interface for banking operations, account management, and financial services. Includes secure authentication, transaction history, and intuitive navigation for seamless user experience."
              ghLink="https://github.com/AhmedFaisal1/Business-Website"
              demoLink="https://business-website-teal.vercel.app/"
            />
          </Col>

          <Col md={4} sm={12} xs={12} className="project-card" style={{ display: "flex" }}>
            <ProjectCard
              imgPath={hospital}
              isBlog={false}
              title="eskimohospital"
              description="A comprehensive hospital management system built with React.js and modern web technologies. Features patient management, appointment scheduling, doctor profiles, and medical services information. Includes responsive design for both desktop and mobile devices, making healthcare services more accessible and manageable."
              ghLink="https://github.com/AhmedFaisal1/HospitalNG"
              demoLink="https://eskimohospital.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
