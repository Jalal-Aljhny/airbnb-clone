import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/airbnb-horizontal-logo.png";
import SearchBar from "../ui/SearchBar";
import Navbar from "../ui/Navbar";

const Header = ({
  placeHolder,
  preventInput,
}: {
  placeHolder?: string;
  preventInput?: boolean;
}) => {
  return (
    <header className=" sticky top-0 bg-white z-50 shadow-md py-2 md:py-4">
      <div className="container grid grid-cols-3 relative">
        <Link href={"/"} className="flex items-center h-10 my-auto">
          <Image
            src={"/airbnb-horizontal-logo.png"}
            width={150}
            height={75}
            alt="logo-img"
            className="object-contain object-left "
          />
        </Link>
        <SearchBar placeHolder={placeHolder} preventInput={preventInput} />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
