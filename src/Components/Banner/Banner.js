import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../Images/header-img.svg";
import "../Banner/Banner.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(500 - Math.random() * 300);
  const [index, setIndex] = useState(1);
  const toRotate = ["Full Stack Web Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text,index]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 1);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1>
              {`Hi! I'm Narasimman`}
              <h2
                className="txt-rotate"
                dataPeriod="1000"
                data-rotate='["Full Stack Web Developer"]'
              >
                <span className="wrap">{text}</span>
              </h2>
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
