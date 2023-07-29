import Mp3Player from "./Mp3Player";
import PropTypes from "prop-types";
MusicAppFooter.propTypes = {
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
export default function MusicAppFooter({
  musicIsPlay,
  currentMusicData,
  dispatch,
  audioRef,
  togglePlayPause,
  musicIndex,
  playMusic,
  isMute,
}) {
  return (
    <footer className="max-w-[1360px] fixed bottom-0 w-full h-auto z-20">
      <Mp3Player
        musicIsPlay={musicIsPlay}
        currentMusicData={currentMusicData}
        audioRef={audioRef}
        togglePlayPause={togglePlayPause}
        dispatch={dispatch}
        musicIndex={musicIndex}
        playMusic={playMusic}
        isMute={isMute}
      />
    </footer>
  );
}
