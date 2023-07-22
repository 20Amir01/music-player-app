import PropTypes from "prop-types";
import { musics } from "../data/items";
import styles from "./App.module.css";
import playIcon from "./assets/icons/icons8-play-button-circled-50-white.png";
import { useEffect } from "react";
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
    <div className="px-10 py-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 auto-rows-min gap-5 w-full h-min-screen: overflow-scroll">
      {musics.map((music, index) => {
        return (
          <div key={music.id}>
            <div
              onClick={() => {
                dispatch({ type: "currentMusicData", payload: music });
                dispatch({ type: "musicIndex", payload: index });
                playMusic();
              }}
              className={`relative group ${styles.musicCover} shadow-md rounded-lg bg-cover bg-center cursor-pointer aspect-square flex justify-center items-center`}
            >
              <img
                className="aspect-square rounded-lg"
                src={music.cover}
                alt={music.name}
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
      })}
    </div>
  );
}
