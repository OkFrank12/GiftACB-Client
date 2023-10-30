import Swal from "sweetalert2";
import otpIc from "../assets/otp-icon.png";
import Descriptor from "../statics/Descriptor";
import { enterOTPAPI } from "../api/authAPI";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Loader from "../utils/Loader";

const OtpPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { token }: any = useParams();
  const navigate = useNavigate();
  const schema = yup.object({
    otp: yup.string().required(),
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

    enterOTPAPI(token, data).then((res: any) => {
      if (res) {
        Swal.fire({
          icon: "success",
          title: "Go and verify your account",
          text: "Visit mail in other to complete your registeration process",
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
          title: "OTP Error",
          text: "This might be as a result of wrong OTP or network connectivity issues",
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
          title="WE CARE ABOUT YOUR ACCOUNT SECURITY"
          describe="This is a finance driven platform. Secured Account is a priority."
        />
        <form
          onSubmit={onHandleSubmit}
          className="w-[50%] phone:text-[13px] minTablet:w-full minTablet:items-center minTablet:text-center flex flex-col minTablet:pt-5 phone:px-5 justify-between pt-16 px-12 h-full"
        >
          <div className="minTablet:flex flex-col items-center">
            <p className="font-bold text-[25px]">Two-Step Verification</p>
            <p>Enter the verification code we sent to</p>
            <p>*****@gmail.com</p>
            <img src={otpIc} className="my-10" />
            <input
              type="text"
              placeholder="otp"
              {...register("otp")}
              maxLength={6}
              className={`flex ${
                errors.otp?.message ? "outline-red-500" : "outline-none"
              } text-center w-[145px] h-[50px] text-purple-500 flex-1 text-[35px]`}
            />
            <button
              type="submit"
              className="px-10 py-3 bg-purple-400 hover:bg-purple-500 text-white mt-5"
            >
              Verify
            </button>
            <p className="mt-8 text-purple-500">Resend Code</p>
          </div>
          <div className="mb-5 text-slate-400">
            Copyright © 2023 <span className="text-purple-500">GiftACB</span>.
            All Rights Reserved.
          </div>
        </form>
      </div>
    </>
  );
};

export default OtpPage;
