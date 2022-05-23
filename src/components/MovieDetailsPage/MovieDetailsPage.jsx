import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link, Routes, Route } from 'react-router-dom';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
import Api from 'Services/Api';

const Ap = new Api();

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [id, setId] = useState(movieId);
  const [data, setData] = useState(() => {});

  async function getMovieDetail(id) {
    const data = await Ap.getMovieDetail(id);
    setData(data.data);
  }

  useEffect(() => {
    getMovieDetail(id);
  }, [id]);

  if (!data) return <h1>Loading...</h1>;

  const { original_title, backdrop_path, vote_average, overview, genres } =
    data;

  return (
    <div>
      <button type="button" onClick={() => navigate('/')}>
        Go back
      </button>
      <img
        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${backdrop_path}`}
        alt={original_title}
        width="480"
      />
      <div>
        <h1>{original_title}</h1>
        <p>User Score: {vote_average}</p>
        <p>Overview</p>
        <p>{overview}</p>
        <p>Genres</p>
        <p>{genres.reduce((acc, el) => [...acc, el.name], []).join(', ')}</p>
      </div>
      <div>
        <Link to={`/movies/${id}/reviews`}>Reviews</Link>
        <Link to={`/movies/${id}/credits`}>Cast</Link>
      </div>
      <Routes>
        <Route path="credits" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}
