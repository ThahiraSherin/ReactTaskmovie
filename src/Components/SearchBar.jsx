const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <form onSubmit={handleSearch} className="form">
      <input
        type="text"
        placeholder="Search movies..."
        className="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className="btn">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
