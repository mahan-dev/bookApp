import React, { useEffect, useRef } from "react";
import searchIcon from "../assets/searchBox/search.svg";

const SearchBox = ({ search, setSearch, searHandler }) => {
  const FormHandler = (e) => {
    e.preventDefault();
    searHandler();
  };
  return (
    <form onSubmit={FormHandler} className="flex gap-2">
      <input
        className="w-[200px] outline-none p-2 rounded-lg"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button
        type="submit"
        className="rounded-lg bg-[#d5d5d5] px-4"
        onClick={searHandler}
      >
        <img src={searchIcon} alt="" width={20} />
      </button>
    </form>
  );
};

export default SearchBox;
