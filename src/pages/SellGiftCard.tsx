import { useSelector } from "react-redux";
import { usePopulateGift } from "../hooks/customHooks";
import GiftCard from "../statics/GiftCard";
import SellCard from "../statics/SellCard";
import { Vortex } from "react-loader-spinner";

const SellGiftCard = () => {
  const giftUser = useSelector((state: any) => state.giftUser);
  const { data, isLoading } = usePopulateGift(giftUser);
  return (
    <>
      <div className="w-full h-full justify-center flex-wrap flex">
        <SellCard />
        <>
          {isLoading ? (
            <Vortex />
          ) : (
            <>
              {data?.gift?.map((el: any) => {
                return <GiftCard prop={el} key={el?._id}/>;
              })}
            </>
          )}
        </>
      </div>
    </>
  );
};

export default SellGiftCard;
