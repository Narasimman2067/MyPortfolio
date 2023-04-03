import { Col } from "react-bootstrap";

export const ProjectCard = ({ title,link, description, img }) => {
  return (
    
    <Col size={12} sm={6} md={4}>
      <a href={link} target="_blank" rel="noreferrer">
      <div className="proj-imgbx">
        <img src={img} alt="gif"/>
        
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
      
        </div>
      </div>
      </a>
    </Col>
    
  )
}