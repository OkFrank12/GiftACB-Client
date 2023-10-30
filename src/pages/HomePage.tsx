import { Vortex } from "react-loader-spinner";
import gift_hero from "../assets/giftcard.webp";
import { useAllGift } from "../hooks/customHooks";
import GiftCard from "../statics/GiftCard";

const HomePage = () => {
  const { data, isLoading } = useAllGift();
  return (
    <>
      <div className="ml-2">
        <img
          src={gift_hero}
          className="w-full maxPhone:h-[200px] miniLapTop:h-[400px] tablet:h-[300px] minTablet:h-[250px] h-[500px] object-cover"
        />
        <div className="flex flex-wrap items-center justify-center">
          {isLoading ? (
            <>
              <Vortex />
            </>
          ) : (
            <>
              {" "}
              {data.length === 0 ? (
                <>no gifts available now</>
              ) : (
                <>
                  {data?.map((el: any) => (
                    <GiftCard prop={el} key={el?._id} />
                  ))}{" "}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
