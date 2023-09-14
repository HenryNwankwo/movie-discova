import { BsStarFill } from 'react-icons/bs';
function MovieInfoGroup({ movieDetails }) {
  const release_date = new Date(movieDetails.release_date).toUTCString();
  const genres = movieDetails.genres;
  return (
    <article className='movie-info-group'>
      <div className='movie-info'>
        <span data-testid='movie-title'>{movieDetails.title}</span>
        <span className='small-dot'></span>
        <span data-testid='movie-release-date' className=''>
          {release_date}
        </span>
        <span className='small-dot'></span>
        <span className=''>PG - 13</span>
        <span className='small-dot'></span>
        <span data-testid='movie-runtime' className='block'>
          {movieDetails.runtime}
        </span>
        m
        {genres?.map((genre) => (
          <span className='category-tag ml-6' key={genre.id}>
            {genre.name}
          </span>
        ))}
      </div>
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
