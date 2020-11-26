import React from 'react';

import HomePage from './pages/HomePage';
import PokedexPage from './pages/PokedexPage';
import EmptyPage from './pages/EmptyPage';
import Pokemon, { PokemonProps } from './pages/Pokemon/Pokemon';

type MenuItem = {
  title: string;
  link: LinkEnum;
  component: (props: React.PropsWithChildren<any>) => React.ReactNode;
};

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id',
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

const SECOND_ROUTES: MenuItem[] = [
  {
    title: 'Pokemon',
    link: LinkEnum.POKEMON,
    component: ({ id }: PokemonProps) => <Pokemon id={id} />,
  },
];

type Routes = {
  [s: string]: (props: React.PropsWithChildren<any>) => React.ReactNode;
};

const routes = GENERAL_MENU.concat(SECOND_ROUTES).reduce(
  (acc: Routes, menuItem: MenuItem) => {
    acc[menuItem.link] = menuItem.component;

    return acc;
  },
  {},
);

export default routes;
