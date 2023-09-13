'use client';
import MovieCast from './MovieCast';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieInfoGroup from './MovieInfoGroup';
import MoviePreview from './MoviePreview';

function MoviesMainPage({ id }) {
  const [movieDetails, setMovieDetails] = useState({});
  const API_KEY = process.env.NEXT_PUBLIC_DB_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

  // fetching movie details
  useEffect(() => {
    async function fetchMovie() {
      try {
        const resp = await axios.get(url);
        setMovieDetails(resp.data);
        console.log(resp.data);
      } catch (error) {
        console.log('Error Message: ', error);
      }
    }
    fetchMovie();
  }, [id]);
  return (
    <>
      <MoviePreview></MoviePreview>
      <MovieInfoGroup movieDetails={movieDetails}></MovieInfoGroup>
      <MovieCast movieDetails={movieDetails}></MovieCast>
    </>
  );
}

export default MoviesMainPage;
