import { useEffect, useState, Suspense, lazy } from 'react';
import {
  useNavigate,
  useParams,
  NavLink,
  Routes,
  Route,
} from 'react-router-dom';
import Api from 'Services/Api';
import s from './MovieDetailsPage.module.css';

const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));

const Ap = new Api();

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [id] = useState(movieId);
  const [data, setData] = useState(() => {});
  const [page, setPage] = useState(-1);
  const navigate = useNavigate();

  async function getMovieDetail(id) {
    const data = await Ap.getMovieDetail(id);
    setData(data.data);
  }

  useEffect(() => {
    getMovieDetail(id);
  }, [id]);

  function onLinkClick(ev) {
    if (!ev.currentTarget.classList.contains('active')) setPage(page - 1);
  }

  if (!data) return <h1>Loading...</h1>;

  const {
    original_title,
    backdrop_path,
    poster_path,
    vote_average,
    overview,
    genres,
  } = data;

  return (
    <div className={s.container}>
      <button
        className={s.button}
        type="button"
        onClick={() => {
          navigate(page);
        }}
      >
        ← Go back
      </button>
      <div className={s.filmWrapper}>
        <img
          className={s.poster}
          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${
            backdrop_path ?? poster_path
          }`}
          alt={original_title}
          width="360"
        />
        <div className={s.filmInfo}>
          <h1>{original_title}</h1>
          <p>User Score: {vote_average}</p>
          <p className={s.subTitle}>Overview</p>
          <p>{overview}</p>
          <p className={s.subTitle}>Genres</p>
          <p>{genres.reduce((acc, el) => [...acc, el.name], []).join(', ')}</p>
        </div>
      </div>
      <div className={s.linkWrapper}>
        <NavLink
          className={({ isActive }) =>
            isActive ? ['active', s.activeDetailLink].join(' ') : s.detailLink
          }
          to={`/movies/${id}/reviews`}
          onClick={onLinkClick}
        >
          Reviews
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? ['active', s.activeDetailLink].join(' ') : s.detailLink
          }
          to={`/movies/${id}/credits`}
          onClick={onLinkClick}
        >
          Cast
        </NavLink>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="credits" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </div>
  );
}
