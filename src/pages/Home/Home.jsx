// import { getTrending } from 'api/TMDBApi';
// import Loader from '../../components/Loader/Loader';
import React, { useEffect, useState } from 'react';

const Home = () => {
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [movies, setMovies] = useState([]);
  //   const [error, setError] = useState('');

  //   useEffect(() => {
  //     setIsLoading(true);

  // getTrending()
  //   .then(trendingMovies => {
  //     setMovies(trendingMovies);
  //   })
  //   .catch(error => {
  //     setError(error.message);
  //   })
  //   .finally(() => {
  //     setIsLoading(false);
  //   });
  //   }, []);

  return (
    <div>
      {/* <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
        Trending today
      </h1> */}
      {/* {isLoading && <Loader />} */}
      <p>Shops</p>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
      <p>Medicines</p>

      {/* {error && (
        <p style={{ textAlign: 'center', margin: 'auto' }}>Sorry. {error} 😭</p>
      )} */}
    </div>
  );
};

export default Home;
