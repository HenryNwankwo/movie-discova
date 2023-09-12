import Image from 'next/image';
import { BsChevronDown } from 'react-icons/bs';

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
        <div className='flex items-center justify-between'>
          <button className='p-2 px-4 bg-pink-600 rounded-md text-white'>
            Top rated movie #65
          </button>
          <button className='flex item-center border-[1px] border-neutral-600 rounded-md p-2 px-4'>
            Awards 9 nomination
            <BsChevronDown className='ml-2 text-lg' />
          </button>
        </div>
      </article>
      <article className='movie-ad-group'>
        <button className='w-full my-1 p-2 px-4 rounded-md bg-pink-600 hover:bg-pink-500 text-white'>
          See showtimes
        </button>
        <button className='w-full my-1 p-2 px-4 rounded-md bg-pink-50 hover:bg-pink-100 border-[1px] border-pink-600'>
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
          <p className='absolute w-full text-white text-xs bottom-2 bg-black bg-opacity-40 p-2'>
            The Best Movies and Shows in September
          </p>
        </div>
      </article>
    </article>
  );
}

export default MovieCast;