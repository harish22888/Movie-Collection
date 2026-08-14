import React from 'react'
import './Navbar.css'

import { Clapperboard, } from "lucide-react"
import { Link } from 'react-router-dom'

import { useMovieContext } from "../../context/MovieContext";
const Navbar = () => {

      // const { movieCount } = useMovieContext();
 const { movieCount, addMovies } = useMovieContext();


      
      
  return (

    <nav className='navbar'>
<Link to='/'><h1 className='nav'>MovieManiac</h1></Link>

<div className="navbar-links">
    {/* <a href="">Popular</a>
     <a href="">Top rated</a>
      <a href="">upcoming</a> */}
      <Link to="/Addmovie" className="movie-icon">
  <Clapperboard size={40} />
  <span className="count">
      {/* {movieCount > 0 && (
      <span className="movie-count">{movieCount}</span>
    )}
  */}
  {movieCount}
  </span>
</Link>
</div>

    </nav>
  )
}

export default Navbar


