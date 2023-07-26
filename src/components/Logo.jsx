import musicLogo from "../assets/icons/note-music-colorful-rainbow.jpg";

export default function Logo() {
  return (
    <div className="flex justify-center items-center gap-2">
      <img className="rounded-full w-10" src={musicLogo}></img>Music App
    </div>
  );
}
