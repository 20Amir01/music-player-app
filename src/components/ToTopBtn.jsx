import { useEffect, useState } from "react";
import chevron_down_icon from "../assets/icons/icons8-chevron-down-24.png";
export default function ToTopBtn() {
  const [toTopBtnVisible, setToTopBtnVisible] = useState(false);
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setToTopBtnVisible(true);
      } else {
        setToTopBtnVisible(false);
      }
    });
  }, [toTopBtnVisible]);
  return (
    <>
      <div
        className={`right-5 bottom-5 ${
          toTopBtnVisible ? "fixed toTopAnimation" : "hidden"
        } z-50`}
      >
        <button
          onClick={goTop}
          className="bg-slate-500 p-2 rounded-full rotate-180"
        >
          <img src={chevron_down_icon}></img>
        </button>
      </div>
    </>
  );
}
