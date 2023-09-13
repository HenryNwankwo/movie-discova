'use client';
import MovieCast from './MovieCast';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieInfoGroup from './MovieInfoGroup';
import MoviePreview from './MoviePreview';

function MoviesMainPage() {
  const [movieDetails, setMovieDetails] = useState({});
  const searchParams = useSearchParams();
  const movieID = parseInt(searchParams.get('id'));
  const API_KEY = process.env.NEXT_PUBLIC_DB_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}`;

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
  }, [movieID]);
  return (
    <section className='movies-page-main'>
      <MoviePreview></MoviePreview>
      <MovieInfoGroup movieDetails={movieDetails}></MovieInfoGroup>
      <MovieCast movieDetails={movieDetails}></MovieCast>
    </section>
  );
}

export default MoviesMainPage;
