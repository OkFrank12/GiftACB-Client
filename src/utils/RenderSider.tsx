import { AiOutlineClose } from "react-icons/ai";
import Sider from "../statics/Sider";
import { useDispatch, useSelector } from "react-redux";
import { onNewToggle } from "../global/GlobalState";

const RenderSider = () => {
  const dispatch = useDispatch();
  const newToggle = useSelector((state: any) => state.newToggle);

  const onToggleIt = () => {
    dispatch(onNewToggle(!newToggle));
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "rgba(255, 255, 255, 0.15)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          backdropFilter: "blur(4px)",
        }}
        className="fixed w-full z-50 h-[100vh] top-0 left-0 flex"
      >
        <AiOutlineClose
          onClick={onToggleIt}
          className="absolute top-0 right-0 text-[30px] cursor-pointer"
        />
        <Sider />
      </div>
    </>
  );
};

export default RenderSider;
