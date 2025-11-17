import { useState } from 'react'
import './App.css'
import MovieCard from './MovieCard'

async function fetchMovie(){
  const response = await fetch("https://jsonfakery.com/movies/random");
  if (!response.ok) {
    throw new Error("Error occurred while fetching movie");
  }
  const data = await response.json();
  console.log(data);
  return data;
}

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Inception', rating: 8.5, year: 2010, description: "A skilled thief enters people’s dreams to steal secrets — but his toughest mission yet is planting an idea deep within someone’s mind.", image: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg' },
    { id: 2, title: 'Interstellar', rating: 8.5, year: 2014, description: "A team of astronauts travels through a wormhole in search of a new home for humanity as Earth faces extinction.", image: 'https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_SX300.jpg' },
    { id: 3, title: 'Tenet', year: 2020, description: "Armed with one mysterious word, a secret agent fights to prevent World War III using time inversion — where the flow of time itself can be reversed.", image: 'https://m.media-amazon.com/images/M/MV5BNTIzNDIxMzktMzlkMi00MmUyLWFmMjQtZDgwMjBmOGJmNTI3XkEyXkFqcGc@._V1_SX300.jpg' },
  ]);

  async function addMovie() {
    const movieData = await fetchMovie();
    const newMovie = {
      id: movieData.id,
      title: movieData.original_title,
      year: movieData.release_date,
      rating: movieData.vote_average,
      image: movieData.poster_path
    };
    setMovies(prev => [...prev, newMovie]); // ✅ React will re-render the list
  }

  return (
    <>
      <button id='generate' onClick={addMovie}>Add random movie</button>
      <div id='movies-list'>
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
            image={movie.image}
          />
        ))}
      </div>
    </>
  );
}

export default App;
