import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from 'Services/Api';
import s from './Reviews.module.css';

const Ap = new Api();

export default function Reviews() {
  const [data, setData] = useState();
  const { movieId } = useParams();

  async function getReview(id) {
    const data = await Ap.getReviews(id);
    setData(data.data.results);
  }

  useEffect(() => {
    getReview(movieId);
  }, [movieId]);

  if (!data) return <p>Loading...</p>;

  return (
    <ul className={s.reviews}>
      {data.map(el => {
        return (
          <li key={el.id} className={s.reviewItem}>
            <h2 className={s.author}>{el.author}</h2>
            <p className={s.text}>{el.content}</p>
          </li>
        );
      })}
    </ul>
  );
}
