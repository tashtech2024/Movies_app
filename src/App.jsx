import { useEffect, useState } from 'react'
import './App.css'
import MovieDisplay from "./Components/MovieDisplay"
import Form from "./Components/Form"

function App() {
const apiKey = "be2d82c8";
const [movie, setMovie] = useState(null);

//getMovie 
const getMovie = async (searchTerm) => {
try{
  const res = await fetch(`http://www.omdbapi.com/?apiKey=${apiKey}&t=${searchTerm}`)
  
  const data = await res.json(); 
  console.log(data);
  setMovie(data);
} catch (error){
  console.log(error);
}
}

useEffect(() => {
  getMovie('Joy Luck Club')

},[])

  return (
    <>
      <h1>Movies App</h1>
      <Form moviesearch={getMovie}/>
    { movie && <MovieDisplay movie={movie} />}
    </>
  );
}

export default App
