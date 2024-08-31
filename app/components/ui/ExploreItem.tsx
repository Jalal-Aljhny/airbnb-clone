import { exploreItem } from "@/app/types/type";
import Image from "next/image";

const ExploreItem = ({ image, distance, location }: exploreItem) => {
  return (
    <div className="flex items-center m-2 mt-5 gap-3 cursor-pointer hover:bg-gray-200 hover:scale-105 duration-200 p-2 rounded-md">
      <div className="relative w-16 h-16 overflow-hidden object-center rounded-lg">
        <Image src={image} alt="explore-photo" fill />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default ExploreItem;
