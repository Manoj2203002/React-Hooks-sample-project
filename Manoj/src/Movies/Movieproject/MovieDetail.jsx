// src/components/MovieDetail.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from './api'; // Import the API function

const MovieDetail = () => {
  const { id } = useParams();  // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const loadMovieDetails = async () => {
      const data = await fetchMovieDetails(id);  // Use the API function
      setMovie(data);
    };

    loadMovieDetails();
  }, [id]);  // Re-fetch when the movie ID changes

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.original_title}
        className="movie-detail-poster"
      />
      <div className="movie-detail-info">
        <h2>{movie.original_title}</h2>
        <p><strong>Overview:</strong> {movie.overview}</p>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Rating:</strong> {movie.vote_average}</p>
        <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
