import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "../Projects/Projects.css";


import colorSharp2 from "../Images/color-sharp2.png";
import { ProjectCard } from "./../ProjectCards/ProjectCard";

export const Projects = () => {
  const projects = [
{
      title: "BookStore Crud App",
      description: "Using Crud Operation made a Bookstore app on Mern Stack development.",
      img:
        "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fa26cc294-2f30-4aae-974e-b0c9f0b48590_672x672.gif",
      link: "https://mern-frontend-bookstore.vercel.app/",
    },
    {
      title: "Gmail Clone App",

      description: "Basic features of Gmail clone app ",
      img:
        "https://cdn.vox-cdn.com/thumbor/ZhpUtEN49QhrTeiNWKZGIx-ji20=/63x0:737x449/1310x873/cdn.vox-cdn.com/uploads/chorus_image/image/67587449/newgmaillogo.0.gif",
      link: "https://gmail-clone-app2023.netlify.app/",
    },
    {
      title: "Youtube Clone App",
      description: "using javascript basic functions on fetch api from google cloud api data ",
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
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
