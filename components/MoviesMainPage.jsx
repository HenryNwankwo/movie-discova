'use client';
import MovieCast from './MovieCast';
import { useEffect, useState } from 'react';
import MovieInfoGroup from './MovieInfoGroup';
import MoviePreview from './MoviePreview';
import Loader from './Loader';

function MoviesMainPage({ id }) {
  const [movieData, setMovieData] = useState({});
  const [loading, setLoading] = useState(true);
  const API_KEY = process.env.NEXT_PUBLIC_DB_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

  // fetching movie details
  const getMovieDetails = () => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response is not ok!');
        }

        return response.json();
      })
      .then((data) => {
        setMovieData(data);
        setLoading(false);
        console.log('movie details:', movieData);
        console.log('Data.results:', data);
      })
      .catch((error) => {
        console.log('Error Message: ', error);
      });
  };

  useEffect(() => {
    getMovieDetails();
  }, [id]);

  return loading ? (
    <div className='w-full h-screen flex justify-center items-center'>
      <Loader loadingStatus={loading}></Loader>
    </div>
  ) : (
    <>
      <MoviePreview></MoviePreview>
      <MovieInfoGroup movieDetails={movieData}></MovieInfoGroup>
      <MovieCast movieDetails={movieData}></MovieCast>
    </>
  );
}

export default MoviesMainPage;
