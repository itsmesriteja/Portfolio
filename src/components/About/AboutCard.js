import React from "react";
import Card from "react-bootstrap/Card";
import { TbPointFilled } from "react-icons/tb";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am living in Germany since 2014 and I am currently based in Berlin. I hold a <span className="purple">permanent residence</span> visa status.
            <br />
            <br />
            I have completed my <span className="purple">M.Sc in Digital Engineering</span> at Otto Von Guericke University, Magdeburg.
            <br />
            <br />
            I am actively looking for a <span className="purple">new software development challenege</span> in Berlin(On-site) or Germany(Remote).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <TbPointFilled /> Fitness & Sports Enthisiast
            </li>
            <li className="about-activity">
              <TbPointFilled /> Writing Finance articles
            </li>
            <li className="about-activity">
              <TbPointFilled /> Cricket
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sriteja Somepalli</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
