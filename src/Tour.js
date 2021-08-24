import React, { useState } from 'react';
const Tour = ({ tour, removeTour }) => {
  let [toggle, setToggle] = useState(true);
  let { id, name, info, image, price } = tour;

  return (
    <div className='single-tour' key={id}>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {toggle ? `${info.substring(0, 200)}...` : info}
          <button onClick={() => setToggle(!toggle)}>
            {toggle ? 'Read More' : 'Read Less'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>
          Not Intrested
        </button>
      </footer>
    </div>
  );
};

export default Tour;
