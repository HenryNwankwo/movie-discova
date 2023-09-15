'use client';
import MovieCard from './MovieCard';
import { useEffect, useState } from 'react';

function MovieCardGroup() {
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = process.env.NEXT_PUBLIC_DB_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

  const getMovies = () => {
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response is not ok!');
        }
        return response.json();
      })
      .then((data) => {
        setTopMovies(data.results.slice(0, 10));
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error occured!', error);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return loading ? (
    <div className='w-full h-[500px] flex items-center justify-center'>
      <p className='text-center w-full'>Loading movies...</p>
    </div>
  ) : (
    <div className='mbox-movies-card-group'>
      {topMovies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          poster={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          title={movie.title}
          release_date={movie.release_date}
        ></MovieCard>
      ))}
    </div>
  );
}

export default MovieCardGroup;
