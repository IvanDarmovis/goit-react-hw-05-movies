import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from 'Services/Api';

const Ap = new Api();

export default function Reviews() {
  const [data, setData] = useState();
  const { movieId } = useParams();

  async function getReview(id) {
    const data = await Ap.getReviews(id);
    console.log(data.data.results);
    setData(data.data.results);
  }

  useEffect(() => {
    getReview(movieId);
  }, [movieId]);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <ul>
        {data.map(el => {
          return (
            <li key={el.id}>
              <h2>{el.author}</h2>
              <p>{el.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
