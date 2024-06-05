import React from 'react';
import styles from './style/SearchInput.module.css';

const SearchInput = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Pesquisar..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className={styles.searchInput}
    />
  );
};

export default SearchInput;