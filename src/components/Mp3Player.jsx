import { useState } from "react";
import PropTypes from "prop-types";
import { musics } from "../../data/items";
import { useReducer } from "react";
import Mp3PlayerTimer from "./Mp3PlayerTimer";
import Mp3PlayerMusicTimingSlider from "./Mp3PlayerMusicTimingSlider";
import Mp3PlayerVolumeController from "./Mp3PlayerVolumeController";
import Mp3PlayerControlButtons from "./Mp3PlayerControlButtons";
import Mp3PlayerMusicCover from "./Mp3PlayerMusicCover";
import chevron_down_icon from "../assets/icons/icons8-chevron-down-24.png";
import loopOnIcon from "../assets/icons/loop on.png";
import loopOffIcon from "../assets/icons/loop off.webp"
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
  isLoop: PropTypes.bool,
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
  isLoop
}) {
  
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
  const [isShowMp3Player,setIsShowMp3Player]=useState(true)
  return (
    <div className={`relative ${isEmptyCurrentMusicData? "hidden" : "block"} mp3-show-anime`}>
      <button className="bg-black text-red-500 absolute bottom-0 right-0 z-50 rounded-ss-full inline-flex justify-center items-center" onClick={()=>{setIsShowMp3Player(!isShowMp3Player)}}><img className={`${!isShowMp3Player?"rotate-180":""} p-2`} src={chevron_down_icon}></img></button>
      <audio
        className="audio w-full h-full bottom-0 z-50 bg-slate-100"
        // src={musics[musicIndex].path}
        src={musics[musicIndex].path}
        ref={audioRef}
        preload="metadata"
        muted={isMute}
        loop={isLoop}
      ></audio>
      {isShowMp3Player&&<>
        <Mp3PlayerMusicTimingSlider
        handleMusicCurrenttimeChanges={handleMusicCurrenttimeChanges}
        seekPosition={seekPosition}
      />
      <div className="h-full grid grid-cols-1 md:grid-cols-3 w-full bg-slate-200 border-t-2">
        <Mp3PlayerMusicCover
          currentMusicData={currentMusicData}
          musicIsPlay={musicIsPlay}
          musicIndex={musicIndex}
        />
        <div className="flex items-center justify-center h-full">
          <Mp3PlayerControlButtons
            dispatch={dispatch}
            playMusic={playMusic}
            togglePlayPause={togglePlayPause}
            musicIsPlay={musicIsPlay}
          />
        </div>
        <div className="flex justify-between md:justify-end items-center w-full h-full p-5 ">
          <Mp3PlayerTimer
            currentMinutes={currentMinutes}
            currentSeconds={currentSeconds}
            minuteDuration={minuteDuration}
            secondDuration={secondDuration}
            musicIsPlay={musicIsPlay}
            dispatchTimer={dispatchTimer}
            audioRef={audioRef}
            seekPosition={seekPosition}
          />
          <Mp3PlayerVolumeController
            handleVolumeChange={handleVolumeChange}
            dispatch={dispatch}
            isMute={isMute}
            />
        </div>
            <button onClick={()=>{
              dispatch({type:"loop_toggle"})

            }} className="absolute right-3 top-1 flex">
              <img className="w-7" src={isLoop?loopOnIcon:loopOffIcon}></img>
              </button>
      </div>
      </>}

    </div>
  );
}
