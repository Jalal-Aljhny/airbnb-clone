import { outDoorsType } from "@/app/types/type";
import Image from "next/image";
import Link from "next/link";

const GreatestOutdoors = ({
  image,
  title,
  description,
  linkText,
}: outDoorsType) => {
  return (
    <div className=" relative section">
      <div className=" relative h-96 min-w-[300px]">
        <Image
          src={image}
          alt="GreatestOutdoors-img"
          fill
          className="rounded-2xl object-center object-cover "
        />
      </div>
      <div className="absolute top-32 left-12  bg-gray-200 bg-opacity-20 p-4 rounded-xl">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <Link
          href={"/"}
          className="text-sm px-4 py-2 rounded-lg mt-5 block font-bold text-white bg-gray-900 duration-300 hover:text-gray-900 hover:bg-white"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default GreatestOutdoors;
