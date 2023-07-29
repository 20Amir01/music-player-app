import { NavLink} from "react-router-dom";
import Logo from "./Logo";

export default function Nav() {
    return(
        <nav className="flex justify-between items-center font-bold lg:text-xl md:text-lg sm:text-md text-sm p-5 text-slate-600 tracking-tighter">
        <Logo className="text-gray-700"></Logo>
        <ul className="flex gap-5 flex-row-reverse font-bold">
          <li>
            <NavLink to="/login" className={({isActive})=> isActive?"bg-white transition-colors text-gray-700 px-4 py-2 rounded-md":"bg-black hover:bg-fuchsia-500 transition-colors text-white px-4 py-2 rounded-md"}>LOGIN</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-black transition-all">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" className="hover:text-black transition-all">CONTACT US</NavLink>
          </li>
        </ul>
      </nav>
    )
    }