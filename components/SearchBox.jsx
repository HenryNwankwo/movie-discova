'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { BiSearch } from 'react-icons/bi';
import { useRouter } from 'next/navigation';

const SearchBox = () => {
  const [searchError, setSearchError] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cardIsOpen, setCardIsOpen] = useState(false);
  const movieCardRef = useRef(null);
  const router = useRouter();
  const API_KEY = process.env.NEXT_PUBLIC_DB_API_KEY;
  const searchURL = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=${API_KEY}`;
  console.log('Initial loading: ', loading);
  //fetching the searched movie
  const getMovie = () => {
    fetch(searchURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response is not ok!');
        }
        return response.json();
      })
      .then((data) => {
        setSearchedMovie(data.results);
        setLoading(false);
        console.log('After data loading: ', loading);
        console.log(data);
        console.log('This is searchemovie::', searchedMovie);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  };

  useEffect(() => {
    getMovie();
  }, [searchValue]);

  //HAndling input change
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value == '') {
      setCardIsOpen(false);
    } else {
      setCardIsOpen(true);
    }
  };

  return (
    <article className='mbox-search-group'>
      <form className='relative'>
        <input
          type='text'
          name='search'
          id='search'
          className='mbox-search-input'
          placeholder='What do you want to watch?'
          onChange={handleChange}
        />
        <label htmlFor='search' className='mbox-search-input-label'>
          <BiSearch className='text-lg' />{' '}
        </label>

        {/* Search dropdown */}

        {cardIsOpen ? (
          <article className='mbox-search-dropdown' ref={movieCardRef}>
            {loading && (
              <d className='w-full flex items-center justify-center text-slate-600 text-center p-4'>
                Searching...
              </d>
            )}
            {searchedMovie.length > 0 ? (
              searchedMovie.map((movie) => (
                /* search card */

                <div
                  className='mbox-search-movie-card'
                  key={movie.id}
                  onClick={() => router.push(`/movies/${movie.id}`)}
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt=''
                    width={50}
                    height={50}
                    className='mr-3'
                  />
                  <div className='flex flex-col justify-center'>
                    <p className='text-xs md:text-sm'>{movie.title}</p>
                    {movie.release_date ? (
                      <p className='text-[0.55rem] md:text-xs'>
                        {new Date(movie.release_date).getFullYear()}
                      </p>
                    ) : null}
                  </div>
                </div>
              ))
            ) : (
              <p className='w-full flex items-center justify-center text-slate-600 text-center p-4'>
                Searched movie not found!
              </p>
            )}
          </article>
        ) : null}
      </form>
    </article>
  );
};

export default SearchBox;
