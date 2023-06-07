import React from "react";
import TrackVisibility from "react-on-screen";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { myProjects } from "../data/projects.js";

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Col style={{ marginTop: "10%", marginBottom: "10%" }}>
          <Row>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }>
                  <h2>Projects</h2>
                  <p>Here are 3 projects I have worked on.</p>
                </div>
              )}
            </TrackVisibility>
          </Row>
          <Row>
            {myProjects.map((project, index) => {
              return <ProjectCard key={index} {...project} />;
            })}
          </Row>
        </Col>
      </Container>
    </section>
  );
};
