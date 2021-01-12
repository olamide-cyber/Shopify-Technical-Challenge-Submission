import React, { useState } from "react";
import './App.css';
import SearchBar  from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Nominations from "../Nominations/Nominations";
import Omdb from "../../util/Omdb";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  const search = (searchTerm) => {
    setSearchTerm(searchTerm);
    Omdb.search(searchTerm).then(searchResults => {
      setSearchResults(searchResults);
      console.log("Results>>", searchResults)
    }).catch(message => {
      console.log('Error message>>', message.Error);
    })
  }

  const [nominatedMovies, setNominatedMovies] = useState([]);

  const addMovie = (movie) => {
    let movies = nominatedMovies;
    if (movies.find(savedMovie => savedMovie.id === movie.id)) {
      return;
    } else {
      movies.push(movie);
      console.log("movies>>", movies);
      setNominatedMovies(movies);
      console.log("Nominated", nominatedMovies)
    }
  }

  const removeMovie = (movie) => {
    let movies = nominatedMovies;
    movies = movies.filter(currentMovie => currentMovie.id !== movie.id);
    setNominatedMovies(movies);
  }

  return (
    <div className="App">
        <h1 className="App-header" >The Shoppies</h1>
        <SearchBar onSearch={search} />
        <div className="Grid">
            <SearchResults 
                searchResults={searchResults} 
                onAdd={addMovie}
                nominatedMovies={nominatedMovies}
                searchTerm={searchTerm}
            />
            <Nominations
                nominatedMovies={nominatedMovies}
                onRemove={removeMovie}
            />
        </div>
    </div>
  );
}

export default App;
