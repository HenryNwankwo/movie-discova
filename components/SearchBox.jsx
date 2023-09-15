'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { BiSearch } from 'react-icons/bi';

const SearchBox = () => {
  const [searchError, setSearchError] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cardIsOpen, setCardIsOpen] = useState(false);
  const movieCardRef = useRef(null);
  const API_KEY = process.env.NEXT_PUBLIC_DB_API_KEY;
  const searchURL = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=${API_KEY}`;

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
        setSearchedMovie(data);
        setLoading(true);
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
    //searchedMovie.filter((movie) => movie.includes(e.target.value));
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
        <article className='mbox-search-dropdown' ref={movieCardRef}>
          <div className='mbox-search-movie-card'>
            <Image src='' alt='' width={20} height={20} className='mr-2' />
            <p className='text-black'>Jack Reacher</p>
          </div>
        </article>
      </form>
    </article>
  );
};

export default SearchBox;
