import { useSelector } from "react-redux";
import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

const PrivateRouter: FC<PropsWithChildren> = ({ children }) => {
  const giftUser = useSelector((state: any) => state.giftUser);

  return (
    <>
      {giftUser ? <div>{children}</div> : <Navigate to={`/`} />}
      this
    </>
  );
};

export default PrivateRouter;
