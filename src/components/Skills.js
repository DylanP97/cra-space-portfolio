import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { skills } from "../data/skills";
import SkillCard from "./SkillCard";

export const Skills = () => {


  return (
    <section className="skill" id="skills">
      <Container  style={{marginTop : "10%", marginBottom : "20%"}}>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Techs I Use Daily</h2>
              <p>Here are the skills I'm more proficient in and that I'm use to work with most of my time.</p>
              <div className="skill-cards">
                {skills.map((skill) => {
                  return <SkillCard key={`${skill.name}`} {...skill} />;
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
