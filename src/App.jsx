import "./App.css";
import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchForm from "./SearchForm";
import ApiID from "./Api";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [apiKey, setApiKey] = useState(0);

  const API_URL = `https://www.omdbapi.com?apikey=${apiKey}`;

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const { Search } = await res.json();
    setMovies(Search);
  };

  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <ApiID
        value={apiKey}
        onChange={(event) => setApiKey(event.target.value)}
      />
      <SearchForm
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        onClick={() => searchMovies(searchTerm)}
      />
      {movies && movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            return <MovieCard key={movie.imdbID} movie={movie} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies Found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
