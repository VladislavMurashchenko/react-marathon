import React from 'react';

import HomePage from './pages/HomePage';
import PokedexPage from './pages/PokedexPage';
import EmptyPage from './pages/EmptyPage';

type MenuItem = {
  title: string;
  link: string;
  component: () => React.ReactNode;
};

export const GENERAL_MENU: MenuItem[] = [
  {
    title: 'Home',
    link: '/',
    component: () => <HomePage />,
  },
  {
    title: 'Pokedex',
    link: '/pokedex',
    component: () => <PokedexPage />,
  },
  {
    title: 'Legendaries',
    link: '/legendaries',
    component: () => <EmptyPage title="Legendaries" />,
  },
  {
    title: 'Documentation',
    link: '/documentation',
    component: () => <EmptyPage title="Documentation" />,
  },
];

type Routes = {
  [s: string]: () => React.ReactNode;
};

const routes = GENERAL_MENU.reduce((acc: Routes, menuItem: MenuItem) => {
  acc[menuItem.link] = menuItem.component;

  return acc;
}, {});

export default routes;
