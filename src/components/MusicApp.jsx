import PropTypes from "prop-types";

MusicApp.propTypes={
  children:PropTypes.node
}
export default function MusicApp({children}) {
  return(
    <>
      {children}
    </>
  )
}