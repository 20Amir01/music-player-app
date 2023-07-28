import PropTypes from "prop-types";
import playIcon from "../assets/icons/icons8-play-button-circled-50-white.png";

Music.propTypes = {
  music: PropTypes.object,
  dispatch: PropTypes.func,
  playMusic: PropTypes.func,
  index: PropTypes.number,
};
export function Music({ music, dispatch, playMusic, index }) {
  return (
    <div>
      <div
        onClick={() => {
          dispatch({ type: "currentMusicData", payload: music });
          dispatch({ type: "musicIndex", payload: index });
          playMusic();
        }}
        className={`relative group rounded-xl cover-bg cursor-pointer flex justify-center items-center w-50 h-50`}
      >
          <img
            className="aspect-square rounded-xl w-50 h-50"
            src={music.cover}
            alt=""
          ></img>

        <button className="w-14 h-14 rounded-full hidden animate-pulse group-hover:inline-block absolute">
          <img src={playIcon}></img>
        </button>
      </div>
      <span className="text-slate-800 font-bold block text-md">
        {music.name}
      </span>
      <span className="text-slate-600 font-bold block text-sm">
        by {music.singer ? music.singer : "unknown"}
      </span>
    </div>
  );
}
