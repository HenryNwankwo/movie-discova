import Image from 'next/image';

function AsideHeader() {
  return (
    <header className='movies-page-logo-group'>
      <Image
        src={'./assets/tv.svg'}
        alt='MovieBox Logo'
        width={30}
        height={30}
        className='mr-3'
      />{' '}
      <span className='font-semibold text-lg'>MovieBox</span>
    </header>
  );
}

export default AsideHeader;
