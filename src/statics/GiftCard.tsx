import { FC } from "react";
import gift_hero from "../assets/giftcard.webp";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

interface iProp {
  prop?: any;
}

const GiftCard: FC<iProp> = ({ prop }) => {
  const giftUser = useSelector((state: any) => state?.giftUser);
  return (
    <>
      <div
        key={prop?._id}
        className="w-[300px] relative flex flex-col justify-between h-[400px] maxPhone:w-[350px] overflow-hidden m-2 border"
      >
        {prop?.bought === true ? (
          <p className="absolute right-0 top-0 text-purple-500 px-3 py-2 bg-purple-100 z-20 cursor-default rounded-b-2xl">
            Bought
          </p>
        ) : null}
        <img
          src={gift_hero}
          className="w-full hover:scale-[1.02] transition-all duration-300 h-[70%] object-cover"
        />
        <div className="p-3">
          <p className="text-slate-500 font-bold">{prop?.giftName} Gift Card</p>
          <div className="text-[11px]">{prop?.giftTerms}</div>
          <div className="flex justify-between items-center w-full">
            <p className="text-slate-500 font-bold mt-3">
              ₦{prop?.giftPrice}.00
            </p>
            {/* {giftUser} */}
            {giftUser !== prop?.userID ? (
              <>
                {prop?.bought !== true ? (
                  <Link
                    to={`/home/buy/${prop?._id}/${giftUser}`}
                    className="p-2 bg-purple-400 hover:bg-purple-500 rounded-md text-white cursor-pointer"
                  >
                    Buy
                  </Link>
                ) : null}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default GiftCard;
