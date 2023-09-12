import { FaCirclePlay } from 'react-icons/fa6';
import Image from 'next/image';

function HeroSection() {
  return (
    <section className='mbox-hero-section'>
      <article className='mbox-hero-featured-movie'>
        <h1 className='mbox-hero-title'>John Wick 3: Parabellum</h1>
        <div className='mbox-hero-movie-rating'>
          <p className='flex items-center mr-5 font-semibold'>
            <Image
              src='./assets/imdb.svg'
              alt='imdb image'
              width={30}
              height={30}
              className='mr-1.5'
            />{' '}
            79.0/100
          </p>
          <p className='flex items-center font-semibold'>
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
        <p className='mbox-hero-movie-description'>
          John Wick is on the run after killing a member of the international
          assassins guild and with a $14million price tag on his head, he is the
          target of hit men and women everywhere.
        </p>
        <button className='mbox-hero-btn'>
          <FaCirclePlay className='text-white mr-2' />
          WATCH TRAILER
        </button>
      </article>
    </section>
  );
}

export default HeroSection;
