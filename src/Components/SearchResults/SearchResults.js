import React from 'react';
import MovieList from '../MovieList/MovieList';
import Spinner from '../Spinner/Spinner';
import './SearchResults.css';


const SearchResults = (props) => {
    return (
        <div className="search-results">
            {
                props.searchTerm ? <h2>Results for "{props.searchTerm}"</h2> : <h2>Results</h2>
            }
            {props.searchError}
            {
                props.isSearching ? (<div className="spinner"><Spinner/></div>) : (
                    <MovieList
                        movies={props.searchResults}
                        onAdd={props.onAdd}
                        nominatedMovies={props.nominatedMovies}
                    />
                  )
            }
        </div>
    );
};

export default SearchResults;