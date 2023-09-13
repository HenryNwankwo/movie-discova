import Image from 'next/image';
import { BsChevronDown, BsListUl } from 'react-icons/bs';

function MovieCast({ movieDetails }) {
  return (
    <article className='movie-description-ad-group'>
      <article className='movie-description-group'>
        <p data-testid='movie-overview'>{movieDetails.overview}</p>
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
        <div className='flex items-center justify-between'>
          <button className='top-rated-btn'>Top rated movie #65</button>
          <button className='award-nomination-btn'>
            Awards 9 nomination
            <BsChevronDown className='ml-2 text-lg' />
          </button>
        </div>
      </article>
      <article className='movie-ad-group'>
        <button className='flex items-center justify-center w-full my-1 p-2 px-4 rounded-md bg-pink-600 hover:bg-pink-500 text-white'>
          <Image
            src={'/assets/TwoTickets.svg'}
            width={25}
            height={25}
            alt='see showtimes icon'
            className='mr-3'
          />
          See showtimes
        </button>
        <button className='flex items-center justify-center w-full mt-2 p-2 px-4 rounded-md bg-pink-50 hover:bg-pink-100 border-[1px] border-pink-600'>
          <BsListUl className='text-lg mr-3' />
          More watch options
        </button>
        <div className='w-full relative h-44'>
          <Image
            src={'/assets/movieAd.png'}
            width={300}
            height={300}
            alt='Movie ad image'
            className='mt-3'
          />
          <p className='absolute flex items-center w-full text-white text-[0.7rem] bottom-2 bg-black bg-opacity-40 p-2'>
            <BsListUl className='text-lg mr-2' />
            The Best Movies and Shows in September
          </p>
        </div>
      </article>
    </article>
  );
}

export default MovieCast;
