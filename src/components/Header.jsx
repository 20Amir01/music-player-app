import PropTypes from "prop-types";
import backwardHistoryIcon from "../assets/icons/icons8-back-50.png";
import forwardHistoryIcon from "../assets/icons/icons8-forward-50.png";
import arrowDownIcon from "../assets/icons/icons8-expand-arrow-50.png";
import user from "../assets/icons/user.png";
import menu from "../assets/icons/icons8-menu-48.png";
import searchIcon from "../assets/icons/icons8-search-40.png";
Header.propTypes = {
  handleOpenNav: PropTypes.func,
};
export default function Header({ handleOpenNav }) {
  return (
    <header className="w-full h-auto py-1 px-2 bg-slate-200 fixed z-10  max-w-[1360px] drop-shadow-md">
      <div className="flex h-12 justify-between pl-0 md:pl-56 relative">
        <div className="flex justify-start items-center gap-2">
          <button>
            <img className="w-14 md:w-8" src={backwardHistoryIcon}></img>
          </button>
          <button>
            <img className="w-14 md:w-8" src={forwardHistoryIcon}></img>
          </button>
        </div>
        <div className="flex h-full justify-center items-center w-full mx-1 px-5 relative">
          <button className="absolute left-6">
            <img className="w-8" src={searchIcon}></img>
          </button>
          <input
            type="search"
            placeholder="Search"
            className="bg-white w-full rounded-xl h-full px-10"
          />
          {/* w-[12rem] sm:[w-16rem] md:w-[20rem] lg:w-[42rem] */}
        </div>
        <div className="flex justify-end items-center rounded-full gap-2 px-2">
          <div className="flex justify-center">
            <span className="text-slate-800 font-bold inline-block">
            AmirMohammad
            </span>
          </div>
          <div className="w-12 h-12 flex items-center">
          <img className="w-auto h-auto bg-black rounded-full" src={user}></img>
          </div>
          <div>
          <button>
            <img className="w-5" src={arrowDownIcon}></img>
          </button>
          </div>
        </div>
        <div className="md:hidden flex items-center h-full">
          <button className="w-10" onClick={handleOpenNav}>
            <img className="w-full" src={menu}></img>
          </button>
        </div>
      </div>
    </header>
  );
}
