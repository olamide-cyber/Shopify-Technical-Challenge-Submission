import React from 'react';
import MovieList from '../MovieList/MovieList';

const Nominations = (props) => (
    <MovieList
            title="Nominations"
            movies={props.nominatedMovies}
            onRemove={props.onRemove}
            isRemoval={true}
            nominatedMovies={props.nominatedMovies}
    />
)
  
export default Nominations;