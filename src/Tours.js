import React from 'react';
import Tour from './Tour';
const Tours = ({ tour, removeTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>Tours</h2>
        <div className='underline'></div>
      </div>
      {tour.map((item) => {
        return <Tour key={item.id} tour={item} removeTour={removeTour}></Tour>;
      })}
    </section>
  );
};

export default Tours;
