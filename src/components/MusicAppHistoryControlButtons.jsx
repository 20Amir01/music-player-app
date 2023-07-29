import { useNavigate } from "react-router-dom";
import backwardHistoryIcon from "../assets/icons/icons8-back-50.png";
import forwardHistoryIcon from "../assets/icons/icons8-forward-50.png";

export default function MusicAppHistoryControlButtons() {
  const naviagate=useNavigate()
  return (
    <div className="flex md:hidden justify-between items-center gap-2">
      <button onClick={()=>naviagate(-1)} className="bg-gray-50 w-10 h-10 p-2 rounded-full">
        <img src={backwardHistoryIcon}></img>
      </button>
      <button onClick={()=>naviagate(+1)} className="bg-gray-50 w-10 h-10 p-2 rounded-full">
        <img src={forwardHistoryIcon}></img>
      </button>
    </div>
  );
}
