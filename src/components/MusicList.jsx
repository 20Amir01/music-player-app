import PropTypes from "prop-types";
import { musics } from "../../data/items";
import { useEffect} from "react";
import { Music } from "./Music";
MusicList.propTypes = {
  children: PropTypes.node,
  // musics: PropTypes.array
  musicIsPlay: PropTypes.bool,
  setMusicIsPlay: PropTypes.func,
  currentMusicData: PropTypes.object,
  dispatch: PropTypes.func,
  togglePlayPause: PropTypes.func,
  audioRef: PropTypes.object,
  playMusic: PropTypes.func,
};
export default function MusicList({
  musicIsPlay,
  // currentMusicData,
  dispatch,
  audioRef,
  playMusic,
}) {
  useEffect(() => {
    if (musicIsPlay) {
      audioRef.current.play();
      //if music duration has ended go to the next song
      audioRef.current.addEventListener("ended", () => {
        dispatch({ type: "nextSong" });
        playMusic();
      });
    } else {
      audioRef.current.pause();
    }
  }, [musicIsPlay, audioRef, dispatch, playMusic]);

  return (
    <div className="w-full h-full bg-slate-300">
      <div className="px-10 pb-40 pt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 auto-rows-min gap-5 oveflow-x-hidden overflow-y-auto h-screen scroll scroll-reset">
        {musics.map((music, index) => {
          return (
            <Music
            key={music.id}
            index={index}
            music={music}
            dispatch={dispatch}
            playMusic={playMusic}
          ></Music>
          );
        })}
      </div>
    </div>
  );
}
