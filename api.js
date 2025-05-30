import axios from 'axios';

const API_KEY = '994052d422ae16936383fe69a96a0e92'; 
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`);
  return response.data.results;
};
