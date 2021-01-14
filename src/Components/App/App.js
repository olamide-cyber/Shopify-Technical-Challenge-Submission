import React, { useState } from "react";
import './App.css';
import SearchBar  from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Nominations from "../Nominations/Nominations";
import Omdb from "../../util/Omdb";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  const [isSearchingMovies, setIsSearchingMovies] = useState(false);

  const search = (searchTerm) => {
    setSearchTerm(searchTerm);
    setIsSearchingMovies(true);

    Omdb.search(searchTerm).then(searchResults => {
      setSearchResults(searchResults);
      setIsSearchingMovies(false);
    }).catch(error => {
      window.alert(`${error}, please search for a valid movie.`);
      setIsSearchingMovies(false);
    })
  }

  console.log('Search Results>>', searchResults);

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
        <SearchBar onSearch={search} />
        <div className="Grid">
            <SearchResults 
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
