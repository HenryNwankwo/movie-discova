import FeaturedMoviesSection from '@/components/FeaturedMoviesSection';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <main className=''>
      <section className='hero-section'>
        <header></header>
      </section>
      <FeaturedMoviesSection></FeaturedMoviesSection>
      <Footer></Footer>
    </main>
  );
}
