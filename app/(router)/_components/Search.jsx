import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div>
      <div class="relative ml-auto inline-block mx-auto">
        <span class="absolute left-3 top-3 text-sm text-gray-600 ">
          <FaSearch />
        </span>
        <input
          type="text"
          placeholder="Search..."
          className=" w-full rounded-3xl pl-11 pr-2 py-2 focus:outline-none bg-sky-500 text-sm text-slate-900 shadow-sm shadow-slate-300 "
        />
      </div>
    </div>
  );
};

export default Search;
