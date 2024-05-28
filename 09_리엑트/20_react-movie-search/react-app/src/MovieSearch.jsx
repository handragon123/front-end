import { useRef } from 'react';

export default function MovieSearch({ setTitle }) {
  const inputRef = useRef(null);

  function handleSearch() {
    setTitle(inputRef.current.value);
  }

  return (
    <div className="movie_search">
      <input
        type="text"
        ref={inputRef}
        placeholder="영화검색"
        title="영화검색"
      />
      <button type="button" onClick={handleSearch}>
        검색
      </button>
    </div>
  );
}
