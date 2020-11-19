import { objectKeysToCamelCase } from '../utils';

import config from '../config';

export type Pokemon = {
  nameClean: string;
  abilities: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  types: string[];
  img: string;
  name: string;
  baseExperience: number;
  height: number;
  id: number;
  isDefault: boolean;
  order: number;
  weight: number;
};

export type PaginatedPokemons = {
  count: number;
  limit: string;
  offset: number;
  pokemons: Pokemon[];
  total: number;
};

type FetchParams = {
  limit: number;
  offset: number;
};

export const fetchPokemons = ({
  limit,
  offset,
}: FetchParams): Promise<PaginatedPokemons> => {
  const { protocol, host } = config.client.server;
  const { pathname } = config.client.endpoint.getPokemons.uri;

  const url = `${protocol}://${host}${pathname}`;

  return fetch(`${url}?limit=${limit}offset=${offset}`)
    .then((res) => res.json())
    .then(objectKeysToCamelCase);
};
