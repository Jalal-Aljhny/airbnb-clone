"use client";
import {
  MagnifyingGlassCircleIcon,
  UsersIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; //

const SearchBar = ({
  placeHolder,
  preventInput,
}: {
  placeHolder?: string;
  preventInput?: boolean;
}) => {
  const [input, setInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfGuests, setNumOfGuests] = useState(1);

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  };
  return (
    <>
      <div className="flex items-center md:border-2 shadow-sm rounded-full p-2">
        <input
          type="text"
          placeholder={placeHolder || "Start your search"}
          className="text-sm text-gray-600 placeholder-gray-400 flex-grow pl-4 bg-transparent outline-none"
          value={input}
          onChange={(e) => {
            setInput(e.currentTarget.value);
          }}
          disabled={preventInput}
        />
        <MagnifyingGlassCircleIcon className="hidden md:inline-flex h-8 bg-white text-red-400 rounded-full cursor-pointer active:scale-95 size-8" />
      </div>
      {input.length > 0 ? (
        <div className="absolute top-[120%] left-[50%] translate-x-[-50%] text-center overflow-hidden rounded-2xl shadow-lg bg-white">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            rangeColors={["#f87171"]}
            minDate={new Date()}
          />
          <div className="flex items-center border-b p-2">
            <h3 className="text-2xl font-semibold flex-grow text-left">
              Number of Guests :
            </h3>
            <UsersIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              min={1}
              value={numOfGuests}
              onChange={(e) => {
                setNumOfGuests(Number(e.target.value));
              }}
            />
          </div>
          <div className="flex justify-around items-start p-2">
            <button
              type="button"
              className="text-gray-500 py-2 px-6 font-bold text-sm hover:bg-gray-200 duration-200 rounded-2xl"
              onClick={() => {
                setInput("");
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              className="text-gray-500 py-2 px-6 font-bold text-sm hover:bg-gray-200 duration-200 rounded-2xl"
              onClick={() => {
                setNumOfGuests(1);
                setStartDate(new Date());
                setEndDate(new Date());
              }}
            >
              Clear
            </button>
            <Link
              href={{
                pathname: "/search",
                search: `?location=${input}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&numOfGuests=${numOfGuests}`,
              }}
              onClick={() => setInput("")}
              className="text-red-400 py-2 px-6 font-bold text-sm  hover:bg-red-100 duration-200 rounded-2xl"
            >
              Search
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SearchBar;
