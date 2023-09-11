import FeaturedMoviesSection from '@/components/FeaturedMoviesSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <main className=''>
      <HeroSection></HeroSection>
      <FeaturedMoviesSection></FeaturedMoviesSection>
      <Footer></Footer>
    </main>
  );
}
