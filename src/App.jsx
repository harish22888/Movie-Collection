
import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import MoviList from './components/movielist/MoviList'
import Addmovie from './components/Addmovie'
import {  Routes,Route } from 'react-router-dom'
import MovieDetail from './components/MovieDetail'




const App = () => {
  return (
<div className='app'>
  <Navbar />

   
<Routes>
  
 <Route path='/' element={<MoviList/>} />
  <Route path='/Addmovie' element={<Addmovie/>} />
  <Route path="/movie/:id" element={<MovieDetail />} />
</Routes>

 


</div>
  )
}

export default App
