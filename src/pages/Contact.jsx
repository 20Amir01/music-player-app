import Nav from "../components/Nav";
import contactillustrationGif from "../assets/contact-illustration.gif";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../components/Loading"
export default function Contact() {
  const [isLoading,setIsLoading]=useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false)
    }, 500);
  },[])
  if(isLoading) return(<Loading></Loading>)
  return (
    <div className="h-screen w-full">
      <Nav></Nav>
      <div className="p-10 rounded-md">
        <div className="grid grid-cols-1  md:grid-cols-2 shadow-xl">
          <img className="md:h-full w-full rounded-t-xl md:rounded-none" src={contactillustrationGif} alt="gif" />
          <form onSubmit={(e)=>{
            e.preventDefault()
            alert("This is s testing send message")
            }} className="grid grid-cols-1 gap-1 p-5 bg-[#f3f4f6] rounded-b-xl md:rounded-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name"/>
            </div>
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Phone"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="type your message"></textarea>
            <button className="bg-black text-slate-50 h-10 rounded-none" type="sumbit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
