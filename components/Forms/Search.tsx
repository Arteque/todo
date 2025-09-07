"use client";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
const Search = () => {
  const [searchFormOpen, setSearchFormOpen] = useState<boolean>(true);

  const openFormHandler = () => {
    setSearchFormOpen((prev) => !prev);
  };

  return (
    <>
      <button
        className="btn btn-square btn-ghost lg:hidden"
        aria-controls="search-form"
        aria-expanded="false"
        title="Search"
        onClick={openFormHandler}
      >
        <SearchIcon />
      </button>
      <form
        className={`
          fixed inset-0 z-100 flex items-center justify-center bg-background-100
          ${
            searchFormOpen
              ? "opacity-100 pointer-events-auto top-0"
              : "opacity-0 pointer-events-none -top-20"
          } transition-all`}
        id="search-form"
        role="search"
      >
        <button
          className="absolute top-1 right-1 text-3xl"
          onClick={openFormHandler}
          aria-label="Close search form"
          title="Close search form"
          type="button"
        >
          <FaTimes className="fill-foreground-100/70" />
        </button>
        <div className="relative">
          <input
            type="text"
            required={searchFormOpen}
            placeholder="Search..."
            className="block h-[2rem] w-full rounded border border-foreground-100/60 bg-base-200 px-4 py-3 pr-10 text-lg focus:border-primary focus:outline-none focus:ring-0"
          />
          <button
            className="btn opacity-50 absolute right-2 top-1/2 -translate-y-1/2 rounded-full btn-ghost btn-square"
            type="submit"
            aria-label="Search"
            title="Search"
          >
            <SearchIcon />
          </button>
        </div>
      </form>
    </>
  );
};

export default Search;
