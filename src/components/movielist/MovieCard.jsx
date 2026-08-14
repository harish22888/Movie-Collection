


import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";
import { useMovieContext } from "../../context/MovieContext";

const MovieCard = ({ movie }) => {
  const { addMovie, removeMovie } = useMovieContext();

  return (
    <div className="movie-card-wrapper">

      <Link
        to={`/movie/${movie.id}`}
        className="movie-card"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="movie-poster"
        />

        <div className="movie-details">

          <h3 className="movie-details-heading">
            {movie.original_title}
          </h3>

          <div className="movie-date-rate">
            <p>{movie.release_date}</p>

            <p>
              ⭐ {movie.vote_average.toFixed(1)}
            </p>
          </div>

          <p className="movie-description">
            {movie.overview.slice(0, 100)}...
          </p>

        </div>
      </Link>

      <div className="add-remove-btn">

        <button
          className="add-btn"
          onClick={() => addMovie(movie)}
        >
          Add Movie
        </button>

        <button
          className="card-remove-btn"
          onClick={() => removeMovie(movie.id)}
        >
          Remove
        </button>

      </div>

    </div>
  );
};

export default MovieCard;




