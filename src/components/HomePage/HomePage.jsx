import { Link } from 'react-router-dom';

export default function HomePage({ films }) {
  return (
    <ul>
      {films.length > 0 &&
        films.map(el => {
          const path = `/movies/${el.id}`;
          return (
            <li key={el.id}>
              <img
                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${el.poster_path}`}
                alt=""
                width="50"
              />
              <Link to={path}>{el.original_title}</Link>
            </li>
          );
        })}
    </ul>
  );
}
