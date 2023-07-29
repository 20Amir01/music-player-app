import PropTypes from "prop-types";
import menu from "../assets/icons/icons8-menu-48.png";

MusicAppResponsiveSidebarBtn.propTypes = {
  handleOpenNav: PropTypes.func,
};
export default function MusicAppResponsiveSidebarBtn({ handleOpenNav }) {
  return (
    <div className="md:hidden flex items-center">
      <button className="w-12" onClick={handleOpenNav}>
        <img className="w-full" src={menu}></img>
      </button>
    </div>
  );
}
