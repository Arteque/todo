"use client";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Outer from "@/components/shared/Containers/Outer";
const Search = () => {
  const [searchFormOpen, setSearchFormOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Array<any>>([]);

  const openFormHandler = () => {
    setSearchFormOpen((prev) => !prev);
  };

  //Form submit handler
  const sendFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("search")?.toString();
    // reset the form
    e.currentTarget.reset();
    if (query) {
      setQuery(query);
    }
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
      <div
        className={`
          fixed inset-0 z-100 bg-background-100 pt-[15dvh] px-5
          ${
            searchFormOpen
              ? "opacity-100 pointer-events-auto top-0"
              : "opacity-0 pointer-events-none -top-20"
          } transition-all`}
      >
        <form
          id="search-form"
          role="search"
          className="mb-5"
          onSubmit={sendFormHandler}
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
              name="search"
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
        <div className="results">
          <Outer>
            {query ? (
              <p className="text-foreground-100/70 flex justify-between">
                <span>
                  Query: <strong>{query}</strong>
                </span>
                <span>
                  {results.length} item{results.length < 1 ? "" : "s"} found
                </span>
              </p>
            ) : (
              <p className="text-foreground-100/70">No search query entered.</p>
            )}
          </Outer>
        </div>
      </div>
    </>
  );
};

export default Search;
