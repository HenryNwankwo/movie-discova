import Image from 'next/image';
import Link from 'next/link';
import FavBtn from './FavBtn';

function MovieCard({ id, poster, release_date, title }) {
  const movie_release_date = new Date(release_date).getFullYear();
  return (
    <article data-testid='movie-card' className='mbox-movie-card'>
      <p className='mbox-movie-category'>TV Series</p>
      <FavBtn></FavBtn>
      <Image
        src={poster}
        alt=''
        width={250}
        height={250}
        data-testid='movie-poster'
        className=''
      />
      <h6 data-testid='movie-release-date' className='mbox-movie-year'>
        {movie_release_date}
      </h6>
      <Link href={`/movies/${id}`}>
        <p data-testid='movie-title' className='mbox-movie-title'>
          {title}
        </p>
      </Link>
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
