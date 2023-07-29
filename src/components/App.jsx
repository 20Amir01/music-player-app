import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useReducer } from "react";
import { useRef } from "react";
import { musics } from "../../data/items";
import Home from "../pages/Home";
import MusicApp from "../pages/MusicApp";
import About from "../pages/About";
import Login from "../pages/Login";
import ContactUs from "../pages/ContactUs";
import NotFound from "../pages/NotFound";
const initialState = {
  // musicsData: musics,
  musicIsPlay: false,
  currentMusicData: {},
  musicIndex: 0,
  isOpenNav: false,
  isMute: false,
  isLoop:false
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
    case "loop_toggle":
      return{
        ...state,
        isLoop:!state.isLoop,
      }
    default:
      return {
        ...state,
      };
  }
};
function App() {
  const [
    { musicIsPlay, musicIndex, currentMusicData, isOpenNav, isMute ,isLoop},
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
  return (
    <div className="container relative flex justify-between font-mono mx-auto min-h-screen max-w-[1366px]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
          <Route
            path="/music-app"
            element={
              <MusicApp
                handleOpenNav={handleOpenNav}
                isOpenNav={isOpenNav}
                musicIsPlay={musicIsPlay}
                currentMusicData={currentMusicData}
                dispatch={dispatch}
                musicIndex={musicIndex}
                togglePlayPause={togglePlayPause}
                audioRef={audioRef}
                playMusic={playMusic}
                isMute={isMute}
                isLoop={isLoop}
              />
            }
          />
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
