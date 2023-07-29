import PropTypes from "prop-types";
import MusicAppNav from "./MusicAppNav";

MusicAppSidebar.propTypes = {
  isOpenNav: PropTypes.bool,
};
export default function MusicAppSidebar({ isOpenNav }) {
  return (
    <>
      <div className="bg-[#a2a5b9] w-64 overflow-x-hidden min-h-screen justify-start items-start text-center font-mono p-10 z-10 border-gray-400 border-l-2 hidden md:flex relative text-md">
        <MusicAppNav />
      </div>
      {isOpenNav && (
        <div className="bg-[#a2a5b9] w-72 overflow-x-hidden min-h-screen justify-start items-start text-center font-mono p-5 z-50 border-gray-400 border-l-2 fixed top-0 md:hidden animate-open text-lg">
          <MusicAppNav />
        </div>
      )}
    </>
  );
}
