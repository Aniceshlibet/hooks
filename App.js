import React from 'react';
import MovieList from './MovieList';
import Filter from './Filter';


function App() {
  return (
    <div className="app">
      <h1>Movie App</h1>
      <MovieList />
      <Filter filterTitle={'Title'} filterRating={'Rating'} handleFilter={(event) => console.log(event)} />
    </div>
  );
}

export default App;

