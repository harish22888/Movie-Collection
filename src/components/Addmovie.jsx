import { useLocation } from "react-router-dom";
import './Addmovie.css'
import {ChevronLeft, } from 'lucide-react'
import {Link} from 'react-router-dom'
import { useMovieContext } from "../context/MovieContext";


const AddMovie = () => {
  const { addMovies, removeMovie } = useMovieContext();

  return (
    <div>
       <Link to='/' className="movie-back"><ChevronLeft className="back-icon" />back to home</Link>
      {addMovies.map((movie) => (
        <div key={movie.id} className="add-movie">
         
<img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="movie-poster-add"
      />
       <h3>{movie.title}</h3>
          <button onClick={() => removeMovie(movie.id)} className="remove-btn">
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default AddMovie;

