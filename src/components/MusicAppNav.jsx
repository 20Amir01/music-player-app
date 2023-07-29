import categories from "../assets/icons/categories.png";
import saved from "../assets/icons/saved.png";
import home from "../assets/icons/home.png";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { useState } from "react";
  export default function MusicAppNav() {
    const [categoriesIsOpen, setCategoriesIsOpen] = useState(false);
    return (
      <div>
        <nav>
          <Logo className="text-slate-700"></Logo>
          <div className="flex justify-start my-2">
            <span className="text-zinc-600">Menu</span>
          </div>
          <ul>
            <li className="flex items-center">
              <img className="w-4 h-4 mr-3" src={home}></img>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="flex flex-col">
              <button
                onClick={() => {
                  setCategoriesIsOpen(!categoriesIsOpen);
                }}
                className="flex items-center"
              >
                <img className="w-4 h-4 mr-3" src={categories}></img>Categories
              </button>
              {categoriesIsOpen && (
                <ul className="text-left pl-5" onClick={()=>{alert("for test")}}>
                  <li>pop</li>
                  <li>Rock</li>
                  <li>Jazz</li>
                  <li>Hip hop</li>
                </ul>
              )}
            </li>
            <li className="flex items-center" onClick={()=>{alert("for test")}}>
              <img className="w-4 h-4 mr-3" src={saved}></img>Saved
            </li>
          </ul>
          <div className="flex justify-start my-2">
            <span className="text-zinc-600">Playlists</span>
          </div>
          <ul>
            <li className="flex" onClick={()=>{alert("for test")}}>focus</li>
            <li className="flex" onClick={()=>{alert("for test")}}>lofi</li>
          </ul>
        </nav>
      </div>
    );
  }
  