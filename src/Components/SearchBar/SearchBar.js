import React, { useState } from 'react';
import './SearchBar.css';
import searchLogo from './icons8-search-24.png';

function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState('');

    const search = (event) => {
        event.preventDefault();
        props.onSearch(searchTerm);
    }

    const handleTermChange = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
        <div className="SearchBar">
            <form className="form" onSubmit={search} >
                <div className="movieTitle">Movie Title</div>
                <div className="search-wrapper">
                    <div className="search-input-wrapper">
                        <img src={searchLogo} alt="search-logo" />
                        <input 
                            className="searchInput" 
                            placeholder="Search for a movie to nominate" 
                            type="text"
                            onChange={handleTermChange}
                        />
                    </div>
                    <button 
                        disabled={searchTerm.length <= 0 ? true : false} 
                        className="searchButton" 
                        type="submit"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;