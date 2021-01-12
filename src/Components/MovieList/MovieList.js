import React from 'react';
import './MovieList.css';
import Movie from '../Movie/Movie';


function MovieList(props) {
    return(
        <div className="MovieLIst">
            {
                props.movies.map(movie => {
                    return (<Movie 
                                movie={movie}
                                key={movie.id}
                                onAdd={props.onAdd}
                                disabled={props.nominatedMovies.find(nominatedMovie => nominatedMovie.id === movie.id)}
                                onRemove={props.onRemove}
                                isRemoval={props.isRemoval}
                            />)
                })
            }
        </div>
    );
};

export default MovieList;