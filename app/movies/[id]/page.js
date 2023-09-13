import MoviesMainPage from '@/components/MoviesMainPage';
function page({ params }) {
  return <MoviesMainPage id={params.id}></MoviesMainPage>;
}

export default page;
