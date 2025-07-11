import axios from 'axios';

const API_KEY = '70c0eba5';
const BASE_URL = 'https://www.omdbapi.com/';

export const searchMovies = (query) =>
  axios.get(BASE_URL, {
    params: {
      s: query,
      apikey: API_KEY
    }
  });

export const getMovieDetails = (id) =>
  axios.get(BASE_URL, {
    params: {
      i: id,
      apikey: API_KEY
    }
  });
