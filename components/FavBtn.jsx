'use client';
import { useState } from 'react';
import { MdFavorite } from 'react-icons/md';

function FavBtn() {
  const [favourite, setFavourite] = useState(false);
  const favClickHandler = () => {
    setFavourite((prev) => !prev);
  };

  return (
    <button className={`mbox-movie-favourite`} onClick={favClickHandler}>
      <MdFavorite
        className={`text-lg ${
          favourite === true ? 'text-red-500' : 'text-white'
        } `}
      />
    </button>
  );
}

export default FavBtn;
