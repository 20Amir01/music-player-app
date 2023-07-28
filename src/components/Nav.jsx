import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function Nav() {
    return(
        <nav className="flex justify-between items-center font-bold lg:text-xl md:text-lg sm:text-md text-sm p-5 text-slate-600">
        <Logo className="text-slate-300"></Logo>
        <ul className="flex gap-5 flex-row-reverse font-bold">
          <li>
            <Link to="/login" className={`bg-black hover:bg-blue-500 text-white px-4 py-2 rounded-md`}>Login</Link>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            <NavLink to="/contact">contact</NavLink>
          </li>
        </ul>
      </nav>
    )
    }