import Image from 'next/image';
import Link from 'next/link';

function AsideNav() {
  return (
    <nav className='movies-page-nav'>
      <Link href='/' className='nav-links'>
        <Image
          src={'/assets/Home.svg'}
          height={25}
          width={25}
          alt='Movies Home'
          className='mr-3'
        />
        <span className=''>Home</span>
      </Link>
      <Link href='#' className='nav-links'>
        <Image
          src={'/assets/MovieProjector.svg'}
          height={20}
          width={20}
          alt='Movies'
          className='mr-3'
        />
        <span className=''>Movies</span>
      </Link>
      <Link href='#' className='nav-links'>
        <Image
          src={'/assets/TVShow.svg'}
          height={20}
          width={20}
          alt='TV Series'
          className='mr-3'
        />
        <span className=''>TV Series</span>
      </Link>
      <Link href='#' className='nav-links'>
        <Image
          src={'/assets/Calendar.svg'}
          height={20}
          width={20}
          alt='Upcoming'
          className='mr-3'
        />
        <span className=''>Upcoming</span>
      </Link>
    </nav>
  );
}

export default AsideNav;
