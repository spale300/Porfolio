import { Link } from "react-router-dom";
import Slogo from "./logo.png";
import Header from "./Header";

function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img src={Slogo} alt="#" />
      </Link>
      {/* <Header /> */}
    </div>
  );
}

export default Logo;
