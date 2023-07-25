import PropTypes from "prop-types";
import categories from "./assets/icons/categories.png";
import saved from "./assets/icons/saved.png";
import home from "./assets/icons/home.png";
import Logo from "./Logo";
Sidebar.propTypes = {
  isOpenNav: PropTypes.bool,
};
export default function Sidebar({ isOpenNav }) {
  return (
    <>
      <Nav className="fixed hidden md:static md:flex"></Nav>
      {isOpenNav && <Nav className="fixed md:hidden animate-open"></Nav>}
    </>
  );
}
Nav.propTypes = {
  className: PropTypes.string,
};
function Nav({ className }) {
  return (
    <div
      className={`bg-gray-300 w-60 h-screen justify-start items-start text-center font-mono p-10 z-50 md:z-10 ${className}`}
    >
      <nav>
        <Logo></Logo>
        <div className="flex justify-start my-2">
          <span className="text-zinc-600">Menu</span>
        </div>
        <ul>
          <li className="flex items-center">
            <img className="w-4 h-4 mr-3" src={home}></img>Home
          </li>
          <li className="flex items-center">
            <img className="w-4 h-4 mr-3" src={categories}></img>Categories
          </li>
          <li className="flex items-center">
            <img className="w-4 h-4 mr-3" src={saved}></img>Saved
          </li>
        </ul>
        <div className="flex justify-start my-2">
          <span className="text-zinc-600">Playlists</span>
        </div>
        <ul>
          <li className="flex">focus</li>
          <li className="flex">lofi</li>
        </ul>
      </nav>
    </div>
  );
}
