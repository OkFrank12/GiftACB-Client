import { Outlet } from "react-router-dom";
import Sider from "../statics/Sider";
import { useSelector, useDispatch } from "react-redux";
import { onNewToggle } from "../global/GlobalState";
import RenderSider from "../utils/RenderSider";
import { AiOutlineMenu } from "react-icons/ai";

const LayOut = () => {
  const dispatch = useDispatch();
  const toggleIt = useSelector((state: any) => state.toggle);
  const newToggle = useSelector((state: any) => state.newToggle);

  const onToggleIt = () => {
    dispatch(onNewToggle(!newToggle));
  };

  return (
    <>
      {newToggle && <RenderSider />}
      <div className="flex relative">
        <button
          onClick={onToggleIt}
          className="hidden text-[25px] minTablet:flex absolute"
        >
          <AiOutlineMenu />
        </button>
        <div className="minTablet:hidden">
          <Sider />
        </div>
        <div className="w-full min-h-screen flex justify-end">
          <div
            className={`${
              !toggleIt ? "w-[calc(100vw-250px)]" : "w-[calc(100vw-50px)]"
            } minTablet:w-full pl-2 minTablet:pl-0 h-full`}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default LayOut;
