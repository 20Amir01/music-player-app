import PropTypes from "prop-types";
import nextSvg from "../assets/icons/next.svg";
import playSvg from "../assets/icons/play.svg";
import prevSvg from "../assets/icons/prev.svg";
import stopSvg from "../assets/icons/stop.svg";
import speaker_icon from "../assets/icons/Speaker_Icon.png";
import mute_icon from "../assets/icons/Mute_Icon.png";
import cover from "../assets/headset.jpg";
import { musics } from "../../data/items";
import { useEffect } from "react";
import { useReducer } from "react";
import Slider from "@mui/material/Slider";
const initialState = {
  seekPosition: 0,
  minuteDuration: 0,
  secondDuration: 0,
  currentMinutes: 0,
  currentSeconds: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SEEK_POSITION":
      return {
        ...state,
        seekPosition: action.payload,
      };
    case "MIN_DUR":
      return {
        ...state,
        minuteDuration: action.payload,
      };
    case "SEC_DUR":
      return {
        ...state,
        secondDuration: action.payload === 60 ? 0 : action.payload,
      };
    case "MIN_CURR":
      return {
        ...state,
        currentMinutes: action.payload,
      };
    case "SEC_CURR":
      return {
        ...state,
        currentSeconds: action.payload === 60 ? 0 : action.payload,
      };
  }
};
Mp3Player.propTypes = {
  musicIsPlay: PropTypes.bool,
  currentMusicData: PropTypes.object,
  dispatch: PropTypes.func,
  handlePlayButton: PropTypes.func,
  audioRef: PropTypes.object,
  togglePlayPause: PropTypes.func,
  musicIndex: PropTypes.number,
  playMusic: PropTypes.func,
  isMute: PropTypes.bool,
};
export default function Mp3Player({
  musicIsPlay,
  currentMusicData,
  togglePlayPause,
  audioRef,
  dispatch,
  musicIndex,
  playMusic,
  isMute,
}) {
  // const [seekPostion,setSeekPosition]=useState(0)
  const isEmptyCurrentMusicData = Object.keys(currentMusicData).length === 0;
  const [
    {
      seekPosition,
      minuteDuration,
      secondDuration,
      currentMinutes,
      currentSeconds,
    },
    dispatchTimer,
  ] = useReducer(reducer, initialState);
  const handleVolumeChange = (e) => {
    audioRef.current.volume = e.target.value / 100;
  };
  const handleMusicCurrenttimeChanges = (e) => {
    // Calculate the seek position by the
    // percentage of the seek slider
    // and get the relative duration to the track
    const seekto = audioRef.current.duration * (e.target.value / 100);
    // Set the current track position to the calculated seek position
    audioRef.current.currentTime = seekto;
  };
  useEffect(() => {
    // if(musicIsPlay===false) return
    const timer = () => {
      // Check if the current track duration is a legible number
      if (!isNaN(audioRef.current.duration) && musicIsPlay) {
        dispatchTimer({
          type: "SEEK_POSITION",
          payload:
            audioRef.current.currentTime * (100 / audioRef.current.duration),
        });
        audioRef.current.value = seekPosition;
        // Calculate the time left and the total duration
        dispatchTimer({
          type: "MIN_CURR",
          payload: Math.floor(audioRef.current.currentTime / 60),
        });
        dispatchTimer({
          type: "SEC_CURR",
          payload: Math.floor(
            audioRef.current.currentTime - currentMinutes * 60
          ) 
        });

        dispatchTimer({
          type: "MIN_DUR",
          payload: Math.floor(audioRef.current.duration / 60),
        });
        dispatchTimer({
          type: "SEC_DUR",
          payload: Math.floor(audioRef.current.duration - minuteDuration * 60),
        });
      }
    };
    let timerStart;
    musicIsPlay ? (timerStart = setInterval(timer, 1000)) : clearInterval(timerStart);
    return () => {
      clearInterval(timerStart);
    };
  }, [
    audioRef,
    minuteDuration,
    secondDuration,
    currentSeconds,
    currentMinutes,
    dispatch,
    seekPosition,
    musicIsPlay,
  ]);

  return (
    <div className={`relative ${isEmptyCurrentMusicData ? "hidden" : "block"}`}>
      <div className="w-full h-auto absolute top-[-15px] z-20">
        <Slider
            onChange={handleMusicCurrenttimeChanges}
            value={seekPosition}
            min={1}
            max={100}
            defaultValue={0}
            sx={{ color:"black" }}
          ></Slider>
      </div>
      <div className="h-full grid grid-cols-1 md:grid-cols-3 w-full bg-slate-200 border-t-2">
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
        <div className="flex items-center justify-center h-full">
          <audio
            className="audio w-full h-full bottom-0 z-50 bg-slate-100"
            // src={musics[musicIndex].path}
            src={musics[musicIndex].path}
            ref={audioRef}
            preload="metadata"
            muted={isMute}
          ></audio>
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
        </div>

        <div className="flex justify-between md:justify-end items-center w-full h-full p-5 ">
          <div className="font-bold text-slate-600 p-1">
            <div className="flex p-1">
              <p>{`${
                currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes
              }:${
                currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds
              }`}</p>
              <p>{`/${
                minuteDuration < 10 ? `0${minuteDuration}` : minuteDuration
              }:${
                secondDuration < 10 ? `0${secondDuration}` : secondDuration
              }`}</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <button
              onClick={() => {
                dispatch({ type: "mute_toggle" });
              }}
            >
              <img
                className="w-5"
                src={isMute ? mute_icon : speaker_icon}
              ></img>
            </button>
            <div className="w-14 h-full flex items-center">
              <Slider
                onChange={handleVolumeChange}
                size="small"
                defaultValue={50}
                aria-label="Small"
                valueLabelDisplay="auto"
                min={0}
                max={100}
                sx={{ color:"black" }}
              ></Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
