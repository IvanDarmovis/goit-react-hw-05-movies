// import HomePage from 'components/HomePage';
import { createBrowserHistory } from 'history';
import { lazy, Suspense, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Api from 'Services/Api';
import s from './Form.module.css';

const HomePage = lazy(() => import('../HomePage'));

const Ap = new Api();

export default function Form() {
  const [input, setInput] = useState('');
  const [isFound, setIsFound] = useState(false);
  const [films, setFilms] = useState([]);
  const location = useLocation();
  const history = createBrowserHistory({ window });
  const [params] = useSearchParams();

  async function getMovies(query) {
    const arr = await Ap.getMovie(query);
    setFilms(arr.data.results);
    setIsFound(true);
  }

  function onFormSubmit(ev) {
    ev.preventDefault();
    getMovies(input);
    history.push({
      pathname: location.pathname,
      search: `?query=${input}`,
    });
    setInput('');
  }

  useEffect(() => {
    const query = params.get('query');
    if (query) {
      getMovies(query);
    }
  }, [params]);

  return (
    <div className={s.formWrapper}>
      <form onSubmit={onFormSubmit} className={s.form}>
        <label className={s.label}>
          <input
            className={s.input}
            type="text"
            value={input}
            onChange={ev => setInput(ev.currentTarget.value)}
          />
          <button className={s.button} type="button">
            Search
          </button>
        </label>
      </form>
      <Suspense fallback={<p>Loading...</p>}>
        {isFound && <HomePage films={films} />}
      </Suspense>
    </div>
  );
}
