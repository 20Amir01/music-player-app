import PropTypes from "prop-types";
import { useEffect } from "react";
Mp3PlayerTimer.propTypes = {
  currentMinutes: PropTypes.number,
  currentSeconds: PropTypes.number,
  minuteDuration: PropTypes.number,
  secondDuration: PropTypes.number,
  musicIsPlay:PropTypes.boll,
  dispatchTimer:PropTypes.func,
  audioRef:PropTypes.object,
  seekPosition:PropTypes.number,
};
export default function Mp3PlayerTimer({
  currentMinutes,
  currentSeconds,
  minuteDuration,
  secondDuration,
  musicIsPlay,
  dispatchTimer,
  audioRef,
  seekPosition,
}) {
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
          ),
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
    musicIsPlay
      ? (timerStart = setInterval(timer, 1000))
      : clearInterval(timerStart);
    return () => {
      clearInterval(timerStart);
    };
  }, [
    dispatchTimer,
    audioRef,
    minuteDuration,
    secondDuration,
    currentSeconds,
    currentMinutes,
    seekPosition,
    musicIsPlay,
  ]);
  return (
    <div className="font-bold text-slate-600 p-1">
      <div className="flex p-1">
        <p>{`${currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes}:${
          currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds
        }`}</p>
        <p>{`/${minuteDuration < 10 ? `0${minuteDuration}` : minuteDuration}:${
          secondDuration < 10 ? `0${secondDuration}` : secondDuration
        }`}</p>
      </div>
    </div>
  );
}
