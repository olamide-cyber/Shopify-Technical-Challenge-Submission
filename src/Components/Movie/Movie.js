import React from 'react';
import './Movie.css';


const Movie = (props) => {
    const title = props.movie.title;
    const year = props.movie.year;
    const img = props.movie.img;

    const addMovie = () => {
        let movie = props.movie;
        props.onAdd(movie);
    }

    const removeMovie = () => {
        let movie = props.movie;
        props.onRemove(movie);
    }

    const renderAction = () => {
        if (props.isRemoval) {
            return <button className="movie-action" onClick={removeMovie}>Remove</button>;
        } else {
            return <button disabled={props.disabled} className="movie-action" onClick={addMovie}>Nominate</button>;
        }
    }

    return(
        <div className="movie">
            <img className="movie-image" src={img} alt={title} />
            <p>{title} ({year})</p>
            {renderAction()}
        </div>
    );
};

export default Movie;