import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "../Projects/Projects.css";

import projImg3 from "../Images/project-img3.png";
import colorSharp2 from "../Images/color-sharp2.png";
import { ProjectCard } from "./../ProjectCards/ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "Gmail Clone App",

      description: "Design & Developed by Narasimman",
      img:
        "https://cdn.vox-cdn.com/thumbor/ZhpUtEN49QhrTeiNWKZGIx-ji20=/63x0:737x449/1310x873/cdn.vox-cdn.com/uploads/chorus_image/image/67587449/newgmaillogo.0.gif",
      link: "https://gmail-clone-app2023.netlify.app/",
    },
    {
      title: "Youtube Clone App",
      description: "using with javascript basic functions on fetch api from google cloud api data ",
      img:
        "https://cdn.vox-cdn.com/thumbor/CQXisvpqlzIPjk4ETDokVBaQuqg=/0x0:1680x1050/1575x1050/filters:focal(840x525:841x526):no_upscale()/cdn0.vox-cdn.com/uploads/chorus_asset/file/9130449/YTLogo_old_new_animation.gif",
      link: "https://snazzy-froyo-58c8fd.netlify.app/",
    },
  ];

  return (
    <section className="project" id="Projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">My Work</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
