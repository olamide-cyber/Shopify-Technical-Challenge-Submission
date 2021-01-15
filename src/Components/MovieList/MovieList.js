import React from 'react';
import Movie from '../Movie/Movie';


const MovieList = (props) => {
    return props.movies.map(movie => {
        return <Movie
            movie={movie}
            key={movie.id}
            onAdd={props.onAdd}
            disabled={props.nominatedMovies.find(nominatedMovie => nominatedMovie.id === movie.id)}
            onRemove={props.onRemove}
            isRemoval={props.isRemoval}
        />
    });
};


export default MovieList;