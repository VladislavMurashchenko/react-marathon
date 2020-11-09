import React from 'react';
import HomePage from './pages/HomePage';
import PokedexPage from './pages/PokedexPage';

const routes = {
  '/': () => <HomePage />,
  '/pokedex': () => <PokedexPage />,
};

export default routes;
