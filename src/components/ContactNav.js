import { NavLink } from "react-router-dom";

function ContactNav() {
  return (
    <nav className="contact-nav">
      <ul>
        <li className="item">
          <NavLink to="itbootcamp">ItBootcamp</NavLink>
        </li>

        <li className="item">
          <NavLink to="trucking">Fleet Manager</NavLink>
        </li>
        <li className="item">
          <NavLink to="english">English Teacher</NavLink>
        </li>

        <li className="item">
          <NavLink to="info">Mechanical Engineer</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default ContactNav;
