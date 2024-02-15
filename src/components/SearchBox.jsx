const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        type="search"
        placeholder="Search Robot"
        className="pa3 ba bg-lightest-blue bw2 b-green"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
