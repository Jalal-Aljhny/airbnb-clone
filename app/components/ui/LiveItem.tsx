import { liveItem } from "@/app/types/type";
import Image from "next/image";

const LiveItem = ({ image, title }: liveItem) => {
  return (
    <div className="gap-3 cursor-pointer hover:bg-gray-200 hover:scale-105 duration-200 p-2 rounded-lg">
      <div className="relative w-80 h-80 rounded-t-lg overflow-hidden">
        <Image
          src={image}
          alt="LiveCard-alt"
          fill
          className="object-center object-contain"
        />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default LiveItem;
