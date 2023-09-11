import Link from 'next/link';
import {
  FaSquareFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='mbox-footer'>
      <article className='mbox-social-links'>
        <Link href='#'>
          <FaSquareFacebook className='mbox-social-icons' />
        </Link>
        <Link href='#'>
          <FaInstagram className='mbox-social-icons' />
        </Link>
        <Link href='#'>
          <FaTwitter className='mbox-social-icons' />
        </Link>
        <Link href='#'>
          <FaYoutube className='mbox-social-icons' />
        </Link>
      </article>
      <article className='mbox-foot-links'>
        <Link href='#'> Conditions of Use </Link>
        <Link href='#'> Privacy & Policy</Link>
        <Link href='#'> Press Room </Link>
      </article>
      <article className='mbox-copyright'>
        <p> &copy; {`${currentYear} MovieBox by Adriana Eka Prayudha`} </p>
      </article>
    </footer>
  );
};

export default Footer;
