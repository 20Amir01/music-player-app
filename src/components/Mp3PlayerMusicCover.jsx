import PropTypes from "prop-types";
import cover from "../assets/headset.jpg";
import { musics } from "../../data/items";

Mp3PlayerMusicCover.propTypes = {
  currentMusicData: PropTypes.object,
  musicIsPlay: PropTypes.bool,
  musicIndex: PropTypes.number,
};
export function Mp3PlayerMusicCover({
  currentMusicData,
  musicIsPlay,
  musicIndex,
}) {
  return (
    <div className="flex justify-start items-center relative p-1">
      <img
        className={`h-14 w-14 rounded-full ${
          musicIsPlay && "animate-spin-slow"
        }`}
        src={musics[musicIndex].cover ? musics[musicIndex].cover : cover}
      ></img>
      <div className="ml-5">
        <span className="text-slate-700 font-bold block text-md">
          {musics[musicIndex].name}
        </span>
        <span className="text-slate-400 font-bold block text-sm">
          {currentMusicData.singer ? `by ${musics[musicIndex].singer}` : ""}
        </span>
      </div>
    </div>
  );
}
