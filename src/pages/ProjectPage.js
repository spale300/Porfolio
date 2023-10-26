import AppNav from "../components/AppNav";
import Container from "../components/Container";
import styles from "./ProjectPage.module.css";
import chat from "../components/chat.png";
import movie from "../components/movie1.svg";
import movietwo from "../components/movie2.svg";
import quiz from "../components/quiz.png";
import web from "../components/web.svg";

function ProjectPage() {
  return (
    <div className={styles.color}>
      <AppNav />
      <Container>
        <div className="projects">
          <div className="project">
            <img src={chat} alt="slika" />
            <h2>Real-Time Chat Application</h2>

            <p>
              I skillfully employed React's component-based architecture and
              state management to create a responsive and interactive user
              interface for seamless communication. Firestore: I harnessed
              Firestore, a NoSQL database by Firebase, to provide real-time data
              synchronization, ensuring that messages are delivered
              instantaneously to users. User Authentication: I implemented
              secure user authentication methods to safeguard user data and
              privacy, enhancing the app's reliability.
            </p>
            <a>Check it Out</a>
          </div>
          <div className="project">
            <img src={movie} alt="slika" />
            <h2>Movie App Built with React.js and API Integration v1</h2>
            <p>
              I am excited to present a feature-rich movie application developed
              with React.js, showcasing the power of web technologies to deliver
              an immersive and engaging cinematic experience. This project
              beautifully combines user-centric design with real-time movie data
              from a reliable API source.
            </p>
            <a>Check it Out</a>
          </div>
          <div className="project">
            <img src={movietwo} alt="slika" />
            <h2>Movie App Built with React.js and API Integration v2</h2>
            <p>
              Introducing "Movie Search," an immersive movie application
              meticulously crafted using React.js and seamlessly integrated with
              a robust API. This project is a testament to the synergy of
              technology and entertainment, offering users a rich and
              interactive cinematic experience.
            </p>
            <a>Check it Out</a>
          </div>
          <div className="project">
            <img src={quiz} alt="slika" />
            <h2>
              React.js Quiz Application with useReducer and API Integration
            </h2>
            <p>
              I'm thrilled to introduce a dynamic and engaging quiz application
              developed with React.js, powered by the useReducer state
              management approach and seamlessly integrated with a reliable API.
              This project demonstrates the fusion of state-of-the-art
              technology and the joy of learning through interactive quizzes.
            </p>
            <a>Check it Out</a>
          </div>
          <div className="project">
            <img src={web} alt="slika" />
            <h2>Company Information Website - HTML, JavaScript, CSS</h2>
            <p>
              My journey in web development began with the creation of a company
              information website, a project where I harnessed the fundamental
              trio of web technologies: HTML, JavaScript, and CSS. This endeavor
              represents my initial steps into the world of web development and
              showcases my dedication to crafting a compelling online presence
              for businesses.
            </p>
            <a>Check it Out</a>
          </div>
          {/* <div className="project">
            <img src={chat} alt="slika" />
            <h2>Project 1</h2>
            <p>lorem</p>
          </div> */}
        </div>
        <p className="github">
          In addition to the projects highlighted here, I invite you to delve
          deeper into my portfolio by visiting my{" "}
          <a href="https://github.com/spale300">GitHub</a> profile. There,
          you'll find an array of diverse projects and code repositories that
          further showcase my skills, dedication, and passion for web
          development.
        </p>
      </Container>
    </div>
  );
}

export default ProjectPage;
