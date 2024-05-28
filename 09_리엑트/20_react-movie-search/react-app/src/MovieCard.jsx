import React from 'react';

export default function MovieCard({ movie }) {
  return (
    <div className="movie_card">
      <p>{movie.Year}</p>
      <div className="img_wrap">
        <img
          src={
            movie.Poster !== 'N/A' ? movie.Poster : 'https://placehold.co/400'
          }
          alt={movie.Title}
        />
      </div>
      <div className="txt_wrap">
        <span>{movie.Type}</span>
        <strong>{movie.Title}</strong>
      </div>
    </div>
  );
}
