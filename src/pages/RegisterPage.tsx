import { Link, useNavigate } from "react-router-dom";
import { BsFillPersonFill, BsFillShieldLockFill } from "react-icons/bs";
import { TbMailFilled } from "react-icons/tb";
import Descriptor from "../statics/Descriptor";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { registerAPI } from "../api/authAPI";
import Swal from "sweetalert2";
import Loader from "../utils/Loader";

const RegisterPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const schema = yup.object({
    userName: yup.string().required(),
    email: yup.string().email().trim().lowercase().required(),
    password: yup.string().required(),
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

    registerAPI(data).then((res: any) => {
      if (res) {
        Swal.fire({
          icon: "success",
          title: "A Mail has been sent to your account",
          text: "Visit this mail in other to continue your registeration process",
          timerProgressBar: true,
          showConfirmButton: false,
          iconColor: "purple",
          timer: 4000,
        }).then(() => {
          navigate("/message");
          setLoading(false);
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "A Problem occured",
          text: "This might be as a result of wrong credentials or network connectivity issues",
          timerProgressBar: true,
          showConfirmButton: false,
          iconColor: "crimson",
          timer: 4000,
        }).then(() => {
          setLoading(false);
        });
      }
    });
  });
  return (
    <>
      {loading && <Loader />}
      <div className="h-full w-[65%] miniLapTop:w-[80%] minTablet:flex-col tablet:w-full flex justify-between bg-white">
        <Descriptor
          title="REGISTER WITH US TO GET THE BEST TOUCH OF GIFT CARDS"
          describe="Join us today and explore the world of giftings in our mesmerizing
            platform."
        />
        <form
          onSubmit={onHandleSubmit}
          className="w-[50%] phone:text-[13px] minTablet:w-full flex flex-col justify-between minTablet:pt-5 pt-16 phone:px-5 px-12 h-full"
        >
          <div>
            <p className="font-bold text-[25px]">Sign Up</p>
            <span>
              Already a member?{" "}
              <Link
                to={`/register/sign-in`}
                className="text-purple-400 hover:text-purple-500"
              >
                Log in
              </Link>
            </span>
            <div
              className={`mt-16 w-full text-purple-400 ${
                errors.userName?.message
                  ? "border-b-2 border-red-500"
                  : "border-b-2"
              } placeholder:text-gray-400  flex`}
            >
              <input
                type="text"
                {...register("userName")}
                placeholder="User Name"
                className="flex outline-none h-[40px] flex-1"
              />
              <BsFillPersonFill className="text-[25px]" />
            </div>
            <div
              className={`mt-12 ${
                errors.email?.message
                  ? "border-b-2 border-red-500"
                  : "border-b-2"
              } minTablet:mt-5 w-full text-purple-400 placeholder:text-gray-400 flex`}
            >
              <input
                type="email"
                {...register("email")}
                placeholder="Email Address"
                className="flex outline-none h-[40px] flex-1"
              />
              <TbMailFilled className="text-[25px]" />
            </div>
            <div
              className={`mt-12 minTablet:mt-5 ${
                errors.email?.message
                  ? "border-b-2 border-red-500"
                  : "border-b-2"
              } w-full text-purple-400 placeholder:text-gray-400 flex`}
            >
              <input
                type="password"
                {...register("password")}
                placeholder="Type Password"
                className="flex outline-none h-[40px] flex-1"
              />
              <BsFillShieldLockFill className="text-[25px]" />
            </div>
            <div className="flex items-center mt-5">
              <input
                type="checkbox"
                className="w-[15px] h-[15px] accent-[rgb(192,132,252)] mr-2 cursor-pointer"
              />
              <p>
                I agree to the <span className="text-purple-400">Terms</span>{" "}
                and <span className="text-purple-400">Privacy</span>
              </p>
            </div>
            <button
              type="submit"
              className="px-10 py-3 minTablet:mb-10 bg-purple-400 hover:bg-purple-500 text-white mt-5"
            >
              Create Account
            </button>
          </div>
          <div className="mb-5 minTablet:mb-1 text-slate-400">
            Copyright © 2023 <span className="text-purple-500">GiftACB</span>.
            All Rights Reserved.
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
