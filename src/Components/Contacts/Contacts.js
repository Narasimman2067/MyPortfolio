
import React from "react";

import "../Contacts/Contacts.css"

import {IconButton} from "@mui/material"

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  return (
    <section className="contact" id="Contact">
      <h1>Contact</h1>
      <div className="contact-container">
        <p>
          Email :<span>narasimmamech2067@gmail.com</span>
        </p>
         <p>Github Username :<span>@Narasimman2067</span></p>
<div className="contact-icons">
          <a  href="https://github.com/Narasimman2067" target="_blank">

            <IconButton>
              <GitHubIcon />
           
            </IconButton>
          </a>
          <a href="https://www.linkedin.com/in/narasimman-s" target="_blank">
            <IconButton >
              <LinkedInIcon />
            </IconButton>
          </a>
         
        </div>
      </div>
    </section>
  );
};

export default Contact;
