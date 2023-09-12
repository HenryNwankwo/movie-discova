import React from 'react';

function MovieCast() {
  return (
    <article className='movie-description-ad-group'>
      <article className='movie-description-group'>
        <p>
          After thirty years, Maverick is still pushing the envelope as a top
          naval aviator, but must confront ghosts of his past when he leads TOP
          GUN's elite graduates on a mission that demands the ultimate sacrifice
          from those chosen to fly it.
        </p>
        <p className='names-group'>
          Director :
          <span className='block ml-1 text-pink-600'>Joseph Kosinski</span>{' '}
        </p>
        <p className='names-group'>
          Writers :
          <span className='block ml-1 text-pink-600'>
            Jim Cash, Jack Epps Jr, Peter Craig
          </span>
        </p>
        <p className='names-group'>
          Stars :{' '}
          <span className='block ml-1 text-pink-600'>
            Tom Cruise, Jennifer Connelly, Miles Teller
          </span>
        </p>
      </article>
      <article className='movie-ad-group'></article>
    </article>
  );
}

export default MovieCast;
