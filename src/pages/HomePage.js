import AppNav from "../components/AppNav";
import Container from "../components/Container";
import photo from "../components/photo.jpg";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.color}>
      <AppNav />
      <Container>
        <div className="home">
          <div className="main">
            <img src={photo} className="profile" alt="profile" />

            <h1>Hello, I'm Stefan Spasic</h1>
          </div>
          <div className="text">
            <p>
              An enthusiastic junior IT professional eager to embark on a
              promising career in the world of technology. With a passion for
              learning and a strong foundation in IT fundamentals, I am excited
              to contribute my skills and drive to the ever-evolving field of
              information technology. My journey in IT began with a deep
              fascination for computers and technology at a young age. Since
              then, I've dedicated myself to gaining hands-on experience and
              expanding my knowledge. Although I'm at the early stages of my
              career, I am committed to continuous growth and development.
            </p>
            <p>
              As a junior IT enthusiast, I have had the opportunity to work on a
              variety of projects, from troubleshooting technical issues to
              assisting in system upgrades. I thrive in collaborative
              environments, where I can learn from experienced professionals and
              contribute my fresh perspectives and eagerness to learn.
            </p>
            <p>
              I'm excited about the opportunities ahead to further develop my
              skills in areas such as system administration, network management,
              and cybersecurity. My goal is to become a well-rounded IT
              professional who can make a positive impact on organizations
              through innovative solutions and a dedication to excellence.
            </p>
            <p>
              I am excited to connect with mentors, peers, and potential
              collaborators to learn, grow, and contribute to the ever-evolving
              IT landscape.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
