import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from 'Services/Api';

const Ap = new Api();

export default function Cast() {
  const { movieId } = useParams();
  const [id, setId] = useState(movieId);
  const [data, setData] = useState(() => {});

  async function getCast() {
    const data = await Ap.getCredit(id);
    setData(data.data.cast);
    console.log(data.data.cast);
  }

  useEffect(() => {
    getCast(id);
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <ul>
        {data.map(el => {
          return (
            <li key={el.id}>
              <img
                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${el.profile_path}`}
                alt={el.name}
                width="50"
              />
              <p>{el.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
