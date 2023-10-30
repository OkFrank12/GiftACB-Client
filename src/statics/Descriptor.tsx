import { FC } from "react";
import reactImg from "../assets/gift_bg.jpg";

interface iPass {
  title: string;
  describe: string;
}
const Descriptor: FC<iPass> = ({ title, describe }) => {
  return (
    <>
      <div className="w-[50%] minTablet:w-full h-full minTablet:h-[60%] relative">
        <img src={reactImg} className="w-full h-full object-cover" />
        <div className="w-full h-full bg-[rgba(89,55,148,0.9)] p-10 phone:p-2 text-white absolute top-0">
          <p className="font-bold text-[35px]">GiftACB</p>
          <p className="font-Poppins miniLapTop:mt-5 phone:text-[30px] text-[45px] minTablet:text-[35px] phone:mb-2 mt-20 mb-5">{title}</p>
          <span className="phone:text-[13px]">{describe}</span>
        </div>
      </div>
    </>
  );
};

export default Descriptor;
