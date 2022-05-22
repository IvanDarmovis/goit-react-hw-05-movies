import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Api from 'Services/Api/Api';
import s from './Header.module.css';

const Ap = new Api();

export default function Header() {
  const [temp, setTemp] = useState(false);
  useEffect(() => {
    Ap.getPopular();
  }, [temp]);
  return (
    <header>
      <nav className={s.navigation}>
        <NavLink
          to={'/'}
          className={({ isActive }) => (isActive ? s.activeNavLink : s.navLink)}
          onClick={() => setTemp(!temp)}
        >
          Popular
        </NavLink>
        <NavLink
          to={'/movies'}
          className={({ isActive }) => (isActive ? s.activeNavLink : s.navLink)}
          onClick={() => setTemp(!temp)}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
