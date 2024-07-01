import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWorkHistory } from "react-icons/md";
import { MdSchool } from "react-icons/md";

import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>




            <p className="home-about-body">
            👋 Welcome to my profile! I'm a frontend developer with over 4 years of experience, dedicated to crafting seamless user experiences. My expertise lies in utilizing a stack that includes
            
             <i>
                <b className="purple"> Javascript, Vue.js, React.js, Tailwind CSS, Restful API, and JEST  </b>
              </i>
              <br />
              <br />💼 Currently, I am actively looking for a Front-end developer position where I can leverage my expertise and craft scalable software solutions.
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  E-Commerce and Finance.
                </b>
              </i>
              <br />
              <br />
              📫 Interested in discussing frontend development opportunities or collaborating on exciting projects? Feel free to connect with me or drop me a message. I'm always eager to explore new opportunities and contribute to innovative projects!
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Vue.js</b>
              </i>
              <br />
              <br />
              Below is the timeline of my journey...
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
        <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#8742a3', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #8742a3' }}
                date="July 2023 - June 2024"
                iconStyle={{ background: '#8742a3', color: '#fff' }}
                icon={<MdSchool />}
              >
                <h3 className="vertical-timeline-element-title">Professional Developement And Sabbatical</h3>
                <p>
                  Advanced Javascript & Typescript at Codecademy, German language B1, Java at Spiced Academy.
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#8742a3', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #8742a3' }}
                date="February 2022 - June 2023"
                iconStyle={{ background: '#8742a3', color: '#fff' }}
                icon={<MdWorkHistory />}
              >
                <h3 className="vertical-timeline-element-title">Software Developer(Frontend)</h3>
                <h4 className="vertical-timeline-element-subtitle">The Farm GmbH, Berlin, Germany</h4>
                <p>
                  Typescript, React.js, Vue3, Nuxt.js, GraphQL, Unit testing.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#8742a3', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #8742a3' }}
                date="August 2019 - January 2022"
                iconStyle={{ background: '#8742a3', color: '#fff' }}
                icon={<MdWorkHistory />}
              >
                <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">Relaxdays E-Commerce, Halle, Germany</h4>
                <p>
                  Javascript Typescript,Vue, Nuxt.js, React.js, Swagger UI, Unit testing.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#8742a3', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #8742a3' }}
                date="August 2018 - April 2019"
                iconStyle={{ background: '#8742a3', color: '#fff' }}
                icon={<MdWorkHistory />}
              >
                <h3 className="vertical-timeline-element-title">Frontend Developer Master thesis</h3>
                <h4 className="vertical-timeline-element-subtitle">Legal Horizon, Magdeburg, Germany</h4>
                <p>
                  Javascript, Angular.js, Elastic search, Material UI.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#8742a3', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #8742a3' }}
                date="January 2018 - July 2018"
                iconStyle={{ background: '#8742a3', color: '#fff' }}
                icon={<MdWorkHistory />}
              >
                <h3 className="vertical-timeline-element-title">Mobile Application Developer Internship</h3>
                <h4 className="vertical-timeline-element-subtitle">SignSpin UG, Magdeburg, Germany</h4>
                <p>
                  Javascript, Angular.js, Ionic, Android Studio, Xcode.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#8742a3', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #8742a3' }}
                date="March 2015 - April 2019"
                iconStyle={{ background: '#8742a3', color: '#fff' }}
                icon={<MdSchool />}
              >
                <h3 className="vertical-timeline-element-title">Otto von Guericke University</h3>
                <h4 className="vertical-timeline-element-subtitle">M.Sc Digital Engineering, Magdeburg, Germany</h4>
                <p>
                  Javascript, Angular.js, Ionic, Android Studio, Xcode.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sriteja-somepalli-405637a6/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/itsmesriteja"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
