import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
function MovieList() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  useEffect(() => {
    fetch('/api/movies')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  const handleFilter = (event) => {
    setFilterTitle(event.target.value);
    setFilterRating(event.target.value);
  };

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div className="movie-list">
      <h1>Movies</h1>
      <form>
        <input type="text" value={filterTitle} onChange={(event) => handleFilter(event)} placeholder="Search by title" />
        <input type="number" value={filterRating} onChange={(event) => handleFilter(event)} placeholder="Search by rating" />
        <button type="submit">Filter</button>
      </form>
      <ul>
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
      <form>
        <button type="button" onClick={() => handleAddMovie({ title: 'New Movie', description: ' Movie', posterURL: 'https://via.placeholder.com/300x450', rating: 0 })}>Add Movie</button>
      </form>
    </div>
    
  );
}

export default MovieList;
