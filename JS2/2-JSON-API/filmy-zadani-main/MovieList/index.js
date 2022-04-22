import { Movie } from '../Movie/index.js';

export const MovieList = (props) => {
  const {movies} = props
  let result ='<ul class="movie-list">'
  for (let i = 0; i < movies.length; i = i + 1) {
   result += Movie(movies[i]);
}
result += '</ul>'
return result
}