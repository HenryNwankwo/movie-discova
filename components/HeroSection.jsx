import { FaCirclePlay } from 'react-icons/fa6';
import Header from './Header';
import Image from 'next/image';

function HeroSection() {
  return (
    <section className='mbox-hero-section'>
      <Header></Header>
      <article className='mbox-hero-featured-movie'>
        <h1 className='mbox-hero-title'>John Wick 3: Parabellum</h1>
        <div className='mbox-hero-movie-rating'>
          <p className='flex items-center mr-5'>
            <Image
              src='./assets/imdb.svg'
              alt='imdb image'
              width={30}
              height={30}
              className='mr-1.5'
            />{' '}
            79.0/100
          </p>
          <p className='flex items-center'>
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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          dolor sequi, velit repellat recusandae quis officia eaque sint nobis
          ipsum alias corporis quasi quae, provident libero inventore ratione,
          incidunt aspernatur.
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
