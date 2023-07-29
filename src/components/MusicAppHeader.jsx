import PropTypes from "prop-types";
import MusicAppHistoryControlButtons from "./MusicAppHistoryControlButtons";
import MusicAppSearchInput from "./MusicAppSearchInput";
import MusicAppAccountStatus from "./MusicAppAccountStatus";
import MusicAppResponsiveSidebarBtn from "./MusicAppResponsiveSidebarBtn";
MusicAppHeader.propTypes = {
  handleOpenNav: PropTypes.func,
};
export default function MusicAppHeader({ handleOpenNav }) {
  return (
    <header className="bg-slate-200 drop-shadow-lg md:drop-shadow-none col-span-2 px-2 py-1">
      <div className="flex justify-between w-full items-center md:pl-12 gap-2">
        <MusicAppHistoryControlButtons />
        <MusicAppSearchInput />
        <div className="flex">
          <MusicAppAccountStatus />
          <MusicAppResponsiveSidebarBtn handleOpenNav={handleOpenNav} />
        </div>
      </div>
    </header>
  );
}
