import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.css";
import searchIcon from "../../assets/Search.svg";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && query.trim()) {
      navigate(`/search-results?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className={styles.searchBarContainer}>
      <img src={searchIcon} alt="Search Icon" className={styles.searchIcon} />
      <input
        type="text"
        placeholder="Search"
        className={styles.searchInput}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchBar;
