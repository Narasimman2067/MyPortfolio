import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import GitHubIcon from "@mui/icons-material/GitHub";

import "../Navbar/NavBar.css";
import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scroll, setscroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setscroll(true);
      } else {
        setscroll(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scroll ? "scroll" : ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#Projects"
              className={
                activeLink === "Projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("Projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#Contact"
              className={
                activeLink === "Contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("Contact")}
            >
             Contact
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="navbar2-icons">
              <a href="https://github.com/Narasimman2067" target="_blank">
                <IconButton>
                  <GitHubIcon />
                </IconButton>
              </a>
              <a href="https://www.linkedin.com/in/narasimman-s" target="blank">
                <IconButton>
                  <LinkedInIcon />
                </IconButton>
              </a>
            </div>

            <a href="Narasimman.pdf" target="_blank">
              <button className="vvd">
                <span>Download CV</span>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
