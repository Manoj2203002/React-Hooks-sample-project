// src/components/Home.js

import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { fetchPopularMovies } from './api'; 

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchPopularMovies(currentPage);  // Use the API function
      setMovies(data.results);
    };

    loadMovies();
  }, [currentPage]); // Re-fetch when the current page changes

  return (
    <div className="movie-container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Home;
