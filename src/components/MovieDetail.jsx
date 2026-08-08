

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import{Link} from 'react-router-dom'
import "./MovieDetail.css";
import {ChevronLeft } from 'lucide-react'

import { useMovieContext } from "../context/MovieContext";

const MovieDetail = () => {
    const { addMovie } = useMovieContext();
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovie();
  }, [id]);

  const fetchMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=183928bab7fc630ed0449e4f66ec21bd`
    );

    const data = await response.json();
    setMovie(data);
  };

  if (!movie) {
    return <h1 className="loading">Loading...</h1>;
  }

  return (
    <div className="movie-detail">
 <Link to='/' className="movie-back"><ChevronLeft className="back-icon" />back to home</Link>
      {/* <div
        className="backdrop"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      ></div> */}

      {/* <div className="overlay"></div> */}

      <div className="detail-container">

        <div className="left">

   
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="poster"
          />
                <a href={`https://www.themoviedb.org/movie/${movie.id}`} target='_blank' className="detail-button"> 
                <button>More Details..!</button>
          </a>

        </div>

        <div className="right">

          <h1 className="movie-title">{movie.title}</h1>

          <div className="badges">
            <span>Rating: {movie.vote_average.toFixed(1)}⭐</span>
            <span>Date: {movie.release_date}</span>
           
          </div>

         <div className="overview">
           <h2>Overview</h2>

          <p>{movie.overview}</p>
         </div>

          <div className="info">

            <p>
              <strong>Language :</strong> {movie.original_language}
            </p>

            <p>
              <strong>Status :</strong> {movie.status}
            </p>

            <p>
              <strong>Budget :</strong> ${movie.budget}
            </p>

            <p>
              <strong>Revenue :</strong> ${movie.revenue}
            </p>

          </div>

          <h3>Genres</h3>

          <div className="genres">

            {movie.genres.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}

          </div>

        </div>

      </div >
     <Link to='/addmovie'><div className="btn">
       <button onClick={() => addMovie(movie)} className="add-btn">
  Add Movie
</button>
     </div></Link>

    </div>
  );
};

export default MovieDetail;


