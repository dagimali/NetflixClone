/** @format */
// import axios from "./axios";
// API key: 729454e039111ff160fff73f6d91e311
// Example request:      https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=729454e039111ff160fff73f6d91e311
const API_KEY = "729454e039111ff160fff73f6d91e311";

const requests = {
  fetchTrending: `/trending/all/day?with_networks=213&api_key=${API_KEY}`,
  fetchNetflixOriginal: `/discover/tv?with_networks=213&api_key=${API_KEY}`,
  fetchTopRatedMovie: `/movie/top_rated?with_networks=213&api_key=${API_KEY}`,
  fetchActionMovies: `/discover/movie?with_genres=28&api_key=${API_KEY}`,
  fetchComedyMovies: `/discover/movie?with_genres=35&api_key=${API_KEY}`,
  fetchHorrorMovies: `/discover/movie?with_genres=27&api_key=${API_KEY}`,
  fetchRomanceMovies: `/discover/movie?with_genres=10749&api_key=${API_KEY}`,
  fetchDocumantaries: `/discover/movie?with_genres=99&api_key=${API_KEY}`,
};
export default requests;
