import { BsStarFill } from 'react-icons/bs';
function MovieInfoGroup({ movieDetails }) {
  const release_date = new Date(movieDetails.release_date).toUTCString();
  const genres = movieDetails.genres;
  return (
    <article className='movie-info-group'>
      <div className='movie-info'>
        <span data-testid='movie-title'>{movieDetails.title}</span>
        <span className='small-dot'></span>
        <span data-testid='movie-release-date' className='block mt-1.5 sm:mt-0'>
          {release_date}
        </span>
        <span className='small-dot'></span>
        <div className='flex sm:items-center  my-1.5 sm:my-0'>
          <span className=''>PG - 13</span>
          <span className='small-dot'></span>
          <span data-testid='movie-runtime' className='block ml-2 sm:ml-0'>
            {movieDetails.runtime}
          </span>
          m
        </div>
      </div>
      <div className='flex items-center my-1 mt-2 lg:mt-0'>
        {genres?.map((genre) => (
          <span className='category-tag ml-6' key={genre.id}>
            {genre.name}
          </span>
        ))}
      </div>
      <p className='movie-rating'>
        <BsStarFill className='text-sm lg:text-lg text-yellow-400 mr-2' />
        <span className='text-neutral-300 font-medium'>8.5</span>
        <span className='block mx-3'>|</span>
        <span className='text-sm lg:text-base'>350k</span>
      </p>
    </article>
  );
}

export default MovieInfoGroup;
