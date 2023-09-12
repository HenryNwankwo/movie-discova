import Image from 'next/image';

function AsideHeader() {
  return (
    <header className='movies-page-logo-group'>
      <Image
        src={'./assets/tv.svg'}
        alt='MovieBox Logo'
        width={100}
        height={100}
        className='mr-2'
      />{' '}
      <span className='font-semibold text-lg'>MovieBox</span>
    </header>
  );
}

export default AsideHeader;
