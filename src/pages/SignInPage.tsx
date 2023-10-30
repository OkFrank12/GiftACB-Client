import { Link, useNavigate, useParams } from "react-router-dom";
import { BsFillShieldLockFill } from "react-icons/bs";
import { TbMailFilled } from "react-icons/tb";
import Descriptor from "../statics/Descriptor";
import Swal from "sweetalert2";
import { loginAPI, verifyAPI } from "../api/authAPI";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Loader from "../utils/Loader";
import { useDispatch } from "react-redux";
import { onUserState } from "../global/GlobalState";
import { jwtDecode } from "jwt-decode";

const SignInPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { token }: any = useParams();
  const navigate = useNavigate();
  const schema = yup.object({
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

    loginAPI(data).then((res: any) => {
      if (res) {
        Swal.fire({
          icon: "success",
          title: "Welcome 🚀🚀🚀",
          text: "We are pleased to have you",
          timerProgressBar: true,
          showConfirmButton: false,
          iconColor: "dodgerblue",
          timer: 4000,
        }).then(() => {
          navigate("/home");
          setLoading(false);
          const decode: any = jwtDecode(res);
          dispatch(onUserState(decode.id));
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "An error occured",
          text: "This might be due to the following reasons: You have not been verified, wrong credentials or network connectivity issues.",
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

  useEffect(() => {
    if (token) {
      verifyAPI(token);
    }
  }, []);
  return (
    <>
      {loading && <Loader />}
      <div className="h-full w-[65%] miniLapTop:w-[80%] minTablet:flex-col tablet:w-full flex justify-between bg-white">
        <Descriptor
          title="CHANGE THE CONCEPT OF AJEGUNLE GIFTS PERSPECTIVE"
          describe="We are glad to see you again! We've got exciting news for you"
        />
        <form
          onSubmit={onHandleSubmit}
          className="w-[50%] phone:text-[13px] minTablet:w-full minTablet:pt-5 flex flex-col justify-between pt-16 phone:px-5 px-12 h-full"
        >
          <div>
            <p className="font-bold text-[25px]">Log In</p>
            <span>
              New to GiftACB?{" "}
              <Link
                to={`/register`}
                className="text-purple-400 hover:text-purple-500"
              >
                Sign Up
              </Link>
            </span>
            <div
              className={`mt-16 minTablet:mt-5 w-full text-purple-400 placeholder:text-gray-400 ${
                errors.email?.message
                  ? "border-b-2 border-red-500"
                  : "border-b-2"
              } flex`}
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
              className={`${
                errors.password?.message
                  ? "border-b-2 border-red-500"
                  : "border-b-2"
              } mt-12 minTablet:mt-5 w-full text-purple-400 placeholder:text-gray-400 flex`}
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
              <p>Remember Me</p>
            </div>
            <button
              type="submit"
              className="px-10 minTablet:mb-2 py-3 bg-purple-400 hover:bg-purple-500 text-white mt-5"
            >
              Log In
            </button>
            <p className="mt-8 text-purple-500">Forgot Password?</p>
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

export default SignInPage;
