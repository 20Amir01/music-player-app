import PropTypes from "prop-types";
import AppNav from "./AppNav";

Sidebar.propTypes = {
  isOpenNav: PropTypes.bool,
};
export default function Sidebar({ isOpenNav }) {
  return (
    <>
      <AppNav className="fixed hidden md:static md:flex"></AppNav>
      {isOpenNav && <AppNav className="fixed md:hidden animate-open"></AppNav>}
    </>
  );
}
