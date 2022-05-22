import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={'hallo'} />
        <Route path="/movies" element={<HomePage />} />
      </Routes>
    </div>
  );
};
