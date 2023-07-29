// import arrowDownIcon from "../assets/icons/icons8-expand-arrow-50.png";
import user from "../assets/icons/user.png";

export default function MusicAppAccountStatus() {
  return (
    <div className="flex justify-end items-center rounded-full gap-2 px-2">
      <div className="flex justify-center">
        <span className="text-slate-800 font-bold hidden md:inline-block">
          AmirMohammad
        </span>
      </div>
      <div className="w-12 h-12 flex items-center">
        <img className="w-auto h-auto bg-black rounded-full" src={user}></img>
      </div>
      {/* <div>
        <button>
          <img className="w-5" src={arrowDownIcon}></img>
        </button>
      </div> */}
    </div>
  );
}
