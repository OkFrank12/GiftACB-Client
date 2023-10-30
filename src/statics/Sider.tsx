import { BsFillPersonFill } from "react-icons/bs";
import { TbMailFilled } from "react-icons/tb";
import { MdSell } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { PiToggleLeftLight, PiToggleRightLight } from "react-icons/pi";
import {
  AiOutlineEye,
  AiFillGift,
  AiOutlineLogout,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { onLogOut, onToggleState } from "../global/GlobalState";
import { Link } from "react-router-dom";
import { useOneGiftUser } from "../hooks/customHooks";

const Sider = () => {
  const dispatch = useDispatch();
  const giftUser = useSelector((state: any) => state.giftUser);
  const toggleIt = useSelector((state: any) => state.toggle);
  const onToggleIt = () => {
    dispatch(onToggleState(!toggleIt));
  };
  const [toggle, setToggle] = useState<boolean>(false);
  const onToggle = () => {
    setToggle(!toggle);
  };

  const { data, isLoading } = useOneGiftUser(giftUser);
  return (
    <>
      {!toggleIt ? (
        <>
          <div className="border-r-[1px] h-full bg-white fixed text-[12px] w-[250px]">
            <div className="w-full py-3 justify-center flex text-[30px]">
              {toggleIt ? (
                <PiToggleLeftLight
                  onClick={onToggleIt}
                  className="cursor-pointer hover:scale-[1.05]"
                />
              ) : (
                <PiToggleRightLight
                  onClick={onToggleIt}
                  className="cursor-pointer hover:scale-[1.05]"
                />
              )}
            </div>
            {isLoading ? (
              <>...</>
            ) : (
              <>
                {" "}
                <div className="w-full justify-between px-5 py-2 border-b-[1px] flex items-center mb-10">
                  <span>{data?.userName}</span> <BsFillPersonFill />
                </div>
                <div className="w-full px-5 py-2 flex items-center justify-between border-b-[1px] my-10">
                  <span>{data?.email.split("@gmail.com")}</span>{" "}
                  <TbMailFilled />
                </div>
              </>
            )}
            <div className="w-full px-5 py-2 flex items-center justify-between border-b-[1px] my-10">
              ₦{!toggle ? "*****" : parseInt(data?.wallet).toLocaleString()}.00{" "}
              {!toggle ? (
                <AiOutlineEye onClick={onToggle} />
              ) : (
                <AiOutlineEyeInvisible onClick={onToggle} />
              )}
            </div>
            <Link
              to={`/home`}
              className="w-full flex items-center cursor-pointer justify-between px-5 py-2 border-b-[1px] my-10"
            >
              <span>gift pool</span> <AiFillGift />
            </Link>
            <Link
              to={`/home/sell`}
              className="w-full cursor-pointer px-5 py-2 flex items-center justify-between border-b-[1px] my-10"
            >
              <span>sell giftcard </span>
              <MdSell />
            </Link>
            <Link
              to={`/home/history`}
              className="w-full px-5 py-2 flex items-center justify-between border-b-[1px] my-10"
            >
              <span> Transactions </span>
              <GrTransaction />
            </Link>
            <button
              onClick={() => {
                dispatch(onLogOut());
              }}
              className="w-full px-5 py-2 flex items-center justify-between border-b-[1px] my-10"
            >
              <span> LogOut </span>
              <AiOutlineLogout />
            </button>
          </div>
        </>
      ) : (
        <div className="border-r-[1px] fixed bg-white text-[12px] w-[50px] h-full">
          <div className="w-full py-3 justify-center flex text-[30px]">
            {toggleIt ? (
              <PiToggleLeftLight
                onClick={onToggleIt}
                className="cursor-pointer hover:scale-[1.05]"
              />
            ) : (
              <PiToggleRightLight
                onClick={onToggleIt}
                className="cursor-pointer hover:scale-[1.05]"
              />
            )}
          </div>
          <div className="w-full justify-center text-[25px] px-2 py-2 border-b-[1px] flex items-center mb-10">
            <BsFillPersonFill />
          </div>
          <div className="w-full text-[25px] px-2  py-2 flex items-center justify-center border-b-[1px] my-10">
            <TbMailFilled />
          </div>
          <div className="w-full px-5 py-2 flex items-center text-[25px] justify-center font-bold border-b-[1px] my-10">
            ₦
          </div>
          <Link
            to={`/home`}
            className="w-full cursor-pointer flex items-center justify-center text-[25px] px-2 py-2 border-b-[1px] my-10"
          >
            <AiFillGift />
          </Link>
          <Link
            to={`/home/sell`}
            className="w-full px-2 py-2 flex items-center text-[25px] justify-center border-b-[1px] my-10"
          >
            <MdSell />
          </Link>
          <Link
            to={`/home/history`}
            className="w-full px-2 py-2 flex items-center justify-center text-[25px] border-b-[1px] my-10"
          >
            <GrTransaction />
          </Link>
          <button
            onClick={() => {
              dispatch(onLogOut());
            }}
            className="w-full px-5 py-2 flex items-center justify-between border-b-[1px] my-10"
          >
            <AiOutlineLogout />
          </button>
        </div>
      )}
    </>
  );
};

export default Sider;
