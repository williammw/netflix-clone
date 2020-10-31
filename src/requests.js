const API_KEY = '4296c14b497b17acadd5928634804c12'

const requests = {
  fetchTranding : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&language=en-US`,
  fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies : `discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies : `discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies : `discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovie : `discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries : `discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default requests