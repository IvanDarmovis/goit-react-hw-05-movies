import HomePage from 'components/HomePage';
import { createBrowserHistory } from 'history';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Api from 'Services/Api';

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
    console.log(arr.data.results);
    setIsFound(true);
  }

  function onFormSubmit(ev) {
    ev.preventDefault();
    getMovies(input);
    history.push({
      pathname: location.pathname,
      search: `?query=${input}`,
    });
  }

  useEffect(() => {
    const query = params.get('query');
    if (query) {
      getMovies(query);
    }
  }, []);

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label>
          <input
            type="text"
            value={input}
            onChange={ev => setInput(ev.currentTarget.value)}
          />
          <button type="button">Search</button>
        </label>
      </form>
      {isFound && <HomePage films={films} />}
    </div>
  );
}
