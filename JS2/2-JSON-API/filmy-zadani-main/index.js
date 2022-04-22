
import { MovieList} from './MovieList/index.js'

/* const zobrazFilmy = (movies) => {
  for (let i = 0; i < movies.length; i = i + 1) {
  document.querySelector('.movie-list').innerHTML += Movie(movies[i]);
}
} */
const genre = ["drama", "krimi" , "..."]
const genreS = document.querySelector("#genre")
const orderS = document.querySelector("#order")

const zobrazFilmy = () => {
  const gendre = genreS.value
  const order = orderS.value

  let url = `https://apps.kodim.cz/daweb/trening-api/apis/movies`
  if (genre !== '--všechny filmy--') {
    url += `?genre=${genre}`
  }
  fetch(url)
    .then((response) => response.json())
    .then((movieList) => (document.querySelector("#app").innerHTML = MovieList({ movies: movieList })));
}

genreS.addEventListener("change", zobrazFilmy);
orderS.addEventListener("change", zobrazFilmy);
zobrazFilmy()
/* 

const movies = [
  {
    title: 'Vykoupení z věznice Shawshank',
    url: 'https://www.csfd.cz/film/2294-vykoupeni-z-veznice-shawshank',
    posterUrl:
      'https://image.pmgstatic.com/cache/resized/w360/files/images/film/posters/162/505/162505167_735db9.jpg',
    year: 1994,
  },
  {
    title: 'Forrest Gump',
    url: 'https://www.csfd.cz/film/10135-forrest-gump',
    posterUrl:
      'https://image.pmgstatic.com/cache/resized/w360/files/images/film/posters/158/988/158988468_acc7b5.jpg',
    year: 1994,
  },
  {
    title: 'Zelená míle',
    url: 'https://www.csfd.cz/film/2292-zelena-mile',
    posterUrl:
      'https://image.pmgstatic.com/cache/resized/w360/files/images/film/posters/164/445/164445478_1ed513.jpg',
    year: 1999,
  },
]; */ 




