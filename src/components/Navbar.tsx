import { Menu } from "lucide-react";
import CredIcon from "./CredIcon";
import useScreenWindowSize from "../useScreenWindowSize";

const Navbar = () => {
  const { width } = useScreenWindowSize();

  return (
    <div className="absolute top-0 pt-16 px-10 pb-0 w-full z-20 lg:pt-4 lg:px-12 backdrop-blur-xs sm:backdrop-blur-none">
      <div className="flex items-center">
        <div className="border border-stone-200 w-full sm:border-0">
          <div className="bg-black/20 p-1.5 sm:bg-transparent">
            <CredIcon large={width > 768} />
          </div>
        </div>
        <div className="border-stone-200 border p-2 ml-4">
          <Menu strokeWidth={1} color="white" size={40} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
