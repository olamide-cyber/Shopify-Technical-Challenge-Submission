import React from 'react';
import MovieList from '../MovieList/MovieList';

const SearchResults = (props) => (
    <MovieList
        className='search-results'
        title={props.searchTerm ? `Results for "${props.searchTerm}"` : 'Results'}
        isLoading={props.isSearching}
        errorMessage={props.searchError}
        onAdd={props.onAdd}
        movies={props.searchResults}
        nominatedMovies={props.nominatedMovies}
    />
);

export default SearchResults;
