import PropTypes from "prop-types";
import speaker_icon from "../assets/icons/Speaker_Icon.png";
import mute_icon from "../assets/icons/Mute_Icon.png";
import Slider from "@mui/material/Slider";
Mp3PlayerVolumeController.propTypes = {
  isMute: PropTypes.bool,
  dispatch: PropTypes.func,
  handleVolumeChange: PropTypes.func,
};
export default function Mp3PlayerVolumeController({ isMute, dispatch, handleVolumeChange }) {
  return (
    <div className="flex justify-center items-center gap-3">
      <button
        onClick={() => {
          dispatch({ type: "mute_toggle" });
        }}
      >
        <img className="w-5" src={isMute ? mute_icon : speaker_icon}></img>
      </button>
      <div className="w-14 h-full flex items-center">
        <Slider
          onChange={handleVolumeChange}
          size="small"
          defaultValue={50}
          aria-label="Small"
          valueLabelDisplay="auto"
          min={0}
          max={100}
          sx={{ color: "black" }}
        ></Slider>
      </div>
    </div>
  );
}
