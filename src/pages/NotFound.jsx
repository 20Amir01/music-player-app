import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Nav from "../components/Nav";

export default function NotFound() {
  const [isLoading,setIsLoading]=useState(true)
useEffect(() => {
  setTimeout(() => {
    setIsLoading(false);
  }, 500);
}, [setIsLoading]);
if(isLoading) return <Loading></Loading>;
  return (
    <div className="h-screen w-full">
      <Nav></Nav>
      <div className="flex flex-col justify-center items-center text-[10rem]">
        <h1 className="text-transparent">Oops!</h1>
        <h2 className="inline-block rounded-full p-1">
          <span className="text-3xl text-slate-700 m-2 font-bold">404</span>
          <span className="text-2xl text-slate-500 m-2">PAGE NOT FOUND</span>
        </h2>
      </div>
    </div>
  );
}
