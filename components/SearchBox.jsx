'use client';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { BiSearch } from 'react-icons/bi';

const SearchBox = () => {
  const [searchError, setSearchError] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const API_KEY = process.env.NEXT_PUBLIC_DB_API_KEY;
  const searchURL = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=${API_KEY}`;

  // validating and handling form input

  const formik = useFormik({
    initialValues: {
      search: '',
    },
    validationSchema: Yup.object({
      search: Yup.string().required('Movie name is required!'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setSearchValue(values.search);
    },
  });

  return (
    <article className='mbox-search-group'>
      <form onSubmit={formik.handleSubmit} className='mbox-search-form'>
        <input
          type='text'
          name='search'
          id='search'
          className='mbox-search-input'
          placeholder='What do you want to watch?'
          onChange={formik.handleChange}
          value={formik.values.search}
        />
        <button type='submit' className='mbox-search-input-label'>
          <BiSearch className='text-lg' />{' '}
        </button>
        {formik.touched.search && formik.errors.search
          ? setSearchError(formik.errors.search)
          : null}
      </form>
    </article>
  );
};

export default SearchBox;
