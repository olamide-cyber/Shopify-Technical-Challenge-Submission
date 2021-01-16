import React from 'react';
import './Movie.css';

const Movie = (props) => {
    const title = props.movie.title;
    const year = props.movie.year;
    const img = props.movie.img;

    const addMovie = () => {
        let movie = props.movie;
        props.onAdd(movie);
    };

    const removeMovie = () => {
        let movie = props.movie;
        props.onRemove(movie);
    };

    const renderAction = () => {
        if (props.isRemoval) {
            return <button className="movie-action remove" onClick={removeMovie}>Remove</button>;
        } else {
            return <button
                disabled={props.nominated}
                className="movie-action nominate"
                onClick={addMovie}
            >
                Nominate
            </button>;
        }
    };

    return(
        <div className="movie">
            <img className="movie-image" src={img} alt={title} />
            <div className="movie-title-action">
                <span>{title} ({year})</span>
                {renderAction()}
            </div>
        </div>
    );
};

export default Movie;
