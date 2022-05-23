import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from 'Services/Api';
import s from './Cast.module.css';
import img from './No-photo-m.png';

const Ap = new Api();

export default function Cast() {
  const { movieId } = useParams();
  const [id] = useState(movieId);
  const [data, setData] = useState(() => {});

  async function getCast(id) {
    const data = await Ap.getCredit(id);
    setData(data.data.cast);
    console.log(data.data.cast);
  }

  useEffect(() => {
    getCast(id);
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
    <ul className={s.castWrapper}>
      {data.map(el => {
        return (
          <li key={el.id} className={s.castItem}>
            <img
              src={
                el.profile_path
                  ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${el.profile_path}`
                  : img
              }
              alt={el.name}
              width="50"
            />
            <p>{el.name}</p>
          </li>
        );
      })}
    </ul>
  );
}
