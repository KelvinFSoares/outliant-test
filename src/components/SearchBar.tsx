import React, { FunctionComponent, useState } from 'react';

type SearchBarProps = {
  onSearch: (searchTerm: string) => void;
};

const SearchBar: FunctionComponent<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };

  const handleSearch = debounce((searchTerm) => {
    onSearch(searchTerm);
  }, 500);

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    handleSearch(searchTerm);
  };

  return (
    <div className="flex items-center py-2 w-full">
      <input
        className="appearance-none bg-white rounded border border-black w-full text-gray-700 p-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Search for keywords..."
        aria-label="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
