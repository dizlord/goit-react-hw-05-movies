import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'd913d6582005c565f61503c83ce2a5bc';

export const getTrendingMovies = async () => {
  const {data} = await axios.get(`trending/movie/week?api_key=${KEY}`);

  return data.results; 
}

export const getMovieById = async (movieId) => {
  const res = await axios.get(`movie/${movieId}?api_key=${KEY}&language=en-US`);

  return res.data;
}

export const getMovieByQuery = async (query) => {
  const res = await axios.get(`search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`);

  return res.data.results;
}

export const getActors = async (movieId) => {
  const res = await axios.get(`movie/${movieId}/credits?api_key=${KEY}&language=en-US`);

  return res.data.cast;
}

export const getReviews = async (movieId) => {
  const res = await axios.get(`movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`);

  return res.data.results;
}
