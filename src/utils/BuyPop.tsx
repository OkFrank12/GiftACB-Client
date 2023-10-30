import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { buyGiftAPI } from "../api/giftAPI";
import { useOneGift } from "../hooks/customHooks";
import gift from "../assets/giftcard.webp";
import moment from "moment";
import Swal from "sweetalert2";
import { useState } from "react";
import Loader from "./Loader";
import { Vortex } from "react-loader-spinner";

const BuyPop = () => {
  const navigate = useNavigate();
  const { _id, userID } = useParams();
  const validateInput = (e: any) => {
    const input = e.target;
    const inputValue = input.value;

    input.value = inputValue.replace(/\D/g, "");
  };

  const [loading, setLoading] = useState<boolean>(false);

  const { one, isLoading } = useOneGift(_id);

  const schema = yup.object({
    amount: yup.number().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = handleSubmit(async (data: any) => {
    setLoading(true);
    buyGiftAPI(userID!, _id!, data).then((res: any) => {
      if (res) {
        Swal.fire({
          icon: "success",
          title: `Bought a Gift Card`,
          text: `You have just purchased a gift card congrates`,
          iconColor: "purple",
          timer: 4000,
          showConfirmButton: false,
          timerProgressBar: true,
        }).then(() => {
          navigate(`/home`);
          setLoading(false);
        });
      } else {
        Swal.fire({
          icon: "error",
          title: `Can't purchase`,
          text: `The Card you want to purchase might be yours`,
          iconColor: "crimson",
          timer: 2000,
          showConfirmButton: false,
          timerProgressBar: true,
        }).then(() => {
          setLoading(false);
        });
      }
    });
  });

  //   console.log(one);
  return (
    <>
      {loading && <Loader />}
      <form
        onSubmit={onHandleSubmit}
        className="w-full items-center flex flex-col text-center pl-3"
      >
        <div className="w-full text-[30px] font-bold">Buy Product</div>
        <span className="text-[30px]">₦</span>
        <input
          type="text"
          {...register("amount")}
          onChange={validateInput}
          maxLength={3}
          className={`w-[70px] ${
            errors.amount?.message ? "outline-red-500" : "outline-none"
          } text-center text-[30px] h-[50px] border`}
        />

        <span className="text-[30px]">.00</span>
        <br />
        <button type="submit" className="px-10 py-2 border mt-5 capitalize">
          buy
        </button>
        <p className="text-red-500 text-[13px]">
          Note: Put in the correct price tag else your request wont be granted.
        </p>
        <p className="text-red-500 text-[13px]">
          If You are the owner of the gift card, And you attempt to purchase
          your money will be deducted even if it is your card
        </p>
      </form>
      <div className="w-full justify-center flex">
        {isLoading ? (
          <>
            <Vortex />
          </>
        ) : (
          <div className="w-[300px] text-[13px] p-2 h-[400px] border mt-5">
            <img src={gift} className="w-full object-cover h-[70%]" />
            <p>{one?.giftName}</p>
            <p>{one?.giftPrice}</p>
            <p>{one?.giftTerms}</p>
            <p>{moment(one?.createdAt).fromNow()}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default BuyPop;
