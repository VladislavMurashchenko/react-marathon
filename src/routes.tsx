import React from 'react';

import HomePage from './pages/HomePage';
import PokedexPage from './pages/PokedexPage';
import EmptyPage from './pages/EmptyPage';

type MenuItem = {
  title: string;
  link: LinkEnum;
  component: () => React.ReactNode;
};

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
}

export const GENERAL_MENU: MenuItem[] = [
  {
    title: 'Home',
    link: LinkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokedex',
    link: LinkEnum.POKEDEX,
    component: () => <PokedexPage />,
  },
  {
    title: 'Legendaries',
    link: LinkEnum.LEGENDARIES,
    component: () => <EmptyPage title="Legendaries" />,
  },
  {
    title: 'Documentation',
    link: LinkEnum.DOCUMENTATION,
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
