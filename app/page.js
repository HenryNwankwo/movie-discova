import FeaturedMoviesSection from '@/components/FeaturedMoviesSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className='w-full h-auto max-w-6xl mx-auto relative'>
      <Header></Header>
      <HeroSection></HeroSection>
      <FeaturedMoviesSection></FeaturedMoviesSection>
      <Footer></Footer>
    </main>
  );
}
