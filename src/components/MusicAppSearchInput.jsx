import searchIcon from "../assets/icons/icons8-search-40.png";
export default function MusicAppSearchInput() {
  return (
    <div className="flex h-full justify-center items-center w-full mx-1 px-1 md:px-10 relative">
      <button className="absolute left-2 md:left-12">
        <img className="w-8" src={searchIcon}></img>
      </button>
      <input
        type="search"
        placeholder="Search"
        className="bg-white w-full h-10 text-center rounded-xl px-5"
        maxLength={20}
      />
      {/* w-[12rem] sm:[w-16rem] md:w-[20rem] lg:w-[42rem] */}
    </div>
  );
}
