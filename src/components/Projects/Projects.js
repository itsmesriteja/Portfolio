import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import { IoMdArrowDroprightCircle } from 'react-icons/io';
import RelaxdaysPdf from '../../Assets/../Assets/Reference_Letter_Relaxdays.pdf';
import SignspinPdf from '../../Assets/../Assets/Reference_Letter_Signspin.pdf';
import LegalHorizonPdf from '../../Assets/../Assets/Search_UI_presentation_MasterThesis.pdf';
import Certifications from '../../Assets/../Assets/Sriteja_Certifications.pdf';


function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					<strong className="purple"> Work experience </strong>
				</h1>
				<p style={{ color: 'white' }}>
					Here are a few projects I've worked on across different companies.
				</p>
				<Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
					<Col md={6} className="project-card">
						<ProjectCard
							isBlog={false}
							isPublic={false}
							title={
								<span className="purple">
									The Farm GmbH - Frontend Developer
								</span>
							}
							description={
								<ul>
									<li className="about-activity">
										<IoMdArrowDroprightCircle /> Coded the corporate site of Farm GmbH using React.js, Typescript
										and Tailwind CSS.
									</li>
									<li className="about-activity">
										<IoMdArrowDroprightCircle /> Developed and styled 6 radio
										streams used by radio listeners across Germany using Nuxt.js
										and Vue3.
									</li>
									<li className="about-activity">
										<IoMdArrowDroprightCircle /> Orchestrating as one of the lead
										front-end developers focusing on migration from Vue2 to Vue3
										and unit testing(JEST) alongside mentoring Interns.
									</li>
								</ul>
							}
						/>
					</Col>

					<Col md={6} className="project-card">
						<ProjectCard
							isBlog={false}
							isPublic={false}
							title={
								<span className="purple">
									Relaxdays E-Commerce - Frontend Developer
								</span>
							}
							file={RelaxdaysPdf}
							description={
								<ul>
									<li className="about-activity">
										<IoMdArrowDroprightCircle /> Developed a product backlog
										micro frontend that provides article information across 7
										European countries using Javascript and React.js.
									</li>
									<li className="about-activity">
										<IoMdArrowDroprightCircle /> Coded an internal permission
										app with Vue.js for managing the permissions of all 150 employees using
										JWT authentication and OAuth2.0 authorization.
									</li>
									<li className="about-activity">
										<IoMdArrowDroprightCircle />
										Controlled all advanced interactions of CSS and Javascript
										without compromising on performance.
									</li>
								</ul>
							}
						/>
					</Col>

					<Col md={6} className="project-card">
						<ProjectCard
							isBlog={false}
							isPublic={false}
							title={
								<span className="purple">
									SignSpin UG - Frontend Developer Internship
								</span>
							}
							file={SignspinPdf}
							description={
								<ul>
									<li className="about-activity">
										<IoMdArrowDroprightCircle /> Designed and developed a
										cross-platform mobile application to track employee work
										schedules using Angular and Firebase.
									</li>
									<li className="about-activity">
										<IoMdArrowDroprightCircle /> For better evaluation of the
										application, a 3-day feature trial run was carried out
										across three different cities with 50 people using the
										application simultaneously.
									</li>
									<li className="about-activity">
										<IoMdArrowDroprightCircle /> Different technologies like
										Ionic, Cordova, and Git were leveraged during development.
									</li>
								</ul>
							}
						/>
					</Col>

					<Col md={6} className="project-card">
						<ProjectCard
							isBlog={false}
							isPublic={false}
							title={
								<span className="purple">Vue3-Vite-Typescript-Search UI</span>
							}
							description={
								<ul>
									<li className="about-activity">
										<IoMdArrowDroprightCircle /> Vue 3 and TypeScript
										Integration: The project is built upon Vue 3 and TypeScript,
										utilizing the setup function provided by Vue 3.
									</li>
									<li className="about-activity">
										<IoMdArrowDroprightCircle /> Modular Architecture: A modular
										architecture approach has been followed throughout the
										project.
									</li>
									<li className="about-activity">
										<IoMdArrowDroprightCircle /> Styling and Aesthetic Appeal:  
										Tailwind CSS was employed for styling.
									</li>
								</ul>
							}
							demoLink="https://vue3-vite-search-ui-teja.vercel.app/"
						/>
					</Col>
					<Col md={6} className="project-card">
						<ProjectCard
							isBlog={false}
							isPublic={false}
							title={
								<span className="purple">
									Codecademy Certifications
								</span>
							}
							certification={Certifications}
							description={
								<ul>
									<li className="about-activity">
										<IoMdArrowDroprightCircle /> Javascript Certification
									</li>
									<li className="about-activity">
										<IoMdArrowDroprightCircle /> Introduction to cloud computing certification
									</li>
								</ul>
							}
						/>
					</Col>
					<Col md={6} className="project-card">
						<ProjectCard
							isBlog={false}
							isPublic={false}
							title={
								<span className="purple">
									Legal Horizon- Master Thesis Internship
								</span>
							}
							description={
								<ul>
									<li className="about-activity">
										<IoMdArrowDroprightCircle /> Developed a hierarchical
										faceted search UI for nested legal documents.
									</li>
									<li className="about-activity">
										<IoMdArrowDroprightCircle /> Accomplished extensive research
										on 10 different state-of-the-art search user interfaces and
										examined the speed, scalability, and user interaction.
									</li>
									<li className="about-activity">
										<IoMdArrowDroprightCircle /> Designed and coded a search
										Interface that provides all the European laws using
										AngularJS and CSS.
									</li>
								</ul>
							}
              demoLink={LegalHorizonPdf}
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
