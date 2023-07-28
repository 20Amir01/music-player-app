import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
MusicApp.propTypes={
  children:PropTypes.node
}
export default function MusicApp({children}) {
  const [isLoading,setIsLoading]=useState(true)
useEffect(() => {
  setTimeout(() => {
    setIsLoading(false);
  }, 500);
}, [setIsLoading]);
if(isLoading) return <Loading></Loading>;
  return(
    <div className="grid grid-cols-1">
      {children}
    </div>
  )
}