import { Outlet } from "react-router-dom";
import AppNav from "../components/AppNav";
import Container from "../components/Container";
import styles from "./ContactPage.module.css";
import ContactNav from "../components/ContactNav";

function ContactPage() {
  return (
    <div className={styles.color}>
      <AppNav />
      <Container>
        <div className="contact">
          <ContactNav />
          <Outlet />
        </div>
      </Container>
    </div>
  );
}

export default ContactPage;
