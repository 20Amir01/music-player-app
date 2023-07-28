import { musics } from "../../data/items";
import { useRef } from "react";
import Footer from "./Footer";
import MusicList from "./MusicList";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MusicApp from "../pages/MusicApp";
import About from "../pages/About";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound"
// import chevron_down_icon from "./assets/icons/icons8-chevron-down-24.png"
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
  // const [toTopBtnVisible, setToTopBtnVisible] = useState(false);
  // const goTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 200) {
  //       setToTopBtnVisible(true);
  //     } else {
  //       setToTopBtnVisible(false);
  //     }
  //   });
  // }, [toTopBtnVisible]);

  return (
    <div className="container relative flex justify-between font-mono mx-auto min-h-screen max-w-[1366px]">
      {/* <div
        className={`right-5 bottom-5 ${
          toTopBtnVisible ? "fixed toTopAnimation":"hidden"
        } z-50`}
      >
        <button onClick={goTop} className="bg-slate-500 p-2 rounded-full rotate-180"><img src={chevron_down_icon}></img></button>
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route
            path="/music-app"
            element={
              <MusicApp>
                <Header handleOpenNav={handleOpenNav}></Header>
                  <div className="flex">
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
                  </div>
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
              </MusicApp>
            }
          />
          <Route path="*" element={<NotFound></NotFound>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
