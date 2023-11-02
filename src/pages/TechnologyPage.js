import AppNav from "../components/AppNav";
import Container from "../components/Container";
import Skill from "../components/skills.svg";
import styles from "./TechnologyPage.module.css";
import mail from "../components/email.svg";
import git from "../components/github.png";
import insta from "../components/insta.png";
import linkedin from "../components/linkedin2.svg";
import cv from "../components/StefanSpasicCV.pdf";

function TechnologyPage() {
  return (
    <div className={styles.color}>
      <AppNav />
      <Container>
        <div className="tech">
          <div className="skills">
            {/* <h3>React</h3>
            <p>
              Proficient in developing scalable and dynamic user interfaces
              using React, a highly regarded JavaScript library. I employ its
              component-based architecture and state management capabilities to
              create interactive web applications.
            </p>
            <h3>JavaScript</h3>
            <p>
              Adept in utilizing JavaScript to enhance web applications with
              advanced functionality and interactivity, resulting in a more
              engaging user experience.
            </p>
            <h3>CSS & Sass</h3>
            <p>
              Skilled in crafting elegant and responsive designs through precise
              CSS and Sass styling. I ensure consistent and visually appealing
              user interfaces across various devices and screen sizes.
            </p>
            <h3>Firebase & NoSQL</h3>
            <p>
              Experienced in harnessing Firebase, an enterprise-grade
              Backend-as-a-Service (BaaS) platform, to build real-time and
              serverless applications. My proficiency extends to the utilization
              of Firebase's NoSQL database for efficient data management, as
              well as integrating authentication, cloud functions, and other
              features.
            </p>
            <h3>Bootstrap</h3>
            <p>
              Proficient in Bootstrap, a front-end framework that expedites web
              development through its library of pre-designed components and
              responsive grid system. I leverage Bootstrap to create
              aesthetically pleasing and mobile-responsive web applications with
              efficiency.
            </p>
            <h3>HTML5</h3>
            <p>
              Mastery of HTML5, the cornerstone of web development, ensures
              proper structuring of web applications for optimal accessibility
              and performance. I adhere to industry best practices to maintain
              clean and semantically meaningful HTML markup.
            </p> */}
            <div className="info-text">
              <h3>Contact Information</h3>
              <p>
                If you're interested in collaborating or connecting with me, I
                welcome the opportunity to explore potential partnerships and
                meaningful interactions. I believe that the power of networking
                is immeasurable, and I'm always open to engaging with
                like-minded individuals, professionals, and enthusiasts in the
                fields of education, communication, or any other relevant areas.
                Please feel free to reach out to me through my social media
                profiles or via email.
              </p>
              <p>
                I look forward to connecting with you and exploring the
                possibilities for collaboration and mutual growth.
              </p>

              <a href={cv} download="Stefan Spasic CV" className="download">
                Download CV
              </a>
            </div>
            <div className="info-links">
              <div className="social">
                <a
                  href="mailto: spalee300@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={mail} alt="mail" />
                </a>
                <a
                  href="https://www.linkedin.com/in/stefan-spasic-765925260/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedin} alt="linkedin" />
                </a>
                <a
                  href="https://github.com/spale300"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={git} alt="github" />
                </a>
                <a
                  href="https://www.instagram.com/spaladin1/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={insta} alt="insta" />
                </a>
              </div>
            </div>
          </div>
          <img src={Skill} alt="skill" />
        </div>
      </Container>
    </div>
  );
}

export default TechnologyPage;
