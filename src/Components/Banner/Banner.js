import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../Images/header-img.svg";
import "../Banner/Banner.css";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1>
              {`Hi! I'm Narasimman`}
              <h2>Full Stack Web Developer (Fresher)</h2>
            </h1>
            <p>
              To start a new journey in my career as a Full stack MERN
              developer, I am dedicated to being sincere to my work ,hard
              worker, goal-oriented, and a team player,intrested in learning new
              technologies an opportunity to incorporate my skills and put them
              to use .
            </p>
            <div className="my-work">
              <a className="my-work" href="#Projects">
                <button
                  className="my-btn"
                  onClick={() => console.log("connect")}
                >
                  My Work
                </button>
              </a>
            </div>
          </Col>
          <Col xs={12} md={5} xl={5}>
            <div>
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
