import React from 'react';
import MovieList from '../MovieList/MovieList';
import Spinner from '../Spinner/Spinner';
import './SearchResults.css';


function SearchResults(props) {
    return (
        <div className="SearchResults">
            {
                props.isSearching ? <Spinner/> : (
                    <div className="Results">
                        {
                            props.searchTerm ? <h2>Results for "{props.searchTerm}"</h2> : <h2>Results</h2>
                        }
                        <MovieList
                            movies={props.searchResults}
                            onAdd={props.onAdd}
                            nominatedMovies={props.nominatedMovies}
                        />
                    </div>
                  )
            }
        </div>
    );
};

export default SearchResults;