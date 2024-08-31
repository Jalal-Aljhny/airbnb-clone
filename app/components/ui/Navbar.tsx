import {
  GlobeAltIcon,
  UserCircleIcon,
  Bars3Icon,
} from "@heroicons/react/16/solid";

const Navbar = () => {
  return (
    <div className="flex space-x-4 items-center justify-end text-gray-400">
      <p className="hidden lg:inline cursor-pointer">Become a host</p>
      <GlobeAltIcon className="h-6 cursor-pointer" />
      <div className="flex space-x-2 border-2 rounded-full p-1">
        <Bars3Icon className="h-6" />
        <UserCircleIcon className="h-6" />
      </div>
    </div>
  );
};

export default Navbar;
