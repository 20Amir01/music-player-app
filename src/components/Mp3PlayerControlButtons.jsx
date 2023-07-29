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
    <div className="flex gap-5 justify-center w-full h-full">
      <button
        onClick={() => {
          dispatch({ type: "prevSong" });
          playMusic();
        }}
        className="text-white w-8 md:w-7"
      >
        <img className="w-full h-full" src={prevSvg}></img>
      </button>
      <button
        className="text-white w-8 md:w-7"
        onClick={() => {
          togglePlayPause();
        }}
      >
        {musicIsPlay ? (
          <img className="w-full h-full" src={stopSvg}></img>
        ) : (
          <img className="w-full h-full" src={playSvg}></img>
        )}
      </button>
      <button
        onClick={() => {
          dispatch({ type: "nextSong" });
          playMusic();
        }}
        className="text-white w-8 md:w-7"
      >
        <img className="w-full h-full" src={nextSvg}></img>
      </button>
    </div>
  );
}
