import Image from 'next/image';
import { FaPlay } from 'react-icons/fa6';

function MoviePreview() {
  return (
    <article className='movie-preview-group'>
      <Image
        src={'/assets/moviePreview.png'}
        width={100}
        height={100}
        alt='Movie image'
        className='trailer-image'
      />
      <article className='watch-trailer-group'>
        <button className='trailer-play-btn'>
          <FaPlay className='text-white text-lg lg:text-4xl' />
        </button>
        <p className='mt-2'>Watch Trailer</p>
      </article>
    </article>
  );
}

export default MoviePreview;
