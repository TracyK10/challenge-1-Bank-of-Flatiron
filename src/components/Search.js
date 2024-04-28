import React, { useState } from "react";

function Search({onSearch}) {
  const [search, setSearch] = useState("")
  // Function to handle search input changes
  function handleSearchEntry(e) {
    // Get the current value of the search input
    const searchTerm = e.target.value
    // Update the search state with the current search term
    setSearch(searchTerm)
    // Call the onSearch with the current search term
    onSearch(searchTerm)
  }
  
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearchEntry}
      />
      <i className="circular search link icon"></i>
      {}
    </div>
  );
}

export default Search;
