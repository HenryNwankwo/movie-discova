import Image from 'next/image';
import Link from 'next/link';
import { GoHome } from 'react-icons/go';
import { BsCameraReels } from 'react-icons/bs';

function page() {
  return (
    <main className='movies-page-container'>
      <aside className='movies-page-aside'>
        <header className='movies-page-logo-group'>
          <Image
            src=''
            alt='MovieBox Logo'
            width={100}
            height={100}
            className='mr-2'
          />{' '}
          <span className='font-semibold text-lg'>MovieBox</span>
        </header>
        <nav className='movies-page-nav'>
          <Link href='#' className='nav-links'>
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
        <article className='movies-page-quiz-group'>
          <p className='text-base text-neutral-600 font-semibold my-1.5'>
            Play movie quizes and earn free tickets
          </p>
          <p className='text-xs text-neutral-600 my-1.5'>
            50k people are playing now
          </p>
          <button className='quiz-btn'>Start playing</button>
        </article>
        <button className='nav-links logout-btn'>
          <Image
            src={'/assets/Logout.svg'}
            width={25}
            height={25}
            alt='log out'
            className='mr-3'
          />{' '}
          <span>Log out</span>
        </button>
      </aside>
      <section className='movies-page-main'>This is the main section</section>
    </main>
  );
}

export default page;
