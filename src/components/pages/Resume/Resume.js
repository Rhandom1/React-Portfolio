import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import resume from "./SMCresume.docx";
import "./Resume.css";
import { FaHtml5 } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { CgYinyang } from 'react-icons/cg';

function Resume() {

  return (
    <div className="resume-wrapper">
      <Container fluid className="resume-container">
        
        <div className="resume-div">
          <p className="resume-items">
            Experienced and empathetic leader with over 30 years of experience, looking to finally make the leap into web development.
            A passionate teacher and excellent communicator exhibited through managerial roles and as a business owner. Always ready to lend advice or just an ear
            and leverage a love of teaching with his acquired technical skills to create educational programs for all ages and learning styles.
          </p>
          <h3 className="resume-skills">Front End Technologies<FaHtml5 size= '20px' /></h3>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Materialize</li>
          <li>SASS</li>

          <h3 className="resume-skills">Back End Technologies<DiMongodb size='20px' /></h3>
          <li>JavaScript</li>
          <li>Node</li>
          <li>Express</li>
          <li>SQL</li>
          <li>Mongo</li>
          <li>Web API's</li>
          <li>GraphQL</li>
          

          <h3 className="resume-skills">Transferable Skills<CgYinyang size='20px' /></h3>
          <li>Agile Problem Solver</li>
          <li>Excellent Communication</li>
          <li>Emapthetic Leadership</li>
          <li>Conflict Resolution</li>
          <li>Adaptable To Change</li>
          <li>Dedicated Teacher and Student</li>
          <li>Creative Thinker</li>
          <li>Time Management and Organization</li>
          
        </div>

        <Row>
          <Button className="resume-btn" href={resume} target="_blank">
            Download My Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;