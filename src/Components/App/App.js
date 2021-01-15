import React, { useState } from "react";
import './App.css';
import SearchBar  from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Nominations from "../Nominations/Nominations";
import Omdb from "../../util/Omdb";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  const [isSearchingMovies, setIsSearchingMovies] = useState(false);

  const [searchError, setSearchError] = useState(null);

  const search = (searchTerm) => {
    if (!searchTerm) return;

    setSearchTerm(searchTerm);
    setIsSearchingMovies(true);

    Omdb.search(searchTerm).then(searchResults => {
      setSearchResults(searchResults);
      setIsSearchingMovies(false);
      setSearchError(null);
    }).catch(error => {
      setSearchError(`${error} Please search for a valid movie.`);
      setIsSearchingMovies(false);
    })
  }

  const [nominatedMovies, setNominatedMovies] = useState(() => {
    const movies = localStorage.getItem('nominatedMovies');
      if (movies) {
        return JSON.parse(movies);
      }
      return [];
  });

  const addMovie = (movie) => {
    if (nominatedMovies.length === 5) {
      window.alert('You can only nominate five movies, Thanks!');
      return;
    }
    if (nominatedMovies.find(savedMovie => savedMovie.id === movie.id)) {
      return;
    } else {
      const movies = [...nominatedMovies, movie];
      setNominatedMovies(movies);
      localStorage.setItem('nominatedMovies', JSON.stringify(movies));
    }
  }

  const removeMovie = (movie) => {
    let movies = nominatedMovies;
    movies = movies.filter(currentMovie => currentMovie.id !== movie.id);
    setNominatedMovies(movies);
    localStorage.setItem('nominatedMovies', JSON.stringify(movies));
  }

  return (
    <div className="App">
        <h1 className="App-header" >The Shoppies</h1>
        <SearchBar className="App-search-bar" onSearch={search} />
        <div className="Grid">
            <SearchResults 
                searchError={searchError}
                searchResults={searchResults} 
                onAdd={addMovie}
                nominatedMovies={nominatedMovies}
                searchTerm={searchTerm}
                isSearching={isSearchingMovies}
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
