import { createBrowserRouter } from "react-router-dom";
import LayOut from "../common/LayOut";
import HomePage from "../pages/HomePage";
import LandingPage from "../pages/LandingPage";
import RegisterPage from "../pages/RegisterPage";
import SignInPage from "../pages/SignInPage";
import OtpPage from "../pages/OtpPage";
import CoverImage from "../statics/CoverImage";
import SellGiftCard from "../pages/SellGiftCard";
import TransactionHistoryPage from "../pages/TransactionHistoryPage";
import MessagePage from "../pages/MessagePage";
import PrivateRouter from "./PrivateRouter";
import BuyPop from "../utils/BuyPop";

export const MainRouter = createBrowserRouter([
  {
    path: "/home",
    element: (
      <PrivateRouter>
        <LayOut />
      </PrivateRouter>
    ),
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        element: <BuyPop />,
        path: "/home/buy/:_id/:userID",
        index: true,
      },
      {
        element: <SellGiftCard />,
        path: "/home/sell",
        index: true,
      },
      {
        element: <TransactionHistoryPage />,
        path: "/home/history",
        index: true,
      },
    ],
  },
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/register",
    element: <CoverImage />,
    children: [
      {
        index: true,
        element: <RegisterPage />,
      },
      {
        path: "/register/sign-in",
        element: <SignInPage />,
        index: true,
      },
      {
        path: "/register/:token/verified",
        element: <SignInPage />,
        index: true,
      },
      {
        path: "/register/:token/first-process",
        element: <OtpPage />,
        index: true,
      },
      {
        path: "/register/otp",
        element: <OtpPage />,
        index: true,
      },
    ],
  },
  {
    path: "/message",
    element: <MessagePage />,
  },
]);
