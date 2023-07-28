import { Link } from "react-router-dom";
import musicLogo from "../assets/icons/note-music-colorful-rainbow.jpg";
import PropTypes from "prop-types";

Logo.propTypes={
  className:PropTypes.string
}
export default function Logo({className}) {
  return (
    <Link to="/">
      <div className="flex justify-center items-center gap-2">
        <img className="rounded-full w-10" src={musicLogo}></img>
        <span className={`font-bold ${className}`}>Music App</span>
      </div>
    </Link>
  );
}
