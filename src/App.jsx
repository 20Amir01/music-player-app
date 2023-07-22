// import Tailwind from "./pages/Tailwind";
// import {BrowserRouter,Routes,Route} from "react-router-dom"
import { musics } from "../data/items";
import { useEffect, useRef, useState } from "react";
// import useSound from "use-sound";
import Footer from "./Footer";
import MusicList from "./MusicList";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useReducer } from "react";
import chevron_down_icon from "./assets/icons/icons8-chevron-down-24.png"
const initialState = {
  // musicsData: musics,
  musicIsPlay: false,
  currentMusicData: {},
  musicIndex: 0,
  isOpenNav: false,
  isMute: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "playSong":
      return {
        ...state,
        musicIsPlay: true,
      };
    case "pauseSong":
      return {
        ...state,
        musicIsPlay: false,
      };
    case "currentMusicData":
      return {
        ...state,
        currentMusicData: { ...action.payload },
      };
    case "musicIndex":
      return {
        ...state,
        musicIndex: action.payload,
      };
    case "openNav":
      return {
        ...state,
        isOpenNav: true,
      };
    case "closeNav":
      return {
        ...state,
        isOpenNav: false,
      };
    case "nextSong":
      return {
        ...state,
        musicIndex:
          state.musicIndex < musics.length - 1 ? state.musicIndex + 1 : 0,
      };
    case "prevSong":
      return {
        ...state,
        musicIndex:
          0 < state.musicIndex ? state.musicIndex - 1 : musics.length - 1,
      };
    case "songFinished":
      return {
        ...state,
      };
    case "mute_toggle":
      return {
        ...state,
        isMute: !state.isMute,
      };
    default:
      return {
        ...state,
      };
  }
};
function App() {
  const [
    { musicIsPlay, musicIndex, currentMusicData, isOpenNav, isMute },
    dispatch,
  ] = useReducer(reducer, initialState);
  const audioRef = useRef();
  const handleOpenNav = () => {
    isOpenNav ? dispatch({ type: "closeNav" }) : dispatch({ type: "openNav" });
  };
  const togglePlayPause = () => {
    musicIsPlay
      ? dispatch({ type: "pauseSong" })
      : dispatch({ type: "playSong" });
  };
  async function playMusic() {
    await dispatch({ type: "pauseSong" });
    await dispatch({ type: "playSong" });
  }
  const [toTopBtnVisible, setToTopBtnVisible] = useState(false);
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setToTopBtnVisible(true);
      } else {
        setToTopBtnVisible(false);
      }
    });
  }, [toTopBtnVisible]);
  return (
    <div className="relative flex justify-between font-mono mx-auto min-h-screen max-w-[1360px]">
      <div
        className={`right-5 bottom-5 ${
          toTopBtnVisible ? "fixed toTopAnimation":"hidden"
        } z-50`}
      >
        <button onClick={goTop} className="bg-slate-500 p-2 rounded-full rotate-180"><img src={chevron_down_icon}></img></button>
      </div>
      <Header handleOpenNav={handleOpenNav}></Header>
      <Sidebar isOpenNav={isOpenNav}></Sidebar>
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
      <Footer
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
      ></Footer>
      {/* <BrowserRouter>
      <Routes>
        <Route />
      </Routes>
  </BrowserRouter> */}
    </div>
  );
}

export default App;
