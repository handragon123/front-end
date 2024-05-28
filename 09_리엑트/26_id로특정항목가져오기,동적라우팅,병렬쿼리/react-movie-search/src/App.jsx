import { useState, useEffect } from 'react';
import MovieSearch from './components/MovieSearch.jsx';
import MovieTab from './components/MovieTab.jsx';
import MovieCard from './components/MovieCard.jsx';
import Pagination from './components/Pagination.jsx';
import './App.css';

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=16484246';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [title, setTitle] = useState('bbc');
  const [type, setType] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function searchMovie() {
      const response = await fetch(
        `${API_URL}&s=${title}&type=${type}&page=${page}`
      );
      const data = await response.json();
      setTotalPage(Math.ceil(data.totalResults / 10));

      const sortData = data.Search?.sort((a, b) => (a.Year > b.Year ? -1 : 1));
      setMovies(sortData);
    }
    searchMovie();
  }, [title, type, page]);

  return (
    <div className="app">
      <MovieSearch setTitle={setTitle} setType={setType} setPage={setPage} />
      <MovieTab setType={setType} />
      <div className="movie">
        {movies?.length > 0 ? (
          movies.map((movie) => <MovieCard movie={movie} key={movie.imdbID} />)
        ) : (
          <p>영화데이터 없음</p>
        )}
      </div>
      {!isNaN(totalPage) && (
        <Pagination
          totalPage={totalPage}
          limit={5}
          page={page}
          setPage={setPage}
        />
      )}
    </div>
  );
}
