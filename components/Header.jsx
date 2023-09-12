'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

export default function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 100) {
        setScrolling((prev) => (prev === false ? true : prev));
      } else {
        setScrolling((prev) => (prev === true ? false : prev));
      }
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <header
      className={`mbox-header ${scrolling ? 'mbox-header-scroll' : null}`}
    >
      <article className='mbox-logo-group'>
        <Image
          src='./assets/Logo.svg'
          alt='MovieBox Logo'
          width={150}
          height={150}
          className=''
        />
      </article>
      <article className='mbox-search-group'>
        <form action=''>
          <input
            type='text'
            name='search'
            id='search'
            className='mbox-search-input'
            placeholder='What do you want to watch?'
          />
          <label htmlFor='search' className='mbox-search-input-label'>
            {' '}
            <BiSearch className='text-lg' />{' '}
          </label>
        </form>
      </article>
      <article className='mbox-sign-in-group'>
        <Link href='#' className='mbox-sign-in-link'>
          Sign in
        </Link>
        <div className='mbox-menu-burger'>
          <HiOutlineMenuAlt4 className='text-lg' />
        </div>
      </article>
    </header>
  );
}
