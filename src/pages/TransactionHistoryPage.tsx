import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import anImg from "../assets/gift_bg.jpg";
import { useOneGiftUser, usePopulateHistory } from "../hooks/customHooks";
import { useSelector } from "react-redux";
import moment from "moment";

const TransactionHistoryPage = () => {
  const [state, setState] = useState<boolean>(false);
  const giftUser = useSelector((state: any) => state.giftUser);
  const onStated = () => {
    setState(!state);
  };

  const { data } = useOneGiftUser(giftUser);
  const { populate, isLoading } = usePopulateHistory(giftUser);
  console.log(populate);
  return (
    <>
      <div className="w-full h-full">
        <div className="w-full items-center h-[150px] bg-purple-400 flex flex-col">
          <p className="text-[30px] text-white">Transaction</p>
          {state ? (
            <p className="font-bold text-[50px]">*****</p>
          ) : (
            <p className="font-bold text-[50px]">
              ₦ {parseInt(data?.wallet).toLocaleString()}
            </p>
          )}
          {state ? (
            <AiOutlineEye onClick={onStated} className="cursor-pointer" />
          ) : (
            <AiOutlineEyeInvisible
              onClick={onStated}
              className="cursor-pointer"
            />
          )}
        </div>
        <div className="w-full justify-center flex-wrap flex">
          <>
            {isLoading ? (
              <div>please check connection...</div>
            ) : (
              <>
                {populate?.history?.map((el: any) => (
                  <div key={el?._id} className="w-[300px] h-[70px] m-2 cursor-default border px-2 items-center justify-between flex rounded hover:shadow-xl">
                    <img
                      src={anImg}
                      className="object-cover w-[50px] rounded-full mr-2 h-[50px]"
                    />
                    <div>
                      {el?.userID === giftUser ? (
                        <p className="text-slate-500 font-bold">Debited</p>
                      ) : (
                        <p className="text-slate-500 font-bold">Credited</p>
                      )}
                      <div className="text-[10px]">
                        {moment(el?.createdAt).fromNow()}
                      </div>
                    </div>
                    <div>₦{el?.amount}</div>
                  </div>
                ))}
              </>
            )}
          </>
        </div>
      </div>
    </>
  );
};

export default TransactionHistoryPage;
