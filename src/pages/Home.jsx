import { Link,} from "react-router-dom";
import Nav from "../components/Nav";
export default function Home() {
  return (
    <div className="h-screen overflow-hidden w-full">
      <Nav></Nav>
      <div className="justify-center items-center flex flex-col h-full w-full gap-5">
        <h1 className="text-[8rem] text-transparent">Music App</h1>
        <Link to="/music-app" className="font-Edu-SA text-slate-100 px-5 py-2 text-xl rounded-lg bg-black shadow-lg">LISTEN TO THE MUSICS</Link>
      </div>
    </div>
  );
}
