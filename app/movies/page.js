import Image from 'next/image';
import AsideHeader from '@/components/AsideHeader';
import AsideNav from '@/components/AsideNav';
import AsideQuiz from '@/components/AsideQuiz';
import MovieInfoGroup from '@/components/MovieInfoGroup';
import MovieCast from '@/components/MovieCast';

function page() {
  return (
    <main className='movies-page-container'>
      <aside className='movies-page-aside'>
        <AsideHeader></AsideHeader>
        <AsideNav></AsideNav>
        <AsideQuiz></AsideQuiz>
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
      <section className='movies-page-main'>
        <article></article>
        <MovieInfoGroup></MovieInfoGroup>
        <MovieCast></MovieCast>
      </section>
    </main>
  );
}

export default page;
