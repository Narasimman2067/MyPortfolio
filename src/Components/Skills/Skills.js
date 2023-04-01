import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Skills/Skills.css";
import colorSharp from "../Images/color-sharp.png";
import { LinearProgress } from "@mui/material";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
    
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Can quickly adapt to the new environment ,Positive attitude
                while doing any challenging work , Good in verbal and written
                communication of Tamil and English language
              </p>
              <div className="skillContainer-text">
        
            
        <div className="skillset-items">
          <h5>HTML5</h5>
          <div className="skillset-slider skillset-color1">
            <LinearProgress variant="determinate" value={100}  />
          </div>
          <h5>CSS</h5>
          <div className="skillset-slider skillset-color2">
            <LinearProgress variant="determinate" value={90} />
          </div>
          <h5>JavaScript</h5>
          <div className="skillset-slider skillset-color3">
            <LinearProgress variant="determinate" value={90} />
          </div>
          <h5>React.JS</h5>
          <div className="skillset-slider skillset-color4">
            <LinearProgress variant="determinate" value={80} />
          </div>
          <h5>Node.JS</h5>
          <div className="skillset-slider skillset-color5">
            <LinearProgress variant="determinate" value={80} />
          </div>
          <h5>Express.js</h5>
          <div className="skillset-slider skillset-color6">
            <LinearProgress variant="determinate" value={80} />
          </div>
          <h5>MongoDb</h5>
          <div className="skillset-slider skillset-color7">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
      </div>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img
                    className="html-logo"
                    src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png"
                    alt=""
                  />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img
                    className="App-logo"
                    src="https://mitacademys.com/wp-content/uploads/2022/07/logo-2582747_1920-1536x1536.png"
                    alt=""
                  />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img
                    className="App-logo"
                    src="https://dev.welaika.com/images/javascript-1a855dbd.svg
                  "
                    alt=""
                  />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img
                    className="App-logo"
                    src="logo192.png
                  "
                    alt=""
                  />
                  <h5>React.Js</h5>
                </div>
                <div className="item">
                  <img
                    src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png"
                    alt=""
                  />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img
                    src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png"
                    alt=""
                  />
                  <h5>Express.Js</h5>
                </div>
                <div className="item">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Antu_mongodb.svg/768px-Antu_mongodb.svg.png?20160706123547"
                    alt=""
                  />
                  <h5>Mongodb</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
