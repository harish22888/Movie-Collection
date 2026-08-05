
import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import MoviList from './components/movielist/MoviList'


const App = () => {
  return (
<div className='app'>
  

<Navbar />
<MoviList />
</div>
  )
}

export default App