import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers = {
  accept: 'application/json',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MWU5OGVkNjRhOTMyNTViMWE1OGRkYTBjMmQ3ZjgyZCIsIm5iZiI6MTY4ODEzNTI2MS40ODgsInN1YiI6IjY0OWVlNjVkMDkxZTYyMDEwYzExYTc1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a3L17ajXIWbEuURTA8EQUPauHRGZSTBkQ0zYI6QS9vI',
}
axios.defaults.params={
  language: 'en-US',
}


export const getTrendingMovies = async () => {
  const { data } = await axios.get('/trending/movie/day');
  return data.results;
};

export const searchMovie = async (filter) => {
  axios.defaults.params = {query: filter, include_adult: 'false', page: '1'};
  const { data } = await axios.get(`/search/movie`);

  return data.results;
};

export const fetchMovieDetails = async (movie_id) => {
  const { data } = await axios.get(`/movie/${movie_id}`);

  return data;
};

export const fetchMovieCast = async (movie_id) => {
  const { data } = await axios.get(`/movie/${movie_id}/credits`);
  
  return data.cast;
};

export const fetchMovieReviews = async (movie_id) => {
  axios.defaults.params = {page: '1'};
  const { data } = await axios.get(`/movie/${movie_id}/reviews`);
  
  return data.results;
};
