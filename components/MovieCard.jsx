import Image from 'next/image';
import { MdFavorite } from 'react-icons/md';

function MovieCard() {
  return (
    <article className='mbox-movie-card'>
      <p className='mbox-movie-category'>TV Series</p>
      <button className='mbox-movie-favourite'>
        <MdFavorite className='text-white text-lg' />
      </button>
      <Image
        src=''
        alt=''
        width={100}
        height={100}
        className='mbox-movie-image'
      />
      <h6 className='mbox-movie-year'>USA, 2021</h6>
      <p className='mbox-movie-title'>
        Shang-Chi and the legend of the ten rings
      </p>
      <div className='mbox-movie-ratings'>
        <p className='flex items-center'>
          <Image
            src='./assets/imdb.svg'
            alt='imdb image'
            width={30}
            height={30}
            className='mr-1.5'
          />{' '}
          79.0/100
        </p>
        <p className='flex items-center mt-1.5 sm:mt-0'>
          <Image
            src='./assets/tomato.svg'
            alt=''
            width={15}
            height={15}
            className='mr-1.5'
          />{' '}
          71%
        </p>
      </div>
      <p className='mbox-movie-tags'>Action, Adventure, Fantasy</p>
    </article>
  );
}

export default MovieCard;
