import { BsStarFill } from 'react-icons/bs';
function MovieInfoGroup() {
  return (
    <article className='movie-info-group'>
      <p className='movie-info'>
        Top Gun: Maverick
        <span className='small-dot'></span>
        <span className=''>2022</span>
        <span className='small-dot'></span>
        <span className=''>PG - 13</span>
        <span className='small-dot'></span>
        <span className='block mr-6'>2h 10m</span>
        <span className='category-tag'>Action</span>
        <span className='category-tag'>Drama</span>
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
