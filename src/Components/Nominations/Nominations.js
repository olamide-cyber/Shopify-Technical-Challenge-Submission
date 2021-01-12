import React from 'react';
import './Nominations.css';
import MovieList from '../MovieList/MovieList';

function Nominations(props) {
    return(
        <div className="Nominations">
            <div className="Nomination-Results">
                <h2>Nominations</h2>
                <MovieList 
                    movies={props.nominatedMovies}
                    onRemove={props.onRemove}
                    isRemoval={true}
                    nominatedMovies={props.nominatedMovies}
                />
            </div>
        </div>
    );
};

export default Nominations;