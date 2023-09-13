import Image from 'next/image';
import Link from 'next/link';

function AsideHeader() {
  return (
    <header className='movies-page-logo-group'>
      <Link href='/' className='flex items-center justify-center'>
        <Image
          src={'./assets/tv.svg'}
          alt='MovieBox Logo'
          width={30}
          height={30}
          className='mr-3'
        />{' '}
        <span className='flex font-semibold text-lg'>MovieBox</span>
      </Link>
    </header>
  );
}

export default AsideHeader;
