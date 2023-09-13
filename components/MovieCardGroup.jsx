'use client';
import axios from 'axios';
import MovieCard from './MovieCard';
import { useEffect, useState } from 'react';

function MovieCardGroup() {
  const [topMovies, setTopMovies] = useState([]);
  const API_KEY = process.env.NEXT_PUBLIC_DB_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

  useEffect(() => {
    async function fetchMovies() {
      try {
        const resp = await axios.get(URL);
        setTopMovies(resp.data.results.slice(0, 10));
        console.log(resp.data);
        console.log('This is top movies', topMovies);
      } catch (error) {
        console.error('Error occured!');
      }
    }
    fetchMovies();
  }, []);

  return (
    <div className='mbox-movies-card-group'>
      {topMovies.map((movie) => (
        <MovieCard
          key={movie.id}
          poster={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          title={movie.title}
          release_date={movie.release_date}
        ></MovieCard>
      ))}
    </div>
  );
}

export default MovieCardGroup;
