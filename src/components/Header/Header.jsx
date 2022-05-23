import Form from 'components/Form';
import { NavLink, Routes, Route } from 'react-router-dom';
import s from './Header.module.css';

export default function Header() {
  return (
    <header>
      <nav className={s.navigation}>
        <NavLink
          to={'/'}
          className={({ isActive }) => (isActive ? s.activeNavLink : s.navLink)}
        >
          Popular
        </NavLink>
        <NavLink
          to={'/movies'}
          className={({ isActive }) => (isActive ? s.activeNavLink : s.navLink)}
        >
          Movies
        </NavLink>
      </nav>
      <Routes>
        <Route path="/movies" element={<Form />} />
      </Routes>
    </header>
  );
}
