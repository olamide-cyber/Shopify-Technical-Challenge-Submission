import React from 'react';
import Movie from '../Movie/Movie';
import Spinner from '../Spinner/Spinner';
import './MovieList.css';


const MovieList = (props) => {
    return (
      <div className="movie-list">
            <h2 className="movie-header">{props.title}</h2>
            {props.errorMessage && <p className="error-message">{props.errorMessage}</p>}
            {
                props.isLoading ?
                    (<div className="spinner"><Spinner/></div>) :
                    props.movies.map(movie => {
                        return <Movie
                            movie={movie}
                            key={movie.id}
                            onAdd={props.onAdd}
                            nominated={props.nominatedMovies.find(nominatedMovie => nominatedMovie.id === movie.id)}
                            onRemove={props.onRemove}
                            isRemoval={props.isRemoval}
                        />
                    })
            }
      </div>
    )
};

export default MovieList;