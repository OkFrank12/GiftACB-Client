import { Link } from "react-router-dom";
import giftHero from "../assets/giftcard.webp";
import { BsFillGiftFill } from "react-icons/bs";

const LandingPage = () => {
  return (
    <>
      <div className="w-full h-screen relative">
        <img
          src={giftHero}
          className="w-full h-full object-cover absolute top-0"
        />
        <div className="absolute text-center w-full h-full text-white font-bold bg-[rgba(36,18,51,0.96)] flex justify-center items-center flex-col">
          <BsFillGiftFill className="text-[100px]" />
          <h1 className="text-[70px] minTablet:text-[45px]">WELCOME TO GiftACB</h1>
          <p className="w-[70%] minTablet:text-[13px] minTablet:w-[90%]">
            we are thrilled to have you here on our platform. Whether you've
            landed on our website for the first time or are a returning
            customer, we're excited to share with you the exciting world of gift
            cards and all that our platform has to offer.
          </p>
          <br />
          <br />
          <div>
            <Link
              to={`/register`}
              className="px-5 py-3 rounded hover:rounded-none bg-white text-purple-300"
            >
              Register with us
            </Link>
            <Link
              to={`/register/sign-in`}
              className="px-5 py-3 ml-5 rounded hover:rounded-none bg-white text-purple-300"
            >
              Log In
            </Link>
          </div>
          <br />
          <br />
          <div className="minTablet:text-[13px] px-2">
            Project Launched by: Ajegunle Community Bank (ACB) and designed by
            Franklin
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
