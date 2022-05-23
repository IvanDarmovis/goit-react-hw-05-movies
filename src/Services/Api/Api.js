import axios from 'axios';

const KEY = 'c650d1c0c307d1ff6855b3a117a6cfa1';

export default class Api {
  constructor() {
    this.key = KEY;
  }

  getPopular() {
    return axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${this.key}`
    );
  }

  getMovieDetail(id) {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${this.key}`
    );
  }

  getCredit(id) {
    return axios.get(`
https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.key}`);
  }

  getReviews(id) {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${this.key}`
    );
  }

  getMovie(query) {
    return axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.key}&query=${query}&include_adult=false`
    );
  }
}
