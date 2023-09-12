'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

export default function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerNavRef = useRef(null);
  const menuRef = useRef(null);

  // on click outside
  useEffect(() => {
    const clickOutsideHandler = (e) => {
      if (headerNavRef.current && !headerNavRef.current.contains(e.target)) {
        setMenuOpen((prev) => (prev === true ? false : prev));
      }
    };
    window.addEventListener('mousedown', clickOutsideHandler);

    return () => {
      window.removeEventListener('mousedown', clickOutsideHandler);
    };
  }, []);

  // Checking if user is scrolling
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

  const menuHandler = () => {
    setMenuOpen((prev) => !prev);
    console.log(menuOpen);
  };

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
      <nav
        className={`mbox-search-sign-in-group ${menuOpen ? 'flex' : 'hidden'}`}
        ref={headerNavRef}
      >
        <article className='mbox-search-group'>
          <form action='' className='mbox-search-form'>
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
      </nav>
      <div
        className='mbox-menu-burger text-white sm:hidden'
        onClick={menuHandler}
        ref={menuRef}
      >
        <HiOutlineMenuAlt4 className='text-lg' />
      </div>
    </header>
  );
}
