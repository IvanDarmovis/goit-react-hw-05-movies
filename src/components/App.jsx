import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import Api from 'Services/Api';
import MovieDetailsPage from './MovieDetailsPage';
import { useEffect, useState } from 'react';
import Form from './Form';

const Ap = new Api();

export const App = () => {
  const [films, setFilms] = useState([]);

  async function getFilms() {
    const arr = await Ap.getPopular();
    setFilms(arr.data.results);
  }

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/movies" element={<Form />} />
        <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
        <Route path="/*" element={<HomePage films={films} />} />
      </Routes>
    </div>
  );
};
