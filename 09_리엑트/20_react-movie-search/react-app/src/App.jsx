import './App.css';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import MovieSearch from './MovieSearch';
import MovieTab from './MovieTab';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=cf0c92f8';

const movie = {
  Poster:
    'https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg',
  // Poster: 'N/A',
  Title: 'Italian Spiderman',
  Type: 'movie',
  Year: '2007',
  imdbID: 'tt2705436',
};
export default function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('superman');
  const [type, setType] = useState('');

  useEffect(() => {
    // 비동기 함수 선언
    async function searchMovies() {
      // await 키워드로 프라미스객체 리턴시까지 기다림
      const response = await fetch(`${API_URL}&s=${title}&type=${type}`);
      // 자바스크립트 객체로 변환 기다림
      const data = await response.json();

      // 년도별 정렬 후 데이터 넣기
      const sortData = data.Search?.sort((a, b) => (a.Year > b.Year ? -1 : 1));
      setMovies(sortData);
    }
    searchMovies();
  }, [title, type]);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <MovieSearch setTitle={setTitle} />
      <MovieTab setType={setType} />
      <div className="movie">
        {movies?.length > 0 ? (
          movies.map((movie) => <MovieCard movie={movie} key={movie.imdbID} />)
        ) : (
          <p>영화데이터 없음</p>
        )}
      </div>
    </div>
  );
}
