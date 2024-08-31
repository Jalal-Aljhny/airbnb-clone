import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full  h-[300px] md:h-[400px] lg:h-[500px]">
      <Image
        src={
          "https://images.unsplash.com/photo-1514897575457-c4db467cf78e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="banner-image"
        fill
        className="object-cover object-top"
      />
      <div className="absolute top-1/2 w-fit left-1/2 translate-x-[-50%] text-center bg-gray-300 bg-opacity-5 p-4 rounded-xl ">
        <p className="text-sm md:text-lg text-white mb-2 font-bold">
          Not sure where to go? Perfect .
        </p>
        <button className="text-purple-500 bg-white px-8 py-4 shadow-md rounded-full font-bold hover:bg-purple-500 hover:text-white duration-300">
          I am flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
