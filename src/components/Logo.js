import { Link } from "react-router-dom";
import Slogo from "./logo.png";

function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img src={Slogo} alt="#" />
      </Link>
    </div>
  );
}

export default Logo;
