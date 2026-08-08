
import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import './MoviList.css'
import MovieCard from './MovieCard'
import FilterGroup from './FilterGroup'

const MoviList = () => {

   const [movies, setMovies] = useState([])
   const [filterMovie, setFilterMovie] = useState([])
   const [minRating, setMinRating] = useState(0)
   const [sort, setSort] = useState({
    by:"default",
    order:"asc"
   })



useEffect(() => {
        fetchMovies()
    }, [])

    useEffect(() => {
     if(sort.by !=="default"){
        const sortedMovies=_.orderBy(filterMovie, [sort.by],[sort.order])
        setFilterMovie(sortedMovies)
     }


     
    }, [sort])
    

    const fetchMovies = async ()=>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=183928bab7fc630ed0449e4f66ec21bd`

        )
    const data= await response.json();
console.log(data);
setMovies(data.results)
setFilterMovie(data.results)
    }


    const hanleFilter=rate=>{
        if(rate===minRating){
            setMinRating(0)
            setFilterMovie(movies)
        }
        else{
            setMinRating(rate)

     const filtered=   movies.filter(movie=>movie.vote_average >=rate)
     setFilterMovie(filtered)
        }
    }

    const handleSort =((e)=>{
        const {name,value}=e.target;
        setSort(prev=>{return {...prev,[name]:value}
        })

    })
    console.log(sort);
    

    return (
   <section className="movie-list">
    <header className='movie-list-header'>
        <h2 className="movie-list-heading">Popular🔥</h2>
        {/* fs=filter and sorting */}
        <div className="movie-list-fs">
<FilterGroup minRating={minRating}
 onRatingClick={hanleFilter}
 ratings={[8,7,6]}
 />

<select name="by" id="" onChange={handleSort} value={sort.by} className="movie-sorting">
    <option value="default">Sorting</option>
    <option value="release_date">Date</option>
    <option value="vote_average">Rate</option>
</select>
<select name="order" id="" onChange={handleSort} value={sort.order} className="movie-sorting">
    <option value="asc">Ascending</option>
    <option value="desc">descending</option>
    
</select>
        </div>
    </header>

{/* cards  */}

<div className="movie-cards">
    {filterMovie.map((movie)=>(<MovieCard movie={movie} key={movie.id} />
))}
</div>


   </section>
  )
}

export default MoviList


