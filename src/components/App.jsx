import { Route, Routes } from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from 'react';
import Api from 'Services/Api';

const Header = lazy(() => import('./Header'));
const HomePage = lazy(() => import('./HomePage'));
const MovieDetailsPage = lazy(() => import('./MovieDetailsPage'));
const Form = lazy(() => import('./Form'));

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
      <Suspense>
        <Header />
        <Routes>
          <Route path="/movies" element={<Form />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="/*" element={<HomePage films={films} />} />
        </Routes>
      </Suspense>
    </div>
  );
};
