import { SearchIcon } from "lucide-react";
const Search = () => {
  return (
    <form className="form">
      <input type="text" placeholder="Search..." />
      <button
        className="btn opacity-50"
        type="submit"
        aria-label="Search"
        title="Search"
      >
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;
