import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './HomePage.module.css';

export default function HomePage({ films }) {
  return (
    <ul className={s.gallery}>
      {films.length > 0 &&
        films.map(el => {
          const path = `/movies/${el.id}`;
          return (
            <li key={el.id} className={s.galleryItem}>
              <Link to={path} className={s.link}>
                <img
                  src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${
                    el.poster_path ?? el.backdrop_path
                  }`}
                  alt=""
                  width="50"
                />
                {el.original_title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

HomePage.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      backdrop_path: PropTypes.string,
      original_title: PropTypes.string.isRequired,
    })
  ),
};
