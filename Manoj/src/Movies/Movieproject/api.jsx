// src/api.js

import axios from 'axios';

const ApiKey = '78330030cd268670f70e286b5c5a1321';
const Base_url = 'https://api.themoviedb.org/3';

// Function to fetch popular movies
export const fetchPopularMovies = async (page = 1) => {
  try {
    const response = await axios.get(`${Base_url}/movie/popular`, {
      params: {
        api_key: ApiKey,
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return { results: [] };
  }
};

// Function to fetch movie details by ID
export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${Base_url}/movie/${id}`, {
      params: {
        api_key: ApiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};
