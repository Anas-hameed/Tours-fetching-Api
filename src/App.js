import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() {
  let [loading, SetLoading] = useState(true);
  let [tour, Settour] = useState([]);
  async function fetchData() {
    SetLoading(true);
    const t = await fetch(url);
    const data = await t.json();
    SetLoading(false);
    Settour(data);
    console.log(data);
  }
  const removeTour = (id) => {
    const newtour = tour.filter((item) => item.id !== id);
    console.log(newtour);
    Settour(newtour);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tour.length === 0) {
    return (
      <div className='loading'>
        <button className='btn' onClick={fetchData}>
          Refresh
        </button>
      </div>
    );
  }
  return (
    <main>
      <Tours tour={tour} removeTour={removeTour}></Tours>
    </main>
  );
}

export default App;
