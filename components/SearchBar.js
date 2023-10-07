import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchFinds = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Search by description"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button
          className="search-btn"
          type="submit"
        >Search
        </button>
      </form>
    </div>
  );
};

SearchFinds.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchFinds;
