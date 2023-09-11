import React from 'react';
import MovieCard from './MovieCard';
import { FaChevronRight } from 'react-icons/fa6';
import Link from 'next/link';

function FeaturedMoviesSection() {
  return (
    <section className='mbox-movies-section'>
      <div className='mbox-movies-section-head'>
        <h3 className='font-bold text-2xl'>Featured Movie</h3>
        <Link
          href='#'
          className='text-pink-700 flex items-center text-left font-semibold'
        >
          See more <FaChevronRight className='text-lg ml-1' />
        </Link>
      </div>
      <MovieCard></MovieCard>
    </section>
  );
}

export default FeaturedMoviesSection;
