import FeaturedMoviesSection from '@/components/FeaturedMoviesSection';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

export default function Home() {
  return (
    <main className=''>
      <section className='hero-section'>
        <header>
          <article className='mbox-logo-group'>
            <Image
              src=''
              alt='MovieBox Logo'
              width={100}
              height={100}
              className='mr-3'
            />
            MovieBox
          </article>
          <article className='mbox-search-group'>
            <form action=''>
              <input
                type='text'
                name='search'
                id='search'
                className=''
                placeholder='What do you want to watch?'
              />
              <label htmlFor='search'>
                {' '}
                <BiSearch className='text-lg' />{' '}
              </label>
            </form>
          </article>
          <article>
            <Link href='#' className='mbox-sign-in-link'>
              Sign in
            </Link>
            <div className='mbox-menu-burger'>
              <HiOutlineMenuAlt4 className='text-lg' />
            </div>
          </article>
        </header>
      </section>
      <FeaturedMoviesSection></FeaturedMoviesSection>
      <Footer></Footer>
    </main>
  );
}
