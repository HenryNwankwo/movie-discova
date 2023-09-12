import React from 'react';

function AsideQuiz() {
  return (
    <article className='movies-page-quiz-group'>
      <p className='text-base text-neutral-600 font-semibold my-1.5'>
        Play movie quizes and earn free tickets
      </p>
      <p className='text-xs text-neutral-600 my-1.5'>
        50k people are playing now
      </p>
      <button className='quiz-btn'>Start playing</button>
    </article>
  );
}

export default AsideQuiz;
