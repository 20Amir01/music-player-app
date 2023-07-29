import PropTypes from "prop-types";
import nextSvg from "../assets/icons/next.svg";
import playSvg from "../assets/icons/play.svg";
import prevSvg from "../assets/icons/prev.svg";
import stopSvg from "../assets/icons/stop.svg";

Mp3PlayerControlButtons.propTypes = {
  dispatch: PropTypes.func,
  playMusic: PropTypes.func,
  togglePlayPause: PropTypes.func,
  musicIsPlay: PropTypes.bool,
};
export default function Mp3PlayerControlButtons({
  dispatch,
  playMusic,
  togglePlayPause,
  musicIsPlay,
}) {
  return (
    <div className="flex justify-center w-full h-full">
      <button
        onClick={() => {
          dispatch({ type: "prevSong" });
          playMusic();
        }}
        className="m-2 text-white"
      >
        <img className="w-5 h-5" src={prevSvg}></img>
      </button>
      <button
        className="m-2 text-white"
        onClick={() => {
          togglePlayPause();
        }}
      >
        {musicIsPlay ? (
          <img className="w-5 h-5" src={stopSvg}></img>
        ) : (
          <img className="w-5 h-5" src={playSvg}></img>
        )}
      </button>
      <button
        onClick={() => {
          dispatch({ type: "nextSong" });
          playMusic();
        }}
        className="m-2 text-white"
      >
        <img className="w-5 h-5" src={nextSvg}></img>
      </button>
    </div>
  );
}
