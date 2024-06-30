import { ReactNode } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { AiFillControl } from "react-icons/ai";
import { FaFolderOpen } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";

interface ILayout {
  children: ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="h-full">
      <div className="bg-black h-[90%] w-full p-4">{children}</div>
      <div className="bg-primary h-[10%] w-full flex justify-evenly items-center">
        <Link to={"/"}>
          <IoHomeSharp size={65} color="white" />
        </Link>
        <Link to={"/controls/print-settings"}>
          <AiFillControl size={65} color="white" />
        </Link>
        <Link to={"/folders"}>
          <FaFolderOpen size={65} color="white" />
        </Link>
        <Link to={"/settings"}>
          <IoSettings size={65} color="white" />
        </Link>
      </div>
    </div>
  );
};

export default Layout;
