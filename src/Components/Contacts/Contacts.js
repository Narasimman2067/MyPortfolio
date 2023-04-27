
import React from "react";

import "../Contacts/Contacts.css"

import {IconButton} from "@mui/material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
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
          <a  href="https://github.com/Narasimman2067" target="_blank" rel="noreferrer">

            <IconButton>
              <GitHubIcon />
           
            </IconButton>
          </a>
          <a href="https://www.linkedin.com/in/narasimman-s" target="_blank" rel="noreferrer">
            <IconButton >
              <LinkedInIcon />
            </IconButton>
          </a>
          <a href="https://api.whatsapp.com/send/?phone=918637408560 " target="_blank" rel="noreferrer">
            <IconButton >
              <WhatsAppIcon />
            </IconButton>
          </a>
         
        </div>
      </div>
    </section>
  );
};

export default Contact;
