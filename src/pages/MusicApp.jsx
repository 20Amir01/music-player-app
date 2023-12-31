import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import Loading from "../components/Loading";
import MusicAppHeader from "../components/MusicAppHeader"
import MusicAppFooter from "../components/MusicAppFooter"
import MusicAppSidebar from "../components/MusicAppSidebar"
import MusicList from "../components/MusicList"
import { musics } from "../../data/items";
MusicApp.propTypes = {
  handleOpenNav: PropTypes.func,
  isOpenNav: PropTypes.bool,
  musicIsPlay: PropTypes.bool,
  currentMusicData: PropTypes.object,
  dispatch: PropTypes.func,
  musicIndex: PropTypes.number,
  togglePlayPause: PropTypes.func,
  audioRef: PropTypes.node,
  playMusic: PropTypes.func,
  isMute: PropTypes.bool,
  isLoop:PropTypes.bool
};
export default function MusicApp({
  handleOpenNav,
  isOpenNav,
  musicIsPlay,
  currentMusicData,
  dispatch,
  musicIndex,
  togglePlayPause,
  audioRef,
  playMusic,
  isMute,
  isLoop
}) {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      Swal.fire({
        title: 'Note',
        text: 'All music links and covers are from pixabay website\nThere is no api .\nIf some musics does not play , that is not my problem😁',
        icon: 'info',
        confirmButtonText: 'Got it'
      })
    }, 500);
  }, [setIsLoading]);
  if (isLoading) return <Loading></Loading>;
  return (
    <div className="overflow-hidden h-screen">
      <MusicAppHeader handleOpenNav={handleOpenNav}></MusicAppHeader>
      <div className="flex">
        <MusicAppSidebar isOpenNav={isOpenNav}></MusicAppSidebar>
        <MusicList
          musicIsPlay={musicIsPlay}
          currentMusicData={currentMusicData}
          setCurrentMusic={dispatch}
          musicIndex={musicIndex}
          musics={musics}
          togglePlayPause={togglePlayPause}
          audioRef={audioRef}
          dispatch={dispatch}
          playMusic={playMusic}
        ></MusicList>
      </div>
      <MusicAppFooter
        musicIsPlay={musicIsPlay}
        setMusicIsPlay={dispatch}
        musics={musics}
        currentMusicData={currentMusicData}
        setCurrentMusic={dispatch}
        musicIndex={musicIndex}
        togglePlayPause={togglePlayPause}
        audioRef={audioRef}
        dispatch={dispatch}
        playMusic={playMusic}
        isMute={isMute}
        isLoop={isLoop}
      ></MusicAppFooter>
    </div>
  );
}
