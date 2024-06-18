import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";

function ProjectCards(props) {
  const handleButtonClick = () => window.open(props.demoLink, '_blank');
  const handleReferenceButtonClick = () => window.open(props.file, '_blank');

  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}

        {props.isPublic && (<Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>)}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            onClick={handleButtonClick}
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
        {"\n"}
        {"\n"}
        {props.file && (<Button
            variant="primary"
            onClick={handleReferenceButtonClick}
            style={{ marginLeft: "10px" }}
          >
            <AiOutlineDownload /> &nbsp;
            {"Reference"}
          </Button>)}

      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
