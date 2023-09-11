import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <section className='hero-section'>
        <header></header>
      </section>
      <section className='featured-movies-section'></section>
      <Footer></Footer>
    </main>
  );
}
