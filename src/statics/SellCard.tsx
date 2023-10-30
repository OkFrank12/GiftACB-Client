import { useState } from "react";
import gift from "../assets/giftcard.webp";
import { FaCamera } from "react-icons/fa";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createGiftAPI } from "../api/giftAPI";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import Loader from "../utils/Loader";

const SellCard = () => {
  const validateInput = (e: any) => {
    const input = e.target;
    const inputValue = input.value;

    input.value = inputValue.replace(/\D/g, "");
  };
  const giftUser = useSelector((state: any) => state.giftUser);

  // const [image, setImage] = useState<string>("");
  // const [imageData, setImageData] = useState<any>(gift);
  const [loading, setLoading] = useState<boolean>(false);

  // const onHandleImage = (e: any) => {
  //   const file = e.target.files[0];
  //   const save = URL.createObjectURL(file);
  //   setImage(file);
  //   setImageData(save);
  // };

  const schema = yup.object({
    giftName: yup.string().required(),
    giftPrice: yup.number().required(),
    giftTerms: yup.string().required(),
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
    // const { giftName, giftPrice, giftTerms } = data;
    // const formData = new FormData();
    // formData.append("giftName", giftName);
    // formData.append("giftPrice", giftPrice);
    // formData.append("giftTerms", giftTerms);
    // formData.append("image", image);

    createGiftAPI(giftUser, data).then((res: any) => {
      if (res) {
        Swal.fire({
          icon: "success",
          iconColor: "purple",
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          title: `Gift Card Sale`,
          text: `Your Gift Card has been placed for sale`,
          showCancelButton: false,
        }).then(() => {
          console.log(res);
          setLoading(false);
        });
      } else {
        Swal.fire({
          icon: "error",
          iconColor: "crimson",
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          title: `Couldn't Upload Gift Sale`,
          text: `Check Your Credentials or Internet Connection`,
          showCancelButton: false,
        }).then(() => {
          setLoading(false);
        });
      }
    });
  });
  return (
    <>
      {loading && <Loader />}
      <form onSubmit={onHandleSubmit} className="w-[300px] m-2">
        <div className="relative w-[300px] h-[300px]">
          <img src={gift} className="object-cover w-full h-full" />
          <input
            // onChange={onHandleImage}
            type="file"
            className="hidden"
            // id="pix"
          />
          <label
            onClick={() => {
              Swal.fire({
                icon: "info",
                iconColor: "purple",
              });
            }}
            className="w-[50px] h-[50px] rounded absolute bg-purple-300 cursor-pointer text-white flex justify-center items-center text-[30px] bottom-3 right-3"
            // htmlFor="pix"
          >
            <FaCamera />
          </label>
        </div>
        <p className="text-slate-400">
          What type of gift card are you selling?
        </p>
        {/* <select {...register("giftName")} className="w-[300px] outline-dotted">
          <option value="Steam">Steam</option>
          <option value="Razor Gold">Razor Gold</option>
          <option value="Amazon">Amazon</option>
          <option value="eBay">eBay</option>
          <option value="Visa">Visa</option>
          <option value="Target">Target</option>
          <option value="Glover">Glover</option>
          <option value="iTunes">iTunes</option>
          <option value="American Express">American Express</option>
          <option value="Walmart">Walmart</option>
          <option value="Best Buy">Best Buy</option>
          <option value="AppleBees">AppleBees</option>
          <option value="GameStop">GameStop</option>
          <option value="Nike">Nike</option>
          <option value="Sephora">Sephora</option>
          <option value="Macy">Macy</option>
        </select> */}
        <input
          type="text"
          maxLength={10}
          {...register("giftName")}
          className="w-full pl-2 h-[35px] border outline-dotted"
          placeholder="gift name"
        />
        <div className="flex my-2">
          <p className="text-slate-400">Price of Gift Card</p>
          <input
            maxLength={3}
            type="text"
            {...register("giftPrice")}
            onInput={validateInput}
            className={`w-[40px] ${
              errors.giftPrice?.message ? "outline-red-500" : "outline-none"
            }  border text-center`}
            placeholder="₦₦₦"
          />
        </div>
        <p className="text-slate-400">What are you terms?</p>
        {/* <select {...register("giftTerms")} className="w-[300px] outline-dotted">
          <option value="">Reloadable</option>
          <option value="">Fraud Protection</option>
          <option value="">State Laws</option>
          <option value="">Usage</option>
          <option value="">Fees</option>
        </select> */}
        <input
          type="text"
          // maxLength={10}
          {...register("giftTerms")}
          className="w-full pl-2 h-[35px] border outline-dotted"
          placeholder="gift terms"
        />
        <br />
        <br />
        <br />
        {/* <div className="flex w-full items-center justify-end"> */}
        <button
          type="submit"
          className="px-5 py-2 bg-purple-400 hover:bg-purple-500 mt-2"
        >
          Sell
        </button>
        {/* </div> */}
      </form>
    </>
  );
};

export default SellCard;
