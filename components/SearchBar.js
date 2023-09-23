// import React, { useState } from 'react';
// import { useRouter } from 'next/router';
// import { Form, FormControl } from 'react-bootstrap';

// function SearchFinds() {
//   const [searchInput, setSearchInput] = useState('');
//   const router = useRouter();

//   const handleChange = (e) => {
//     setSearchInput(e.target.value.toLowerCase());
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (setSearchInput !== '') router.push(`/search/${searchInput}`);
//     setSearchInput('');
//   };

//   return (
//     <div className="search-bar">
//       <Form onSubmit={handleSubmit}>
//         <FormControl type="text" placeholder="Search by description" onChange={handleChange} value={searchInput} />
//       </Form>
//     </div>
//   );
// }

// export default SearchFinds;

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
