import PropTypes from "prop-types";
import Ads from "./Ads";
import AppNav from "./AppNav";

Sidebar.propTypes = {
  isOpenNav: PropTypes.bool,
};
export default function Sidebar({ isOpenNav }) {
  return (
    <>
      <div className="bg-[#a2a5b9] w-60 overflow-x-hidden min-h-screen justify-start items-start text-center font-mono p-10 z-40 md:z-10 border-gray-400 border-l-2 hidden md:flex">
        <AppNav />
        <Ads />
      </div>
      {isOpenNav && (
        <div className="bg-[#a2a5b9] w-60 overflow-x-hidden min-h-screen justify-start items-start text-center font-mono p-10 z-40 md:z-10 border-gray-400 border-l-2 fixed md:hidden animate-open">
          <AppNav />
          <Ads />
        </div>
      )}
    </>
  );
}
