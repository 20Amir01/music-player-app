import PropTypes from "prop-types";
import Slider from "@mui/material/Slider";

Mp3PlayerMusicTimingSlider.propTypes = {
  handleMusicCurrenttimeChanges: PropTypes.func,
  seekPosition: PropTypes.number,
};
export default function Mp3PlayerMusicTimingSlider({ handleMusicCurrenttimeChanges, seekPosition }) {
  return (
    <div className="w-full h-auto absolute top-[-15px] z-20">
      <Slider
        onChange={handleMusicCurrenttimeChanges}
        value={seekPosition}
        min={1}
        max={100}
        sx={{ color: "black" }}
      ></Slider>
    </div>
  );
}
