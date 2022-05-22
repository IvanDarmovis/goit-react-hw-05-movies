import axios from 'axios';

const KEY = 'c650d1c0c307d1ff6855b3a117a6cfa1';

export default class Api {
  constructor() {
    this.key = KEY;
  }

  async getPopular() {
    const arr = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${this.key}`
    );
    console.log(arr.data.results);
  }
}
