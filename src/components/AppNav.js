import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function AppNav() {
  return (
    <nav className="nav">
      <Logo />
      <ul>
        {/* <li>
          <NavLink to="/home"></NavLink>
        </li> */}
        <li>
          <NavLink to="/contact" name="contact"></NavLink>
        </li>
        <li>
          <NavLink to="/project" name="project"></NavLink>
        </li>
        <li>
          <NavLink to="/technology" name="stefan"></NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
