import React from 'react';
import './SearchBar.css';
import searchLogo from './icons8-search-24.png';

const SearchBar = (props) => {

    const handleTermChange = (event) => {
        props.onSearch(event.target.value);
    }

    return (
        <div className={`search-bar ${props.className}`}>
        <h2 className="search-title">Movie Title</h2>
            <div className="search-wrapper">
                <div className="search-input-wrapper">
                    <img src={searchLogo} alt="search-logo" />
                    <input
                        className="search-input"
                        placeholder="Search for a movie to nominate"
                        type="text"
                        onChange={handleTermChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
