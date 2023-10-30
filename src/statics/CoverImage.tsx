import { Outlet } from "react-router-dom";
import reactImg from "../assets/gift_bg.jpg";

const CoverImage = () => {
  return (
    <>
      <div className="w-full h-[100vh] relative">
        <img
          src={reactImg}
          className="w-full h-full object-cover absolute top-0"
        />
        <div className="w-full h-full bg-[rgba(14,39,46,0.95)] flex justify-center items-center absolute">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default CoverImage;
