import { useState, useEffect } from "react";
import { posts as data } from "../../data/items";
import styles from "./Tailwind.module.css";
import playIcon from "../assets/icons/icons8-play-button-circled-50-white.png";
// import cover from "../assets/headset.jpg"
// import { items } from "../../data/items";
export default function Tailwind() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts(data);
    // async function fetchPosts(){
    //   const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    //   const data=await res.json()
    //   setPosts(data)
    // }
    // fetchPosts()
  }, []);
  return (
    <>
      {/* 1 : */}
      {/* <button className="bg-black text-white py-3 px-5 rounded-lg m-3 hover:bg-cyan-500">
        hover
      </button>
      <button className="bg-black text-white py-3 px-5 rounded-lg m-3 focus:bg-cyan-500">
        focus
      </button>
      <button className="bg-black text-white py-3 px-5 rounded-lg m-3 active:bg-cyan-500">
        active
      </button>
      <div className="group bg-gray-300 mx-auto rounded-lg p-6 shadow-lg max-w-xs space-y-3 hover:bg-blue-900 cursor-pointer">
        <h3 className="group-hover:text-white">Card title</h3>
        <p className="group-hover:text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
          similique?
        </p>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <li
              className="text-center odd:bg-blue-300 even:bg-blue-600 cursor-pointer"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <br></br>
      <a href="#text">link</a>
      <div className="select-none">Lorem ipsum dolor sit amet.</div>
      <div className="select-text">Lorem ipsum dolor sit amet.</div>
      <div className="select-all">Lorem ipsum dolor sit amet.</div>
      <div className="select-auto">Lorem ipsum dolor sit amet.</div>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque reprehenderit et harum mollitia eaque sunt temporibus repellendus, perferendis ratione animi porro ipsa error itaque, dolor molestiae ducimus delectus assumenda nulla. Rerum repellendus amet doloremque asperiores vitae ab voluptates quam eligendi.
    ? Veritatis consectetur fugiat, minima beatae porro quas eius
      </div>
      <div id="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iusto autem cumque eveniet ipsa voluptates quos sed? Perferendis fuga fugiat soluta ipsum. Ut molestias nam eveniet! In accusantium perferendis ipsa?
      </div> */}
      {/* 2 : */}
      {/* <div className="w-screen h-screen sm:bg-blue-500 md:bg-pink-500 lg:bg-yellow-400"></div> */}
      {/* 3 : */}
      <div className="p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {posts &&
          posts.map((post) => {
            return (
              <div key={post.id}>
                <div
                  onClick={()=>{alert(post.id)}}
                  className={`relative group ${styles.musicCover} shadow-md rounded-lg bg-cover bg-center cursor-pointer aspect-square flex justify-center items-center`}
                >
                  <button className="text-slate-950  bg-slate-950 w-14 h-14 rounded-full hidden animate-pulse group-hover:inline-block">
                    <img src={playIcon}></img>
                  </button>
                </div>
                <span className="text-slate-800 font-bold block text-md">
                  music name
                </span>
                <span className="text-slate-600 font-bold block text-sm">
                  by singer name
                </span>
              </div>
            );
          })}
      </div>
    </>
  );
}
