import { BsStarFill } from 'react-icons/bs';
function MovieInfoGroup({ movieDetails }) {
  const release_date = new Date(movieDetails.release_date).getFullYear();
  const genres = movieDetails.genres;
  return (
    <article className='movie-info-group'>
      <p className='movie-info'>
        <span data-testid='movie-title'>{movieDetails.title}</span>
        <span className='small-dot'></span>
        <span data-testid='movie-release-date' className=''>
          {release_date.toString()}
        </span>
        <span className='small-dot'></span>
        <span className=''>PG - 13</span>
        <span className='small-dot'></span>
        <span data-testid='movie-runtime' className='block mr-6'>
          {movieDetails.runtime}
        </span>
        {genres?.map((genre) => (
          <span className='category-tag' key={genre.id}>
            {genre.name}
          </span>
        ))}
      </p>
      <p className='movie-rating'>
        <BsStarFill className='text-lg text-yellow-400 mr-2' />
        <span className='text-neutral-300 font-medium'>8.5</span>
        <span className='block mx-3'>|</span>
        <span className=''>350k</span>
      </p>
    </article>
  );
}

export default MovieInfoGroup;
